const inputs = document.querySelectorAll(".valores")
const paragrafos = document.querySelectorAll(".paragrafo")
const botoes = document.querySelectorAll(".btn-enviar")

botoes.forEach((botao, index) => {

    botao.addEventListener("click", (e) => {

        e.preventDefault()

        const input = inputs[index]
        const paragrafo = paragrafos[index]

        const temperatura = Number(input.value)

        if (input.value === "") {

            paragrafo.textContent = "Informe um valor!"
            paragrafo.style.color = "blue"
            return
        }

        if (temperatura >= 90) {

            paragrafo.textContent =
            "⚠️ ATENÇÃO ⚠️ TEMPERATURA ELEVADA."

            paragrafo.style.color = "red"
           
        } else {

            paragrafo.textContent =
            "Temperatura normal ✅"

            paragrafo.style.color = "green"
            
        }

    })

})