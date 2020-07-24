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

	//ACTIVE LINK
	$("nav ul li").click(function(){
		$("nav ul li").removeClass("active");
		$(this).addClass("active");
	});
	$("nav a img.logo").click(function(){
		$("nav ul li").removeClass("active");
		$("nav ul li:first-child").addClass("active");
	});
	//MIXIT UP
	var mixer = mixitup('.container');

});

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}