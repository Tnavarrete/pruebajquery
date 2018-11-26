	var cuenta = 0;
	$(document).ready(function(){
		
     $(".hide").hide();

		$("#myform").on('submit', function(event){
			var text = $("#mytext").val();
			event.preventDefault();
                                                                   
			var img = $('.profile-pic').attr('src');
			
			$(":image");

			$(".right").append(
				'<div class="note">'
				+'<div class="pin pin-mov">'
				+'<i class="fas fa-times"></i>'
				+'</div>'
				+'<div class="card__profile-container">'
				+'<img class="card__profile" src="images/profile.png" alt="">' 
			    +'</div>'
                +'<div class="text">'
                + text
                +'</div>'
                +'<a id="like" class="card__like card__like__red" onclick="contador()">' 
                +'<center>'
                +'<span id="timesClicked">'
                + cuenta
                +'</span>'
                +'</center>'
                +'<i class="fas fa-heart" aria-hidden="true"></i></a>'
                +'</div>')
			$("#mytext").val('');
			$("#mytext").focus();
				
		});

		$('.right').on('click', '.pin', function(event) {
	        event.stopPropagation();
	        $(this).parent().fadeOut();
		});


$('.fa-heart').click(function() {
	        
	        console.log('entro a heart');        
		});


$('.fa-heart').click(function(event){
	event.preventDefault();
	event.stopPropagation();

 $(this).toggleClass('card__like__red');
});



});

  //like en el corazon

/*function counter(e){
	console.log('entro a heart');
	var timesClicked = 0;
    timesClicked++;
    document.getElementById('timesClicked').innerHTML = timesClicked;
    event.preventDefault();
};

$('.card__like').click(function(event){
	event.preventDefault();
	event.stopPropagation();
$(this).toggleClass('card__like--red');
});
*/
function contador() {
	cuenta++;

	var counter = cuenta;
	$( "#timesClicked" ).html( counter );
	event.preventDefault();

	//document.getElementById("timesClicked").=cuenta
	//console.log(cuenta);
};