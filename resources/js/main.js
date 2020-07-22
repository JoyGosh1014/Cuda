$(document).ready(function () {

	//STICKY MENU
	$(".js-services").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}
		else{
			$("nav").removeClass("sticky");
		}

	});

	//MIXIT UP
	var mixer = mixitup('.container');

})