function imc() {
    nome = document.getElementById('nome').value
    altura = document.getElementById('altura').value
    peso = document.getElementById('peso').value
    resultado = document.getElementById('resultado')

    valorIMC = (peso / (altura * altura)).toFixed(1)

    if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.'
    } else if (valorIMC < 25) {
        classificacao = 'com peso ideal. Parabéns!!!'
    } else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso.'
    } else if (valorIMC < 35) {
        classificacao = 'com obesidade grau I.'
    } else if (valorIMC < 40) {
        classificacao = 'com obesidade grau II'
    } else {
        classificacao = 'com obesidade grau III. Cuidado!!'
    }

    resultado.textContent = nome + ", seu IMC é " + valorIMC + " e você está " + classificacao

}
