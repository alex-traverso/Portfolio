import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? "systemTheme" : theme;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className='flex justify-center'>
        {currentTheme === "dark" ? (
          <button
            className='bg-black-700 hover:bg-black w-auto rounded-md border-lightBlue border-2 p-1 transition-all'
            onClick={() => setTheme("light")}
          >
            <Image
              src='/ThemeIcons/sun.svg'
              alt='logo'
              height={30}
              width={30}
            />
          </button>
        ) : (
          <button
            className='bg-gray-100 w-auto rounded-md border-lightBlue border-2 p-1 hover:bg-gray-300 transition-all'
            onClick={() => setTheme("dark")}
          >
            <Image
              src='/ThemeIcons/moon.svg'
              alt='logo'
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
