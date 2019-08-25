$(".open").on("click",function(){

	$(".blacked,.model").addClass("active");
});

$(".close").on("click",function(){

	$(".blacked,.model").removeClass("active");
});

$(document).keyup(function(e){
	if(e.keyCode==27){
		$(".blacked,.model").removeClass("active");
	}
});