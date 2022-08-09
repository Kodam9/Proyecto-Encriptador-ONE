var textoIngresado = document.querySelector("input");

function encriptar(){
    event.preventDefault();
    textoEncriptado = "";
    if(textoIngresado.value != 0){
        for(var i=0; i<textoIngresado.value.length; i++){
            switch(textoIngresado.value.substring(i,i+1)){
                case "a":
                    textoEncriptado += "ai";
                    break;
                case "e":
                    textoEncriptado += "enter";
                    break;
                case "i":
                    textoEncriptado += "imes";
                    break;
                case "o":
                    textoEncriptado += "ober";
                    break;
                case "u":
                    textoEncriptado += "ufat";
                    break;
                default:
                    textoEncriptado += textoIngresado.value.substring(i, i + 1);
                    break;  
            }
        }
        mostrarTextoEncriptado(textoEncriptado);
    }else{
        alert("Ingrese un texto de al menos 1 caracter")
    }
}

function desencriptar(){
    event.preventDefault();
    textoDesencriptado = "";
    if(textoIngresado.value != 0){
        for(var i=0; i<textoIngresado.value.length; i++){
            if(textoIngresado.value.substring(i, i + 2) == "ai"){
                    textoDesencriptado += "a";
                    i = i + 1;
                } else if (textoIngresado.value.substring(i, i + 5) == "enter") {
                    textoDesencriptado += "e";
                    i = i + 4;
                } else if (textoIngresado.value.substring(i, i + 4) == "imes") {
                    textoDesencriptado += "i";
                    i = i + 3;
                } else if (textoIngresado.value.substring(i, i + 4) == "ober") {
                    textoDesencriptado += "o";
                    i = i + 3;
                } else if (textoIngresado.value.substring(i, i + 4) == "ufat") {
                    textoDesencriptado += "u";
                    i = i + 3;
                } else {
                    textoDesencriptado += textoIngresado.value.substring(i, i + 1);
                }
            }
            mostrarTextoDesencriptado(textoDesencriptado);
    }else{
        alert("Ingrese un texto de al menos 1 caracter");
    }
}

function copiarMensaje(){
        navigator.clipboard.writeText(textoEncriptado);
}

function pegarMensaje(){
    navigator.paste
}
function mostrarTextoEncriptado(mensajeFinal){
    
    document.getElementById('textoEncriptado').innerHTML = mensajeFinal;
    document.getElementById('textoEncriptado').style.fontSize = "25px";
    document.getElementById('textoEncriptado').style.fontWeight = "bold";
    document.getElementById('textoEncriptado').style.textAlign = "left";
    document.getElementById('textoEncriptado').style.margin = "5%";
    document.getElementById('lupaBuscando').style.display = 'none';
    document.getElementById('noEncontrado').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'block';
}

function mostrarTextoDesencriptado(mensajeFinal){

    document.getElementById('textoEncriptado').innerHTML = mensajeFinal;
    document.getElementById('textoEncriptado').style.fontSize = "25px";
    document.getElementById('textoEncriptado').style.fontWeight = "bold";
    document.getElementById('textoEncriptado').style.textAlign = "left";
    document.getElementById('textoEncriptado').style.margin = "5%";
    document.getElementById('lupaBuscando').style.display = 'none';
    document.getElementById('noEncontrado').style.display = 'none';
    document.getElementById('botonCopiar').style.display = 'block';
}

function modoOscuro(){
    document.getElementById("body").style.backgroundColor = '#444';
}

function modoClaro(){
    document.getElementById("body").style.backgroundColor = '#FFFFFF'
}