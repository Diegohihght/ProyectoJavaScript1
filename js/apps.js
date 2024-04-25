//let contenedor= document.getElementsByClassName('contenedoingreso');
// let signo= document.getElementById('tipo');
var ingresosum = 3700;
var acumingreso=3
var acumegreso=3
 //let egresocontenedor = document.getElementsByClassName('egreso');
 let ingresos= document.getElementById('ingresossum');
var valorEgreso= 1900
var valorIngreso= 4000
var presupuestod = valorIngreso - valorEgreso 
// const egresodoc = document.getElementById('egresop');
//  console.log(egresodoc);

// console.log(presupuestod);
// document.getElementsByClassName('presupuesto_valor').innerHTML= presupuestod;

let AgregarP = () =>{
    // console.log(signo);
    // console.log(contenedor);
    let descripcion = document.getElementById('descripcion').value;
    let valord = parseInt(document.getElementById('valord').value);
    let signo= document.getElementById('tipo').value;
    let ingresos= document.getElementById('ingresossum');
    let porcentaje = 9
    // console.log(descripcion);
    // console.log(valord);
    // console.log(ingresos);
    // console.log(ingresosum);

    // ingresosum+= valord;
    // console.log(ingresosum);
    // signo="+";

    if(signo=="+"){
               
        let nuevoelemento = document.createElement('div');
        // nuevoelemento.innerHTML= '<div class="elemento limpiarEstilos"><div class="elemento_descripcion">' + 'Salario' + '</div><div class="derecha limpiarEstilos"><div class="elemento_valor">' + '+2,200.00' + '</div><div class="elemento_eliminar"><button class="elemento_eliminar--btn"><i class="ion-icon" name="close-circle-outline"></i></button></div></div></div></div>';
        nuevoelemento.innerHTML= `
        
        <div class="elemento_descripcion">${descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+${valord.toFixed(2).toLocaleString('us-US')}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn" onclick="eliminarelemento('#ingreso${acumingreso}','contenedoingreso')">
                    <i class="ion-icon" name="close-circle-outline"></i><img src="trash green.png" class="iconimg" >
                </button>
            </div>
        </div>`;
        
        // console.log(ingresocontenedor);
        // console.log(nuevoelemento);

        nuevoelemento.setAttribute('class','elemento limpiarEstilos');
        nuevoelemento.setAttribute('id',`ingreso${acumingreso}`);
        var ingresocontenedor = document.getElementById('contenedoingreso');
        ingresocontenedor.insertAdjacentElement('beforeend',nuevoelemento);
        acumingreso++;

        RefreshValue(valord,signo);
    }


    if(signo=="-"){

        console.log(valord);
        console.log(presupuestod);

        if (valord<= presupuestod){

            console.log(valord);
            console.log(presupuestod);

            let nuevoelemento = document.createElement('div');
            // nuevoelemento.innerHTML= '<div class="elemento limpiarEstilos"><div class="elemento_descripcion">' + 'Salario' + '</div><div class="derecha limpiarEstilos"><div class="elemento_valor">' + '+2,200.00' + '</div><div class="elemento_eliminar"><button class="elemento_eliminar--btn"><i class="ion-icon" name="close-circle-outline"></i></button></div></div></div></div>';
            nuevoelemento.innerHTML= `
            
            <div class="elemento_descripcion">${descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor elemento_valor_egreso">-${valord.toFixed(2).toLocaleString('us-US')}</div>
                <div class="elemento_porcentaje">${porcentaje}%</div> 
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarelemento('#egreso${acumegreso}', 'contenedoregresos')">
                        <i class="ion-icon" name="close-circle-outline"></i><img src="trash red.png" class="iconimg" >
                    </button>
                </div>
            </div>`;
            
            // console.log(ingresocontenedor);
            // console.log(nuevoelemento);

            // console.log(valord.toFixed(2).toLocaleString('us-US', {
            //     style: "currency",
            //     currency: "USD",
            //     useGrouping: true,
            //     maximumSignificantDigits: 3,
            // }));
    
            nuevoelemento.setAttribute('class','elemento limpiarEstilos');
            nuevoelemento.setAttribute('id',`egreso${acumegreso}`);
            var ingresocontenedor = document.getElementById('contenedoregresos');
            ingresocontenedor.insertAdjacentElement('beforeend',nuevoelemento);
            acumegreso++;
            RefreshValue(valord,signo);


        }
        else{

            alert(`valor de egreso ${valord} es mayor que tu presupuesto de ${presupuestod}`);

        }

       
    }
    


};


let RefreshValue = (valornuevo,signonuevo) =>{
   

    if(signonuevo=="-"){
       
        valorEgreso+= valornuevo
        document.getElementById('presupuesto_egreso_valor').innerHTML= "- " + valorEgreso.toLocaleString('us-US');
       
    }
      
    if(signonuevo=="+"){

        valorIngreso+=valornuevo
        document.getElementById('presupuesto_ingreso_valor').innerHTML= "+ " + valorIngreso.toLocaleString('us-US');
            
    }

    let porcentajecalc= (valorEgreso / valorIngreso)*100
    document.getElementById('presupuesto_egreso_porcentaje').innerHTML= porcentajecalc.toFixed(2) + "%";

//    console.log(valorEgreso);
    // console.log(valorIngreso);
    // console.log(porcentajecalc);

  let elementsp =  document.getElementsByClassName('elemento_porcentaje');
  let elementsv =  document.getElementsByClassName('elemento_valor_egreso');
 
  presupuestod = valorIngreso - valorEgreso
//    console.log(presupuestod.toLocaleString('us-US', { style: 'currency', currency: 'USD'}));
//    console.log(presupuestod.toLocaleString('us-US'));
   document.getElementById('presupuesto_valor_id').innerHTML= presupuestod.toLocaleString('us-US');
//   console.log(document.getElementById('presupuesto_valor_id'));

//   console.log(elementsp);
//   console.log(elementsv);
    let porcentajenevo
    let valorcalculo

    for(let i=0;i<elementsp.length;i++){
       // let egresos = document.getElementsByClassName('egreso');
       // document.getElementsByClassName('elemento_porcentaje')[i].innerHTML= 12 + "%";
        // console.log(egresos);
        // console.log(elementsp[i].textContent);

        // console.log(elementsp[i].textContent);
        // console.log(Math.abs(parseInt(elementsv[i].textContent)) );
        
        valorcalculo= Math.abs(parseInt(elementsv[i].textContent.replace(/[^0-9.-]+/g,"")))
        porcentajenevo = ( valorcalculo / valorIngreso) *100
        // console.log(parseInt(elementsv[i].textContent.replace(/[^0-9.-]+/g,"")));
        elementsp[i].innerHTML= porcentajenevo.toFixed(2) + "%";

       

    }

};

let eliminarelemento = (elem, contenedorid) =>{

// console.log(contenedorid);
// console.log(elem);

// let contenedore =document.getElementById('contenedoregresos');
// console.log(contenedore);
// let eliminarelem = contenedore.querySelector('#egreso1');

let contenedore =document.getElementById(contenedorid);
// console.log(contenedore);
let eliminarelem = contenedore.querySelector(elem);
let elemetoval = eliminarelem.getElementsByClassName('elemento_valor');

// console.log(contenedore);
// console.log(eliminarelem);
// console.log(elemetoval[0].textContent);
// console.log(parseInt(elemetoval[0].textContent));

// console.log(contenedorid);

if(contenedorid=="contenedoingreso"){
    // console.log(valorIngreso);
    valorIngreso= valorIngreso - parseInt(elemetoval[0].textContent);
    // console.log(valorIngreso);
    document.getElementById('presupuesto_ingreso_valor').innerHTML= "+ " + valorIngreso.toLocaleString('us-US');
}

if(contenedorid=="contenedoregresos"){
    // console.log(valorEgreso);
    valorEgreso= valorEgreso - Math.abs(parseInt(elemetoval[0].textContent));
    // console.log(valorEgreso);
    document.getElementById('presupuesto_egreso_valor').innerHTML= "- " + valorEgreso.toLocaleString('us-US');
}

// console.log(valorEgreso);
// console.log(valorIngreso);
let porcentajecalc= (valorEgreso / valorIngreso)*100
document.getElementById('presupuesto_egreso_porcentaje').innerHTML= porcentajecalc.toFixed(2) + "%";

let elementsp =  document.getElementsByClassName('elemento_porcentaje');
let elementsv =  document.getElementsByClassName('elemento_valor_egreso');

presupuestod = valorIngreso - valorEgreso
document.getElementById('presupuesto_valor_id').innerHTML= presupuestod.toLocaleString('us-US');

let porcentajenevo
let valorcalculo

for(let i=0;i<elementsp.length;i++){
 
    valorcalculo= Math.abs(parseInt(elementsv[i].textContent.replace(/[^0-9.-]+/g,"")))
    porcentajenevo = ( valorcalculo / valorIngreso) *100

    elementsp[i].innerHTML= porcentajenevo.toFixed(2) + "%";

}

contenedore.removeChild(eliminarelem);

}