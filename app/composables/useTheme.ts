export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

export function useTheme() {
  const theme = useState<Theme>("theme", () => "dark");

  function applyTheme(value: Theme) {
    theme.value = value;
    if (import.meta.client) {
      document.documentElement.setAttribute("data-theme", value);
      localStorage.setItem(STORAGE_KEY, value);
    }
  }

  function initTheme() {
    if (!import.meta.client) return;

    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    applyTheme(stored ?? preferred);
  }

  function toggleTheme() {
    applyTheme(theme.value === "dark" ? "light" : "dark");
  }

  return { theme, applyTheme, initTheme, toggleTheme };
}
