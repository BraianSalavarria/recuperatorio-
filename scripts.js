
let fechaActual= new Date();
let campoFecha = document.getElementById('fechaPedido');
   campoFecha.value = fechaActual.toDateString();

class Plato{
      contructor( plato, ingrediente){}

}

let plato=[];

function seleccionarPlato(){
   document.getElementById('btnAgregarPlato').disabled=true;
   let selectPlato = document.getElementById('plato');
   let platoSeleccinado = selectPlato.value;
  selectPlato.disabled=true;

  document.getElementById('btnAgregarIngredientes').disabled=false;
 let selectAdicionales = document.getElementById('ingredientes');
    selectAdicionales.disabled = false;
  
  
   plato.push(platoSeleccinado);
   
}

function agregarIngredientes(){
    let selectAdicionales = document.getElementById('ingredientes');
    let ingredienteSeleccionado =selectAdicionales.value;
    plato.push(ingredienteSeleccionado);
    selectAdicionales.remove(ingredienteSeleccionado);
    agregarATabla();

}

function agregarATabla(){
    let tabla= document.getElementById('tablaPedidos');
    let fila = document.createElement('tr');

    let item = document.createElement('td');
    item.textContent =plato[0];

    let incluidos = document.createElement('td');
    incluidos.textContent =plato[1];

    let precio = document.createElement('td');
    precio.textContent="1000$";
    
    let btn = document.createElement('button');
    btn.textContent='eliminar';
    btn.id="eliminar";
    
    btn.addEventListener('click',function(){
        eliminar();
    })

    let acciones = document.createElement('td');
    acciones.innerHTML=btn;
    



    fila.appendChild(item);
    fila.appendChild(incluidos);
    fila.appendChild(precio);
    fila.appendChild(btn);

    tabla.appendChild(fila);

}


function eliminar(){
    window.confirm("desea elimar el registro?");
}