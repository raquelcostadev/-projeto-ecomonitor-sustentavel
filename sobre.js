const imgequipe = document.querySelectorAll(".imgequipe")
const botaofoto = document.querySelectorAll(".mostrarfoto")

botaofoto.forEach((botao, index) => {

  botao.addEventListener("click", () => {

    if (imgequipe[index].style.display === "none") {
      imgequipe[index].style.display = "block"
    } else {
      imgequipe[index].style.display = "none"
    }

  })

})