function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // O CÓDIGO ACIMA É O MESMO CÓDIGO ABAIXO, PORÉM SIMPLIFICADO.
  // if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  // }

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Subsituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Ana Molinari em preto e branco, de frente, sorrindo, cabelo preso e camisa branca"
    )
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Ana Molinari em preto e branco, rosto inclinado, sorrindo, cabelo preso e camisa branca"
    )
  }
}
