function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
 
    // pegar a tag img
    const img = document.querySelector("#profile img, width: 112px")
 
    // substituira imagem
    if(html.classList.contains('light')) {
     // se tiver light mode, adicionar a imagem light
     img.setAttribute('src', "./assets/avatar-pixel-light")
    
    } else {
    // se estiver SEM ligth moe, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    }
 }