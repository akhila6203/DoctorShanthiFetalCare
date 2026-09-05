import { Link } from "react-router-dom";

export default function Button({ to, href, icon: Icon, children, variant = "primary", className = "" }) {
  const styles = variant === "light"
    ? "bg-white text-[#663A8E] hover:bg-[#fff7fb]"
    : "bg-[linear-gradient(135deg,#663A8E,#D94C8A)] text-white";
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${styles} ${className}`;
  const content = <>{Icon ? <Icon size={17} /> : null}<span>{children}</span></>;
  if (to) return <Link to={to} className={classes}>{content}</Link>;
  return <a href={href || "#"} className={classes}>{content}</a>;
}
