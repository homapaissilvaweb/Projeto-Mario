

const formulario = document.querySelector(".Formulario-fale-conosco")
const mascara = document.querySelector(".mascara-2")

function cliqueiNoBotao() {
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}

function CliqueiNaMascara() {
    formulario.style.left = "-300px"
    formulario.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
