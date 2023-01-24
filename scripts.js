/* Declaración e inicialización de variables */
var btnEncriptar=document.querySelector(".btn-enc");
var btnDesencriptar=document.querySelector(".btn-desenc");
var btnCopiar=document.querySelector(".btn-copiar");
var btnLimpiar=document.querySelector(".btn-limpiar");
var contenedorMunieco=document.querySelector(".contenedor-munieco");
var h3=document.querySelector(".contenedor-h3");
var msgAccionRealizada=document.querySelector(".accion-realizada");
var textoProcesado=document.querySelector(".text-result");
var areaDeTexto=document.querySelector(".text-area");
var letrasAReemplazar = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

/* ******************** Cuerpo de funciones ******************** */
function encriptar()
{
    if(areaDeTexto.value=="")
        return;
    ocultarLeyenda();
    textoProcesado.textContent=encriptarTexto(recuperarTexto());
    msgAccionRealizada.textContent="Mensaje encriptado:";
}


function desencriptar()
{
    if(areaDeTexto.value=="")
        return;
    ocultarLeyenda();
    textoProcesado.textContent=desencriptarTexto(recuperarTexto());
    msgAccionRealizada.textContent="Mensaje desencriptado:";
}


function copiar()
{
    areaDeTexto.value=textoProcesado.textContent;
    copyToClipBoard();
}


function limpiar()
{
    areaDeTexto.value="";
    textoProcesado.textContent="";
    mostrarLeyenda();
}


function recuperarTexto()
{
    var textarea=document.querySelector(".text-area");
    return(textarea.value);
}


function ocultarLeyenda()
{
    contenedorMunieco.classList.add("hidden");
    h3.classList.add("hidden");
}


function mostrarLeyenda()
{
    contenedorMunieco.classList.remove("hidden");
    h3.classList.remove("hidden");
}


function encriptarTexto(texto_a_encriptar)
{
    var textoEncriptado="";
    var coincidencia=false;

    for(let pos=0;pos<texto_a_encriptar.length;pos++)
    {
        for(let i=0;i<letrasAReemplazar.length;i++)
        {
            if(texto_a_encriptar[pos]==letrasAReemplazar[i][0])
            {
                textoEncriptado+=letrasAReemplazar[i][1];
                coincidencia=true;
                break;
            }
        }
        if(!coincidencia)
            textoEncriptado+=texto_a_encriptar[pos];
        coincidencia=false;
    }
    return(textoEncriptado);
}


function desencriptarTexto(texto_a_desencriptar)
{
    var textoDesencriptado="";
    var coincidencia=false;

    for(let pos=0;pos<texto_a_desencriptar.length;pos++)
    {
        for(let i=0;i<letrasAReemplazar.length;i++)
        {
            if(texto_a_desencriptar[pos]==letrasAReemplazar[i][0])
            {
                textoDesencriptado+=letrasAReemplazar[i][0];
                pos+=letrasAReemplazar[i][1].length-1;
                coincidencia=true;
                break;
            }
        }
        if(!coincidencia)
            textoDesencriptado+=texto_a_desencriptar[pos];
        coincidencia=false;
    }
    return(textoDesencriptado);
}


function copyToClipBoard()
{
    var codigoACopiar=document.querySelector(".text-result"); 
    var seleccion=document.createRange();
    
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    
    document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}

/* Asignación de eventos a funciones */
btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;
btnCopiar.onclick=copiar;
btnLimpiar.onclick=limpiar;