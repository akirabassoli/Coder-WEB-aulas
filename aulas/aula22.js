// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(response => console.log(response))

// let cep = '01252050'
// // let cep = prompt("Digite o CEP:")
// let url = "https://viacep.com.br/ws/" + cep + "/json/"

// fetch(url)
//     .then(response => response.json())
//     .then(response => exibir(response))

// function exibir(dados) {
//     console.log(dados)
// }


let paisDigitado = prompt("Digite o país")

fetch('https://restcountries.com/v3.1/name/' + paisDigitado)
    .then(response => response.json())
    .then(response => exibirPais(response))

function exibirPais(pais) {
    console.log(pais)

    let nome = pais[0].name.common
    console.log(nome)

    let capital = pais[0].capital[0]
    console.log(capital)

    let titulo = document.createElement("h1")
    titulo.innerText = capital
    document.body.append(titulo)

    let bandeira = document.createElement("img")
    bandeira.src = pais[0].flags.png
    document.body.append(bandeira)
}