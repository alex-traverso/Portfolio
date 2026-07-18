import Link from "next/link";

const buttonClassName =
  "cursor-pointer w-max lg:text-base lg:font-medium lg:px-5 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm text-textPrimary border-2 border-accent rounded-md hover:bg-accent transition-all tracking-wide flex items-center text-center";

export default function Button({
  children,
  onClick,
  disabled,
  href,
  target,
  type = "button",
}) {
  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel="noreferrer"
        className={buttonClassName}
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
      className={buttonClassName}
    >
      {children}
    </button>
  );
}
