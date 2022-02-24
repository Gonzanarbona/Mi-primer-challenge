var btnEncriptar = document.getElementById ("btn-encriptar").addEventListener("click", encriptar);
    
function encriptar(event){
    event.preventDefault();

    var texto1 = document.getElementById("input-texto").value;
    texto1 = texto1.toLowerCase()
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat")
    var msg = document.getElementById("msg");

    msg.value = texto1;
}   

var btnDesEncriptar = document.getElementById ("btn-desencriptar").addEventListener("click", desencriptar);
function desencriptar(event){
    event.preventDefault(); 

    var textoDesencriptar = document.getElementById("input-texto").value;
    textoDesencriptar = textoDesencriptar.toLowerCase()
        .replaceAll("enter","e")
        .replaceAll("imes","i")
        .replaceAll("ai","a")
        .replaceAll("ober","o")
        .replaceAll("ufat","u")
    var msg = document.getElementById("msg");

    msg.value = textoDesencriptar;
}


var btnCopiar = document.getElementById("btn-copy").addEventListener("click", copiarTexto);
function copiarTexto(){
    textocopiar = document.getElementById("msg");
    textocopiar.select();
    document.execCommand("copy");

    msg.value = " ";

    alert("Texto Copiado");


}

