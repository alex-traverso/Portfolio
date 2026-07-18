import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const ToggleTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="flex justify-center">
        {currentTheme === "dark" ? (
          <button
            className="bg-surface hover:bg-surfaceAlt w-auto rounded-md border-accent border-2 p-1 transition-all"
            onClick={() => setTheme("light")}
          >
            <Image
              src="https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/theme-icons/sun.svg"
              alt="logo"
              height={30}
              width={30}
            />
          </button>
        ) : (
          <button
            className="bg-surface w-auto rounded-md border-accent border-2 p-1 hover:bg-surfaceAlt transition-all"
            onClick={() => setTheme("dark")}
          >
            <Image
              src="https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/theme-icons/moon.svg"
              alt="logo"
              height={30}
              width={30}
            />
          </button>
        )}
      </div>
    </>
  );
};

export default ToggleTheme;
