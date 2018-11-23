$(document).ready(
function(){
	formCliente();
}
);
function formCliente(){
$('#formulario2').hide();
$('#back').hide();
$('#next').click(function(){
$('#formulario2').show('slow');
$('#back').show('slow');
$('#formulario').hide();
$('#next').hide();
});
$('#back').click(function(){
$('#formulario').show('slow');
$('#next').show('slow');
$('#formulario2').hide();
$('#back').hide();
});
}
	