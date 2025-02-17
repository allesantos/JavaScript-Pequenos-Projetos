function resultado_media() {
    media = parseFloat(document.querySelector('.entrada').value)
    if (media < 5) {
        document.querySelector('.res').innerHTML = 'Que pena, o aluno foi reprovado!'
    } else if (media < 7) {
        document.querySelector('.res').innerHTML = 'Quase lá, o aluno ficou de recuperação!'
    } else {
        document.querySelector('.res').innerHTML = 'Parabéns, o aluno foi aprovado!'
    }
}