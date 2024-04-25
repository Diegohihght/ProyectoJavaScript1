// Arreglos para inicializar valores de Ingresos y Egresos
const ingresos = [
    new Ingresos("Sueldo", 10000.00)
];

const egresos = [
    new Egresos("Vacaciones", 3500.00)
];

// Función cargarCabecero
let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingreso").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egreso").innerHTML = formatoMoneda(totalEgresos());
}

// Función totalIngresos
let totalIngresos = () => {
    let totalIngresos = 0;
    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }
    return totalIngresos;
}

let totalEgresos = () => {
    let totalEgresos = 0;
    for (let egreso of egresos) {
        totalEgresos += egreso.valor;
    }
    return totalEgresos;
}

// Formato moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-MX", { style: "currency", currency: "MXN", minimumFractionDigits: 2 });
}

// Formato porcentaje
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString("es-MX", { style: "percent", minimumFractionDigits: 2 });
}

// Funciones para los Ingresos
const cargarIngresos = () => {
    let ingresosHtml = "";
    for (ingreso of ingresos) {
        ingresosHtml += crearIngresos(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHtml;
}

const crearIngresos = (ingreso) => {
    let ingresoTemplate = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button type="button" class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
    return ingresoTemplate;
}

const eliminarIngreso = (id) => {
    let ingresoEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(ingresoEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

// Función para los Egresos
const cargarEgresos = () => {
    let egresosHtml = "";
    for (egreso of egresos) {
        egresosHtml += crearEgresos(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHtml;
}

const crearEgresos = (egreso) => {
    let egresoTemplate = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button type="button" class="elemento_eliminar--btn" onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`;
    return egresoTemplate;
}

const eliminarEgreso = (id) => {
    let egresoEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(egresoEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

// Función para agregar un egreso
const agregarEgreso = () => {
    let forma = document.forms["forma"];
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor = forma["valor"];
    if (descripcion.value !== "" && valor.value !== "") {
        egresos.push(new Egresos(descripcion.value, parseFloat(valor.value)));
        cargarCabecero();
        cargarEgresos();
    } else {
        alert("Favor de llenar todos los campos");
    }
}

// Evento click para el botón de agregar
document.querySelector('.agregar_btn').addEventListener('click', agregarEgreso);

// Función para cargar la app
let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}
