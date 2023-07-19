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

const btnMudarPessoa = (evento) => {
    const clicked = evento.currentTarget.getAttribute('data-botao')
    console.log(evento.currentTarget);
}

botao.forEach((botao) => botao.addEventListener('focus', btnMudarPessoa))

btn.forEach(function (btnarrow) {
    btnarrow.addEventListener('click', event => {
        mudarPessoa(event)
        const aparecerPessoa = document.querySelector('.teste').innerHTML = `
            <img src="${pessoas[contador].foto}" alt="">
            <div>
                <h2 class="description-img">${pessoas[contador].texto}</h2>
                <h3 class="name-img">${pessoas[contador].nome}</h3>
                <div>
                        <div class="informations">
                            <img class="rating" src="/assetts/Frame 31.svg" alt="">
                            <div>
                                <button class="btn" data-btn="1"></button>
                                <button class="btn" data-btn="2"></button>
                                <button class="btn" data-btn="3"></button>
                                <button class="btn" data-btn="4"></button>
                            </div>
                        </div>
                    </div>
            </div>`
    })
})

function mudarPessoa(event) {
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