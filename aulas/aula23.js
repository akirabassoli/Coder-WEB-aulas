let fundo = document.querySelector('div.theme')

let botao = document.querySelector('button#changeBtn')

botao.addEventListener("click", function () {
    if (fundo.classList.contains('dark')) { fundo.classList.remove('dark') }
    else { fundo.classList.add('dark') }
    if (botao.classList.contains('changeBtn')) { botao.classList.remove('changeBtn') }
    else { botao.classList.add('changeBtn') }
})



