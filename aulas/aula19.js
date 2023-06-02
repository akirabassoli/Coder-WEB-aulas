var hello = "Olá, Mundo!"

console.log(hello)


let nome = "Alex Akira Bassoli"
let num1 = 25
let num2 = 35

let soma
let mult

soma = num1 + num2
mult = num1 * num2

// alert(soma)
// console.log(nome, mult)

let sorvete = "Flocos"

// if (sorvete == "chocolate") {
//     alert("Sim, eu amo sorvete de chocolate")
// } else if (sorvete == "morango") {
//     alert("Morango é top!")
// }
// else {
//     alert("Ahhh, mas chocolate é enjoativo")
// }

function multiplica(num1, num2) {
    let result = num1 * num2;
    return result;
}

function subtracao(num1, num2) {
    if (num1 > num2) {
        let resultado = num1 - num2
        console.log(num1 + "+" + num2 + "=" + resultado)
    }
    else {
        console.log("Não foi possível subtrair!")
    }
}
subtracao(20, 12)
subtracao(10, 12)


function divisao(num1, num2) {
    if (num2 !== 0) {
        let resultado = num1 / num2
        console.log(num1 + "/" + num2 + "=" + resultado)
    }
    else {
        console.log("Não é possível dividir por ZERO!")
    }
}

divisao(20, 10)
divisao(50, 0)

// OBJETOS ====================================================
let pessoa = {
    nome: "João",
    endereco: "São Paulo",
    profissao: "Gerente"
}
console.log(pessoa)
console.log(pessoa.endereco)


// ARRAY DE OBJETOS ++++++++++++================

let maca = {
    nome: "Maçã",
    cor: "Vermelha",
    peso: 10,
    tipo: "Fruta"
}
let alface = {
    nome: "Alface",
    cor: "Verde",
    peso: 2,
    tipo: "Verdura"
}
let cenoura = {
    nome: "Cenoura",
    cor: "laranja",
    peso: 2,
    tipo: "Verdura"
}

let alimentos = [maca, alface, cenoura]
console.log(alimentos)
console.log(alimentos[1].cor)
// esse codigo acime pega o alimento na posição 1 que tem a propriedade cor


// ==============================================================================

alimentos.forEach(al => { console.log(al.nome) })
// al é um nome que a gente escolhe e pra cada elemento do array alimentos ele vai executar o código








