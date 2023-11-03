function mostrarformOradores() {
    document.getElementById('formularioOradores').style.display = 'block';
    document.getElementById('gracias').style.display ='none';
}

function ocultarformOradores(){
    document.getElementById('formularioOradores').style.display = 'none';
    document.getElementById('gracias').style.display ='block';
}

function mostrarformTickets(){
    document.getElementById('ventaTickets').style.display= 'block'
}

function ocultarformTickets(){
    document.getElementById('ventaTickets').style.display= 'none'
    document.getElementById('enviado').style.display ='block';
}
function verificarCantidad(cantidades){
    if (cantidades == 0){
        alert("ingrese cantidad");
        document.getElementById('categorias').value = 0;
         }
    return cantidades;
}
function borrarformTickets(){
   let resetForm = document.getElementById("formularioInput");
   resetForm.reset(); 
}

function categoriaSelecta(){
    let categ = document.getElementById("categorias").value;
    let cant = verificarCantidad(document.getElementById("cantidad").value);
    let importePagar;
    if (cant > 0){
        switch (categ){
            case '1':
                cant = (cant*200)
                importePagar = cant-(cant*0.8);
                document.getElementById("importe").value = importePagar;
                break;
            case '2':
                cant = (cant*200)
                importePagar = cant-(cant*0.5);
                document.getElementById("importe").value = importePagar;
                break;
            case '3':
                cant = (cant*200)
                importePagar = cant-(cant*0.15);
                document.getElementById("importe").value = importePagar;
                break;
        }
    }
   
}