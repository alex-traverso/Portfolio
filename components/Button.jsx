import Link from "next/link";

const BASE_CLASSNAME =
  "min-w-[120px] inline-flex items-center justify-center rounded-md transition-colors cursor-pointer focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:cursor-not-allowed";

const VARIANT_CLASSNAMES = {
  primary: "bg-accent text-white hover:opacity-90",
  secondary:
    "border border-[var(--text-tertiary-40)] text-textSecondary bg-transparent hover:border-accent hover:bg-accent hover:text-white",
};

const SIZE_CLASSNAMES = {
  lg: "text-base px-6 py-3",
  md: "text-sm px-5 py-2.5",
  sm: "text-sm px-4 py-2",
};

export const buttonClassName = (
  variant = "secondary",
  size = "sm",
  className = "",
) =>
  `${BASE_CLASSNAME} ${SIZE_CLASSNAMES[size]} ${VARIANT_CLASSNAMES[variant]} ${className}`.trim();

export default function Button({
  children,
  variant = "secondary",
  size = "sm",
  onClick,
  disabled,
  href,
  target,
  rel,
  type = "button",
  className = "",
}) {
  const classes = buttonClassName(variant, size, className);

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
