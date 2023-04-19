//DECLARANDO VARIABLES DE INPUTS
let costoInicial
let cantidadKilometros
//CASE SWITCH PARA EL COMBO DESPLEGABLE
let opciones
let opcionSeleccionada
let kilometrosMostrar

//FUNCION BOTON CALCULAR TODO
document.querySelector("#btnCalcular").addEventListener("click", Calcular)
function Calcular(){
    //DECLARANDO VARIABLES DE INPUTS
    costoInicial = document.querySelector("#txtCostoInicial").value
    cantidadKilometros = document.querySelector("#txtCantidadKilometros").value
    //CASE SWITCH PARA EL COMBO DESPLEGABLE
    opciones = document.querySelector("#opciones");
    opcionSeleccionada = opciones.value
    switch (opcionSeleccionada) {
        case "normal": {
            if (cantidadKilometros >= 10000 && cantidadKilometros <= 15000){
                kilometrosMostrar = "Chequeo de 10.000km a 15.000km Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else if (cantidadKilometros >= 20000 && cantidadKilometros <= 25000){
                kilometrosMostrar = "Chequeo de 20000km a 25000 Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else if (cantidadKilometros >= 30000 && cantidadKilometros <= 35000){
                kilometrosMostrar = "Chequeo de 30000km a 35000 Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else {
                kilometrosMostrar = "No se recomienda hacer un chequeo ahora mismo"
                document.querySelector("#pResultado").innerHTML = kilometrosMostrar
            }
        }
        break;
        case "compacto": {
            costoInicial = (costoInicial * 1.05).toFixed(2)
            if (cantidadKilometros >= 10000 && cantidadKilometros <= 15000){
                kilometrosMostrar = "Chequeo de 10.000km a 15.000km Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else if (cantidadKilometros >= 20000 && cantidadKilometros <= 25000){
                kilometrosMostrar = "Chequeo de 20000km a 25000 Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else if (cantidadKilometros >= 30000 && cantidadKilometros <= 35000){
                kilometrosMostrar = "Chequeo de 30000km a 35000 Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else {
                kilometrosMostrar = "No se recomienda hacer un chequeo ahora mismo"
                document.querySelector("#pResultado").innerHTML = kilometrosMostrar
            }
        }
        break;
        case "camioneta": {
            costoInicial = (costoInicial * 1.1).toFixed(2)
            if (cantidadKilometros >= 10000 && cantidadKilometros <= 15000){
                kilometrosMostrar = "Chequeo de 10.000km a 15.000km Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else if (cantidadKilometros >= 20000 && cantidadKilometros <= 25000){
                kilometrosMostrar = "Chequeo de 20000km a 25000 Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else if (cantidadKilometros >= 30000 && cantidadKilometros <= 35000){
                kilometrosMostrar = "Chequeo de 30000km a 35000 Recomendado"
                document.querySelector("#pResultado").innerHTML = "El servicio costara lo previsto "+ costoInicial + "<br> El servicio SI se hizo dentro de los kilometros previstos <br>" + kilometrosMostrar
            } else {
                kilometrosMostrar = "No se recomienda hacer un chequeo ahora mismo"
                document.querySelector("#pResultado").innerHTML = kilometrosMostrar
            }
        }
        break;
    }

}
