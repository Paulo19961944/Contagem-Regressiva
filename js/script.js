/** Coleta os eventos do DOM */
let horas = document.getElementById("hours");
let minutos = document.getElementById("minutes");
let segundos = document.getElementById("seconds");

/** Coleta dados dos Botões */
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resumeBtn = document.getElementById("resumeBtn");
let resetBtn = document.getElementById("resetBtn");

/** Adiciona os eventos */
horas.addEventListener('blur', converterParaNumero);
minutos.addEventListener('blur', converterParaNumero);
segundos.addEventListener('blur', converterParaNumero);
startBtn.addEventListener('click', iniciaContador);

/** Transforma os dados em números */
let horasMod = horas;
let minutosMod = minutos;
let segundosMod = segundos;

function converterParaNumero(){
    /** Converte para Texto */
    let convertHoras = horas.innerText;
    let convertMinutos = minutos.innerText;
    let convertSegundos = segundos.innerText;

    /**Converte para Número */
    horasMod = parseInt(convertHoras);
    minutosMod = parseInt(convertMinutos);
    segundosMod = parseInt(convertSegundos);
    
    console.log("Horas: " + horasMod);
    console.log("Minutos: " + minutosMod);
    console.log("Segundos: " + segundosMod);
}

/** Lógica do Contador */
function contador(){    
    /** Contador */
    if(horasMod > 0 || minutosMod > 0 || segundosMod > 0){
        if(segundosMod === 0){
            segundosMod = 59;

            if(minutosMod > 0){
                minutosMod--;
            }
            else if(horasMod > 0){
                horasMod--;
            }
        }
        else{
            segundosMod--;
        }
    }
    else{
        console.log("Contagem concluída");
    }
}

/** Função que inicia a contagem */
function iniciaContador(){
    /** Contador */
    if(horasMod > 0 || minutosMod > 0 || segundosMod > 0){
        setInterval(contador, 1000);
    }
    else{
        console.log("Contagem concluída");
    }
}
