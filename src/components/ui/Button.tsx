import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  download?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  href,
  download = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-600 text-white hover:border-cyan-400 hover:text-cyan-400";

  if (href) {
    return (
      <a className={`${base} ${styles}`} href={href} download={download}>
        {children}
      </a>
    );
  }

  return <button className={`${base} ${styles}`}>{children}</button>;
}