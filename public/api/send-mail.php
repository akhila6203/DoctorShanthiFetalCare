<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) $data = $_POST;

function clean_value($value) {
    return trim(strip_tags((string)$value));
}

$name = clean_value($data['name'] ?? '');
$email = filter_var(trim((string)($data['email'] ?? '')), FILTER_SANITIZE_EMAIL);
$phone = clean_value($data['phone'] ?? '');
$subjectField = clean_value($data['subject'] ?? '');
$message = clean_value($data['message'] ?? '');
$formType = clean_value($data['form_type'] ?? 'Website Enquiry');

if ($name === '' || $phone === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields with a valid email address.']);
    exit;
}

$to = 'drshanthifetalcare@gmail.com';
$mailSubject = 'Dr. Shanthi Fetal Care - ' . $formType;
$body = "New website enquiry\n\n";
$body .= "Form: {$formType}\n";
$body .= "Name: {$name}\n";
$body .= "Email: {$email}\n";
$body .= "Phone: {$phone}\n";
$body .= "Subject / Preferred Time: {$subjectField}\n\n";
$body .= "Message:\n{$message}\n";

$host = $_SERVER['HTTP_HOST'] ?? 'drshanthifetalcare.com';
$host = preg_replace('/:\\d+$/', '', $host);
$from = 'website@' . ($host ?: 'drshanthifetalcare.com');
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Dr. Shanthi Fetal Care Website <' . $from . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();

if (@mail($to, $mailSubject, $body, implode("\r\n", $headers))) {
    echo json_encode(['success' => true, 'message' => 'Thank you. Your request has been sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent. Please check the hosting PHP mail configuration.']);
}
