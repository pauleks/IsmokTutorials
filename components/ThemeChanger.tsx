import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>🌕 Įšjunk šviesas!</button>
      ) : (
        <button onClick={() => setTheme("light")}>🌞 Įjunk šviesas!</button>
      )}
    </div>
  );
};

export default ThemeChanger;
