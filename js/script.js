const botao = document.querySelectorAll('.btn')
const btn = document.querySelectorAll('.btn-arrow')

var contador = 0;

const pessoas = [
    {
        nome: "Charlie Johnson",
        Avaliacao: "4.8",
        texto: "There are many variations of passages a but Nullam vulputate urna,adipiscing vulputate mauris nisl sagittis et. Quisque id semper est nullam enim leo in neclaoreet.",
        foto: "/assetts/Rectangle 26.svg"
    },

    {
        nome: "Gabriel Sampaio",
        Avaliacao: "4.8",
        texto: "O Melhor site para alugar carros disponivel hoje em dia, voltarei para alugar mais carros aqui sem via de Duvidas!",
        foto: "/assetts/Gabriel.svg"
    },

    {
        nome: "Eros Alexandre",
        Avaliacao: "4.6",
        texto: "O site de aluguel de carros é simplesmente incrível! A navegação é intuitiva e o processo de reserva é extremamente fácil e rápido!",
        foto: "/assetts/Eros.svg"
    },

    {
        nome: "Joao Pedro",
        Avaliacao: "4.6",
        texto: "Que maravilha de site de aluguel de carros! Fiquei impressionado com a transparência nas informações sobre preços e condições. A equipe de suporte também é muito prestativa!",
        foto: "/assetts/Joe.svg"
    }
]

botao.forEach(function (botao) {
    botao.addEventListener('click', event => {
        mudarPessoa(event, event.currentTarget.getAttribute('data-botao'))

    })
})

btn.forEach(function (btnarrow) {
    btnarrow.addEventListener('click', event => {
        mudarPessoa(event)
    })
})

function mudarPessoa(event, cont = -1) {
    document.querySelector('.btn-ativo').classList.remove('btn-ativo')

    if ((cont >= 0) && (cont <= 3)) {
        contador = cont
    }
    else {
        const clickPessoa = event.currentTarget.getAttribute('data-btn')
        if (clickPessoa === "prev") {
            contador--
        } else if (clickPessoa === "next") {
            contador++
        }

        if (contador == 4) {
            contador = 0
        } else if (contador == -1) {
            contador = 3
        }
    }

    var editado = document.querySelectorAll('.editavel')

    editado[0].setAttribute('src', `${pessoas[contador].foto}`)
    editado[1].textContent = `${pessoas[contador].texto}`
    editado[2].textContent = `${pessoas[contador].nome}`

    document.querySelectorAll('.btn')[contador].classList.add('btn-ativo')
}

function loop() {
    document.getElementById("btn-next").click();
}
  
window.setInterval(loop, 4000);
