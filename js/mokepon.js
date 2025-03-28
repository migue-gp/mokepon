// Variables Globales

let ataqueJugador
let ataqueEnemigo

let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){

    let sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click",ataqueFuego)
    
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click",ataqueAgua)

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click",ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click",reiniciarJuego)
}

function seleccionarMascotaJugador(){

    let sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let hipodogeSeleccionado = document.getElementById("hipodoge").checked
    let capipepoSeleccionado = document.getElementById("capipepo").checked
    let ratigueyaSeleccionado = document.getElementById("ratigueya").checked

    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (hipodogeSeleccionado){
        spanMascotaJugador.innerHTML = "Hipodoge"
    }else if(capipepoSeleccionado){
        spanMascotaJugador.innerHTML = "Capipepo"
    }else if(ratigueyaSeleccionado){
        spanMascotaJugador.innerHTML = "Ratigueya"
    }else{
        alert("Debes seleccionar una Mascota")
    }

    seleccionarMascotaEmemigo()
}

function seleccionarMascotaEmemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if(mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }else{
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}

function ataqueFuego(){
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
    }else{
        ataqueEnemigo = "TIERRA"
    }
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES GANASTE")
    }else if(vidasJugador == 0){
        crearMensajeFinal("LO SIENTO PERDISTE")
    }
}

function crearMensaje(resultado){

    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    sectionMensajes.innerHTML = resultado
    ataquesDelJugador.innerHTML = ataqueJugador
    ataquesDelEnemigo.innerHTML = ataqueEnemigo
}

function crearMensajeFinal(resultadoFinal){

    let sectionMensajes = document.getElementById("resultado")
    sectionMensajes.innerHTML= resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar= document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego)



let mascotaJugador = ""; // Nueva variable global para almacenar la mascota seleccionada

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
    sectionSeleccionarMascota.style.display = "none";

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarAtaque.style.display = "flex";

    let hipodogeSeleccionado = document.getElementById("hipodoge").checked;
    let capipepoSeleccionado = document.getElementById("capipepo").checked;
    let ratigueyaSeleccionado = document.getElementById("ratigueya").checked;

    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let imgMascotaJugador = document.getElementById("img-mascota-jugador");

    if (hipodogeSeleccionado) {
        spanMascotaJugador.innerHTML = "Hipodoge";
        imgMascotaJugador.src = "./assets/hipodoge.png"; // Cambia la ruta según la ubicación de tu imagen
        mascotaJugador = "Hipodoge"; // Guardamos la selección
    } else if (capipepoSeleccionado) {
        spanMascotaJugador.innerHTML = "Capipepo";
        imgMascotaJugador.src = "./assets/capipepo.png"; // Cambia la ruta según la ubicación de tu imagen
        mascotaJugador = "Capipepo"; // Guardamos la selección
    } else if (ratigueyaSeleccionado) {
        spanMascotaJugador.innerHTML = "Ratigueya";
        imgMascotaJugador.src = "./assets/ratigueya.png"; // Cambia la ruta según la ubicación de tu imagen
        mascotaJugador = "Ratigueya"; // Guardamos la selección
    } else {
        alert("Debes seleccionar una Mascota");
    }

    seleccionarMascotaEnemigo(); // Seleccionamos la mascota del enemigo
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3);
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
    let imgMascotaEnemigo = document.getElementById("img-mascota-enemigo");

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge";
        imgMascotaEnemigo.src = "./assets/hipodoge.png"; // Cambia la ruta según la ubicación de tu imagen
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo";
        imgMascotaEnemigo.src = "./assets/capipepo.png"; // Cambia la ruta según la ubicación de tu imagen
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya";
        imgMascotaEnemigo.src = "./assets/ratigueya.png"; // Cambia la ruta según la ubicación de tu imagen
    }
}
