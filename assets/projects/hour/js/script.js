function atualizarTempo(){

    let display = document.querySelector(".display");
    let agora = new Date();
    
    const horario = corrigirHorario(agora.getHours()) + ":" + corrigirHorario(agora.getMinutes());
    
    display.textContent= horario;
}

function corrigirHorario (numero){
    if (numero < 10){
        numero = "0"+ numero;
    }
    return numero;
}

atualizarTempo()
setInterval(atualizarTempo,1000)