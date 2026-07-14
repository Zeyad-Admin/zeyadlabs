type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-8 py-4 font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "border border-slate-600 hover:border-cyan-400 hover:text-cyan-400";

  return <button className={`${base} ${styles}`}>{children}</button>;
}
