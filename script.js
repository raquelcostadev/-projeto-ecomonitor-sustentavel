const inputs = document.querySelectorAll(".valores")
const paragrafos = document.querySelectorAll(".paragrafo")
const botoes = document.querySelectorAll(".btn-enviar")
const formularios = document.querySelectorAll(".form-temp")

formularios.forEach((formulario) => {

    formulario.addEventListener("submit", (e) => {

        e.preventDefault()

        const input = formulario.querySelector(".valores")
        const paragrafo = formulario.querySelector(".paragrafo")

        const temperatura = parseFloat(input.value)

        if (input.value === "") {

            paragrafo.textContent = "Informe um valor!"
            paragrafo.style.color = "blue"

        } else if (temperatura >= 90) {

            paragrafo.textContent =
            "⚠️ ATENÇÃO! Temperatura elevada."

            paragrafo.style.color = "red"

        } else {

            paragrafo.textContent =
            "✅ Temperatura normal."

            paragrafo.style.color = "green"
        }

    })

})
        