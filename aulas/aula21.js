// let p = document.createElement("p")
// p.className = "paragrafo"
// p.id = "hello"

// let hello = document.createElement("h2")

// hello.innerText = "Hello, World!"

// p.append(hello)
// document.body.append(p)


// function eliminar() {
//     let paragrafo = document.getElementById("paragrafo")
//     paragrafo.remove()

//     let paises = document.getElementsByClassName("paises")
// }

// let nome = document.createElement("h1")
// nome.innerText = "Akira"

// document.body.append(nome)

// function eliminar() {
//     let sobrenome = document.getElementById("sobrenome")
//     sobrenome.remove()
// }


let tarefas = [];

function inserirTarefas() {
    let input = document.getElementById("inputTarefa")

    tarefas.push(input.value)
}
function visualizar() {
    let resultado = document.getElementById("resultado")
    resultado.innerText = ""
    for (let i = 0; i < tarefas.length; i++) {
        let elemento = document.createElement("li")
        elemento.innerText = tarefas[i]
        resultado.append(elemento)
    }



}
function limpar() {
    tarefas = [];
    let resultado = document.getElementById("resultado")
    resultado.innerText = ""
}

// CALCULADORA -------------------------------

let num1 = document.getElementById("input1")
let num2 = document.getElementById("input2")


function somar() {
    result = parseFloat(num1.value) + parseFloat(num2.value);

    calc_resultado.append(result)
}
