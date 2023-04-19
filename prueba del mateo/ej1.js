let nombre
let nombreVentaMaxima = ""
let montoTotal
let montoTotalEntero = 0
let opciones1
let cantidadDeVentas = 0
let montoTotalMotocicletas = 0
let promedioDeVentas
let ventaMaxima = 0
let cantidadDeVentasAutomoviles = 0


document.querySelector("#btnCalcular").addEventListener("click", calcular)

function calcular() {
    nombre = document.querySelector("#txtNombre").value
    montoTotal = Number(document.querySelector("#txtMontoTotal").value)
    opciones1 = document.querySelector("#opciones").value
    cantidadDeVentas++
    montoTotalEntero += montoTotal
    if (opciones1 === "motocicleta") {
        montoTotalMotocicletas += montoTotal
        
    }
    if (opciones1 === "automovil") {
        cantidadDeVentasAutomoviles++
        
    }

    promedioDeVentas = (montoTotalEntero / cantidadDeVentas).toFixed(2)
    
    if (montoTotal > ventaMaxima) {
        ventaMaxima = montoTotal
        nombreVentaMaxima = nombre
        vehiculoMaxima = opciones1
        
    }
    document.querySelector("#pResultado").innerHTML = `Estadisticas<br>
        Cantidad de ventas de Automoviles: ${cantidadDeVentasAutomoviles}<br>
        Monto total de Motocicletas: ${montoTotalMotocicletas}<br>
        Promedio Total de todas las ventas: ${promedioDeVentas}<br>
        Detalle de la compra con mayor monto <br>
        Nombre del cliente: ${nombreVentaMaxima}<br>
        Monto total: ${ventaMaxima}<br>
        Tipo de vehículo: ${vehiculoMaxima}`
}