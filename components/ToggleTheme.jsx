import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Sun from "./Icons/Sun";
import Moon from "./Icons/Moon";

const ToggleTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      className="flex items-center justify-center bg-surfaceAlt rounded-lg p-2 text-textSecondary hover:text-accent transition-colors"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      aria-label={
        currentTheme === "dark"
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
    >
      {currentTheme === "dark" ? (
        <Sun height={20} width={20} />
      ) : (
        <Moon height={20} width={20} />
      )}
    </button>
  );
};

export default ToggleTheme;
