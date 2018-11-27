	var cuenta = 0;
	var valor = 0;
	var valCaja = 0;
	$(document).ready(function(){
		
     $(".hide").hide();

		$("#myform").on('submit', function(event){
			var text = $("#mytext").val();
			event.preventDefault();
                                                                   
			var img = $('.profile-pic').attr('src');
			
			$(":image");

			$(".right").append(
				'<div class="note note'
				+valCaja
				+'">'
				+'<div class="pin pin-mov">'
				+'<i class="fas fa-times"></i>'
				+'</div>'
				+'<div class="card__profile-container">'
				+'<img class="card__profile" src="images/profile.png" alt="">' 
			    +'</div>'
                +'<div class="text">'
                + text
                +'</div>'
                +'<button id="'
                + valor
                +'"class="card__like" onclick="contador()">' 
                +'<center>'
                +'<span id="timesClicked">'
                + cuenta
                +'</span>'
                +'</center>'
                +'<i class="fas fa-heart" aria-hidden="true"></i></button>'
                +'</div>')
			$("#mytext").val('');
			$("#mytext").focus();
				
		});

		$('.right').on('click', '.pin', function(event) {
	        event.stopPropagation();
	        $(this).parent().fadeOut();
		});

});


function es(){
	valor++;
	valCaja++;
	cuenta = 0;
}

function contador() {


	var like = document.getElementById(valor);
	if(valor == valCaja){
	like.className = 'card__like card__like__red';
	event.preventDefault();
		cuenta++;

	var counter = cuenta;
	$( "#timesClicked" ).html( counter );
	}



	//document.getElementById("timesClicked").=cuenta
	//console.log(cuenta);
};