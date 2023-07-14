const botao = document.querySelectorAll('.btn')
const btn = document.querySelector('.btn-arrow')

const pessoas = [
    {
        "nome": "Gabriel Sampaio",
        "Avaliacao": "4.8",
        "texto": "eu to traindo todo dia",
        "foto": "url(/assetts/gDoCaveirao.jpeg)"
    },

    {
        "nome": "Eros Alexandre",
        "Avaliacao": "4.6",
        "texto": "eu to metendo todo dia",
        "foto": "url(/assetts/erzPagaPensaoMilionaria.jpeg)"
    },

    {
        "nome": "Joao Pedro",
        "Avaliacao": "4.6",
        "texto": "Faz tempo que eu nao meto",
        "foto": "url(/assetts/joePutinho.jpeg)"
    }
]

let joe = JSON.stringify(pessoas)

btn.addEventListener('click', () => {
    
    
    return btn
})

// botao.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
      
//         console.log(e.target);
           
//             document.querySelector('.img-text').innerHTML = `
//         <img src="/assetts/Rectangle 26.svg" alt="">
//         <div>
//             <h2 class="description-img">There are many variations of passages a but Nullam vulputate urna,
//                 adipiscing vulputate mauris nisl sagittis et. Quisque id semper est nullam enim leo in nec
//                 laoreet.</h2>
//             <h3 class="name-img">Charlie Johnson</h3>
//             <img class="rating" src="/assetts/Frame 31.svg" alt="">`
       

//         btn.style.backgroundColor = '#3083FF'
//     })
// })
