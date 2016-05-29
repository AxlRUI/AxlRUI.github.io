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
function registro(){

	document.getElementById("change").className = "wrap";
	document.getElementById("change2").className = "none";
	document.getElementById("bienvenida").className = "none";

};
function login(){

	document.getElementById("change2").className = "wrap";
	document.getElementById("change").className = "none";
	document.getElementById("bienvenida").className = "none";

};
function valusuario(){

	var input = document.getElementById("po"),
		password = document.getElementById("pu");

	if ((input.value == "user") && (password.value == "ok")) {

		principal();

	}else{
		alert("Usuario o contraseña incorrectos");
	}
	return false;
};
function principal(){

	document.getElementById("change2").className = "none";
	document.getElementById("ini").className = "wrap2";
	document.getElementById("header").className = "";
	document.getElementById("reg").className = "none";

};
function voca(){
	document.getElementById("ini").className = "none";
	document.getElementById("grammar").className = "none";
	document.getElementById("stats").className = "none";
	document.getElementById("vocabulary").className = "wrap2";
};
function grammar(){
	document.getElementById("ini").className = "none";
	document.getElementById("grammar").className = "wrap2";
	document.getElementById("stats").className = "none";
	document.getElementById("vocabulary").className = "none";
};
function stats(){
	document.getElementById("ini").className = "none";
	document.getElementById("grammar").className = "none";
	document.getElementById("stats").className = "wrap2";
	document.getElementById("vocabulary").className = "none";
};
function exit(){
	location.href = 'http://axlrui.github.io/index.html';
};
function registroenv(){
	var namo = document.getElementById("rt"),
		pass1 = document.getElementById("qw"),
		pass2 = document.getElementById("we"),
		email = document.getElementById("cor");

	if(namo.value == ""){
		alert("Nombre de usuario no valido");
	}else if(pass1.value != pass2.value){
		alert("Las contraseñas no coinciden");
	}else{
		alert("Registro realizado con exito");
	}
};
