let qtdAdultos = document.querySelector("#adultos")
let qtdCriancas = document.querySelector("#criancas")
let qtdHoras = document.querySelector("#horas")

let calcular = document.querySelector("#calcular")

calcular.addEventListener('click', ()=> {
    let adultos = qtdAdultos.value
    let criancas = qtdCriancas.value
    let duracao = qtdHoras.value
    let resultado = document.querySelector("#resultado")

    let carne = adultos * carnePP(duracao) + (criancas * carnePP(duracao) / 2)
    let cerveja = adultos * cervejaPP(duracao)
    let suco = criancas * sucoPP(duracao) + (adultos * sucoPP(duracao) / 2)

    resultado.innerHTML = `<p>Necessario ${carne} g de carne</p>`
    resultado.innerHTML += `<p>Necessario ${cerveja} ml de cerveja</p>`
    resultado.innerHTML += `<p>Necessario ${suco} ml de suco</p>`

})

function carnePP(duracao){
    if(duracao >= 6){
        return 600
    }else{
        return 400
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 1400
    }else{
        return 1100
    }
}

function sucoPP(duracao){
    if(duracao >= 6){
        return 800
    }else{
        return 600
    }
}