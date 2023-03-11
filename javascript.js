/* Funcionamiento de la Licuadora */
var estadoLicuadora = "apagado";
var sonidoLicuadora = document.getElementById( "licuadora-sonido" );
var botonLicuadora = document.getElementById( "licuadora-boton-sonido" );
var licuadora = document.getElementById("licuadora");

function controlarLicuadora() {
  if ( estadoLicuadora == "apagado" ) {
    estadoLicuadora = "encendido";
    hacerBrrBrr();
    licuadora.classList.add("activo");
  } else {
    estadoLicuadora = "apagado";
    hacerBrrBrr();
    licuadora.classList.remove("activo");
  }
}

function hacerBrrBrr() {
if( sonidoLicuadora.paused ){
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}