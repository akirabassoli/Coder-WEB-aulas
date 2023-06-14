

// let div = document.getElementById("app")
// console.log(div)

// let entrada = document.getElementById("entrada")
// console.log(entrada.value)

// let paises = document.getElementsByClassName("paises")
// console.log(paises)
// console.log(paises[0])

// let container = document.querySelector("#container")
// console.log(container)

// let radioChecked = document.querySelector("input[name=genero]")
// console.log(radioChecked.value)

// let titulo = document.getElementById("titulo")
// console.log(titulo.innerText)

// titulo.innerText = "Olá, enfermeira!!!"
// console.log(titulo.innerText)

// let botao1 = document.getElementById("botao1")
// botao1.addEventListener("click", acaoClique)

// function acaoClique() {
//     console.log("Clicou no botao 1")
// }

// let botao2 = document.getElementById("botao2")
// botao2.onclick = () => {
//     console.log("Clicou no botao 2")
// }



// function acaoCliqueBotao3() {
//     console.log("Clicou no botao 3")
// }

// function acaoCliqueBotao4() {
//     alert("Cadê o café?")
// }

let tarefas = [];

function inserirTarefas() {
    let input = document.getElementById("inputTarefa")

    tarefas.push(input.value)
}
function visualizar() {
    console.log(tarefas)
}
function limpar() {
    tarefas = [];
}