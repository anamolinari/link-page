function applyThemeColor(color) {
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute("content", color)
}

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-ana-light.png")
    img.setAttribute(
      "alt",
      "Foto de Ana Molinari em preto e branco, de frente, sorrindo, cabelo preso e camisa branca"
    )
    applyThemeColor("#FAF6F6")
    localStorage.setItem("theme", "light")
  } else {
    img.setAttribute("src", "./assets/avatar-ana.png")
    img.setAttribute(
      "alt",
      "Foto de Ana Molinari em preto e branco, rosto inclinado, sorrindo, cabelo preso e camisa branca"
    )
    applyThemeColor("#3D3836")
    localStorage.setItem("theme", "dark")
  }
}

// Rodar logo no carregamento da página
window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme")
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  const theme = saved || (prefersDark ? "dark" : "light")

  if (theme === "light") {
    document.documentElement.classList.add("light")
    document
      .querySelector("#profile img")
      .setAttribute("src", "./assets/avatar-ana-light.png")
    applyThemeColor("#FAF6F6")
  } else {
    document.documentElement.classList.remove("light")
    document
      .querySelector("#profile img")
      .setAttribute("src", "./assets/avatar-ana.png")
    applyThemeColor("#3D3836")
  }
})
