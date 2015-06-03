$(document).ready(function(){
	$('#button1').click(function(){
		$("#logo1").toggle();
		$("#logo2").toggle();
	});
});

$(document).ready(function(){
	$('#button2').click(function(){
		$("#button1").css("color", "green");
		$("#button2").css("color", "blue");
		$("#button3").css("color", "yellow");
		$("h1").css("font-family","Verdana", "sans-serif");
	});
});

$(document).ready(function(){
	$('#button3').click(function(){
		$("#mainnav").css({
			width: '800px',
			opacity: '0.75'
		});
	});
});	