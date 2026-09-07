export function ThemeScript() {
  const script = `
(function () {
  try {
    var key = "agency-theme";
    var theme = localStorage.getItem(key);
    if (theme !== "light" && theme !== "dark") {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
  } catch (e) {}
})();
`;

  return <script dangerouslySetInnerHTML={{__html: script}} />;
}
