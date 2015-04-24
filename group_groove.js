$('*[data-translate-text="SUGGESTIONS"]').append("<h3 style='background-color:steelblue;padding:10px;'>!!ACCEPTABOT ON!!</h3>");

function autoAccept() {
	console.log("acceptabot");
	$('.destroyBroadcast .confirm').trigger("click");
	
	$('.card .approve').each(function(card) {
		$(this).trigger("click");
	
	});
}

window.setInterval(autoAccept, 10000);