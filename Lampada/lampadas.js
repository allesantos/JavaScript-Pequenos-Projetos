quebrada = false
function mudaLampada(tipo) {
    if (tipo == 1) {
        lampada = "lampadas/acesa.jpg"
    }

    if (tipo == 2) {
        lampada = "lampadas/apagada.jpg"
    }

    if (tipo == 3) {
        lampada = "lampadas/quebrada.jpg"
    }

    if (!quebrada) {
        document.getElementById("luz").src = lampada
        if (tipo == 3) {
            quebrada = true
        }
    }
}