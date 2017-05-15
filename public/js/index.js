$(document).ready(function (){
	$(window).scroll(function (event) {
		var y = $(this).scrollTop(); //set position from top when to change style in pixels
		if (y >= 300) {
			$('.navbar').addClass('resized');
			$(".navbarName").fadeIn();
		} else {
			$('.navbar').removeClass('resized');
			$(".navbarName").fadeOut();
			
		}
	});
});

var myPlayer;

	function resizeVideoJS(){

		var aspectRatio,width,height;


		if(($(document).width()>1028)){
			aspectRatio = 1080/1920; 
			width = document.getElementById(myPlayer.id).parentElement.offsetWidth;
			height = width * aspectRatio;
		}
		else{
			width =1000;
			height = 570;
		}

		myPlayer.width(width).height(height);

	}


 // Once the video is ready
_V_("heroVideo").ready(function(){
	var firstTime = true;
	myPlayer = this; 

	$(".vjs-controls").hide();
	//var videoid =document.getElementsByClassName("vjs-controls");
  //videoid[0].style.setProperty("display", "none", "important");





	$("#playButton").click(function() {		
		$("#closeButton").fadeIn();
		$("#header").animate({
	    top: "-=50",
	    opacity: 0
	  	}, 2000, function() {
	  	  // Animation complete.
		});
		
		$(".vjs-controls").fadeIn();

		$(".row.article").animate({
	    marginTop: "+=500",
	    opacity: 0
	  	}, 2000, function() {
	  	  // Animation complete.
		});
		
		$("#footer").fadeOut();
		$("#playButton").fadeOut();

		myPlayer.width($(".videoContainer").width()).height($(".videoContainer").height()-100);
		if(firstTime)
			myPlayer.currentTime(0)		
		myPlayer.muted(false);
		myPlayer.play();
		firstTime = false;
	});

	$("#closeButton").click(function() {
		$(".vjs-controls").fadeOut();
		$("#closeButton").fadeOut();
		$("#header").animate({
	    top: "+=50",
	    opacity: 1
	  	}, 500, function() {
	  	  // Animation complete.
		});
		

		$(".row.article").animate({
	    marginTop: "-=500",
	    opacity: 1
	  	}, 500, function() {
	  	  // Animation complete.
		});

		$("#footer").fadeIn();
		$("#playButton").fadeIn();
		myPlayer.muted(true);
		resizeVideoJS();
	});		
  
   // Initialize resizeVideoJS()
  resizeVideoJS();
  // Then on resize call resizeVideoJS()
  window.onresize = resizeVideoJS; 

});

