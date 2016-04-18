$(document).ready(main);

	var ok = 1;

function main(){
		$('.menu').click(function(){
			if (ok == 1){
				$('nav').animate({
					left: '0'
				});
				ok = 0;
			}else{
				ok = 1;
				$('nav').animate({
					left: '-100%'
				});
			}
		});
		$('.submenu').click(function(){
			$(this).children('.hijo').slideToggle();
		});
}
$(function(){
  $(".slide").slidesjs({
    play: {
      active: false,

      effect: "fade",

      interval: 3000,

      auto: true,

      swap: true,

      pauseOnHover: false,

      restartDelay: 2500

    }
  });
});
function enviar(){
  alert("Ya estas registrado")
};
function user(){

	var input = document.getElementById("nombre"),
		password = document.getElementById("pass");
	if ((input.value == "paciente") && (password.value = "pass")){

		document.getElementById("cita").className = "wrap";
		document.getElementById("login").className = "none";
	}
	else{
		alert("Contraseña o Usuario Incorrectos");
	};
	return false;
};
function pago(){
  alert("Tu pago ah sido realizado")
};
function cita(){
  alert("Tu cita ah sido agendada")
};
function receta(){
	document.getElementById("cita").className = "none";
	document.getElementById("receta").className = "receta";
};