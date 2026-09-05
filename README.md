# Dr. Shanthi Fetal Care

Responsive React + Tailwind CSS website based on the supplied Dr. Shanthi clinical content.

## Run frontend

```bash
npm install
npm run dev
```

## PHP mail form

The contact and appointment forms submit to:

`public/api/send-mail.php`

The PHP endpoint sends mail to `drshanthifetalcare@gmail.com` using PHP `mail()`.

Important: Vite's development server does not execute PHP. To test mail locally, serve the built site through Apache/XAMPP/WAMP/Laragon or configure a local PHP server/reverse proxy. On hosting, make sure PHP mail is enabled. If the host blocks `mail()`, configure SMTP/PHPMailer instead.

## Build

```bash
npm run build
```
