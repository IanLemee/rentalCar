const botao = document.querySelectorAll('.btn')

botao.forEach(function(btn) {
    btn.addEventListener('click', function() {
        btn.style.backgroundColor = '#3083FF'
    })
})
