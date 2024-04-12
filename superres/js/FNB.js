function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

function actualizarContador() {
    // Fecha de destino (22 de agosto de 2024)
    var fechaDestino = new Date("2024-08-22T07:45:00");

    // Fecha actual
    var fechaActual = new Date();

    // Calcula la diferencia entre las fechas
    var diferencia = fechaDestino - fechaActual;
    
    if (diferencia <= 0) {
      document.getElementById("contador").innerHTML = "IT'S TIME TO MEET, WELCOME EVERYONE !!!!!";
    }
    else{
        // Calcula meses, días, horas, minutos y segundos restantes
        var meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30));
        var dias = Math.floor((diferencia % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Actualiza el contenido del elemento contador
        document.getElementById("contador").innerHTML = "Time remaining for the congress: <br>" + formatNumber(meses) + "&nbsp;&nbsp;Months&nbsp;&nbsp;&nbsp;&nbsp;" + formatNumber(dias) + "&nbsp;&nbsp;Days&nbsp;&nbsp;&nbsp;&nbsp;" + formatNumber(horas) + "&nbsp;&nbsp;Hours&nbsp;&nbsp;&nbsp;&nbsp;" + formatNumber(minutos) + "&nbsp;&nbsp;Minutes&nbsp;&nbsp;&nbsp;&nbsp;" + formatNumber(segundos) + "&nbsp;&nbsp;Seconds";
    }
}


// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);

// Llama a la función para que se ejecute inmediatamente
actualizarContador();