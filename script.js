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
    document
      .querySelector('meta[name-"theme-color"]')
      .setAttribute("content", "#FAF6F6")
  } else {
    img.setAttribute("src", "./assets/avatar-ana.png")
    img.setAttribute(
      "alt",
      "Foto de Ana Molinari em preto e branco, rosto inclinado, sorrindo, cabelo preso e camisa branca"
    )

    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", "#3D3836")
  }

  window.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement
    const meta = document.querySelector('meta[name="theme-color"]')

    if (html.classList.contains("light")) {
      meta.setAttribute("content", "#FAF6F6")
    } else {
      meta.setAttribute("content", "#3D3836")
    }
  })
}
