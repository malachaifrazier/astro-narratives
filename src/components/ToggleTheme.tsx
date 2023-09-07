import { useState, useEffect } from "preact/hooks";
import PhMoonStarsFill from "~icons/ph/moon-stars-fill";
import PhSunFill from "~icons/ph/sun-fill";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // export default function DarkModeToggle() {
  //   const [theme, setTheme] = useState(localStorage.theme);
  //   const colorTheme = theme === 'dark' ? 'light' : 'dark';
  //   useEffect(() => {
  //     const root = window.document.documentElement;

  //     root.classList.remove(colorTheme);
  //     root.classList.add(theme);
  //     localStorage.setItem('theme', theme);
  //   }, [theme, colorTheme]);

  //   return [colorTheme, setTheme];
  // }

  return (
    <button
      class="w-10 h-10 flex items-center justify-center rounded-md hover:bg-slate-300 dark:hover:bg-slate-800"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <PhMoonStarsFill style={{ fontSize: "1.5em" }} />
      ) : (
        <PhSunFill style={{ fontSize: "1.5em" }} />
      )}
      <span class="sr-only">Toggle Theme</span>
    </button>
  );
}
