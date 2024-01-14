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
pauseBtn.addEventListener('click', pausaContador);
resumeBtn.addEventListener('click', continuaContador);
resetBtn.addEventListener('click', resetaContador);

/** Transforma os dados em números */
let horasMod = horas;
let minutosMod = minutos;
let segundosMod = segundos;
let intervalId = null; // Variável para guardar o ID do intervalo

function converterParaNumero(){
    /** Converte para Texto */
    let convertHoras = horas.innerText;
    let convertMinutos = minutos.innerText;
    let convertSegundos = segundos.innerText;

    /** Converte para Número */
    horasMod = parseInt(convertHoras);
    minutosMod = parseInt(convertMinutos);
    segundosMod = parseInt(convertSegundos);

    console.log("Horas: " + horasMod);
    console.log("Minutos: " + minutosMod);
    console.log("Segundos: " + segundosMod);
}

/** Atualiza o valor dos elementos no DOM */
function atualizarContagem() {
    horas.innerText = padZero(horasMod);
    minutos.innerText = padZero(minutosMod);
    segundos.innerText = padZero(segundosMod);
}

/** Lógica do Contador */
function contador(){
    if (segundosMod === 0) {
        segundosMod = 59;

        if (minutosMod > 0) {
            minutosMod--;
        } else if (horasMod > 0) {
            horasMod--;
        } else {
            /**  A contagem terminou, então paramos o intervalo */
            clearInterval(intervalId);
            console.log("Contagem concluída");

            /** Reproduz o Alarme */
            const alarmAudio = document.getElementById("alarmAudio");
            alarmAudio.play();

            /** Retorna */
            return;
        }
    } else {
        segundosMod--;
    }

    atualizarContagem();
}

/** Função que inicia a contagem */
function iniciaContador(){
    if(horasMod > 0 || minutosMod > 0 || segundosMod > 0){
        intervalId = setInterval(contador, 1000);
    } else{
        console.log("Contagem concluída");
    }
}

/** Função que pausa a contagem */
function pausaContador(){
    clearInterval(intervalId);
}

/** Função que continua a contagem após pausa */
function continuaContador(){
    intervalId = setInterval(contador, 1000);
}

/** Função que reseta a contagem */
function resetaContador(){
    clearInterval(intervalId);
    horasMod = 0;
    minutosMod = 0;
    segundosMod = 0;
    atualizarContagem();
}

/** Função auxiliar para padronizar a exibição dos números com dois dígitos */
function padZero(num) {
    return num.toString().padStart(2, '0');
}