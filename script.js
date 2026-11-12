function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
function applyTheme(theme) {
  if (theme === "auto") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    document.documentElement.dataset.theme =
      prefersDark ? "dark" : "light";
  } else {
    document.documentElement.dataset.theme = theme;
  }

  localStorage.setItem("lifetrack_theme", theme);
}

const savedTheme =
  localStorage.getItem("lifetrack_theme") || "auto";

applyTheme(savedTheme);

document.addEventListener("change", function (event) {
  if (event.target.matches('[data-c="theme"]')) {
    applyTheme(event.target.value);
  }
});
