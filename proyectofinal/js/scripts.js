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
	document.getElementById("inicio").className = "inicio";
	document.getElementById("header").className = "";
	document.getElementById("reg").className = "none";

};
function vocabulary(){

};
function exit(){
	location.href = 'http://axlrui.github.io/index.html';
};
