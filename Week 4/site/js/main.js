if(Modernizr.canvas){
	//Canvas is supported
	
		var popupCanvas = document.getElementById("popupCanvas");			
		var ctx = popupCanvas.getContext("2d");
		
		popup();
		
		function popup(){
			popupImg = new Image();
			popupImg.src = 'http://i58.tinypic.com/1e41oz.png';
			popupImg.onload = function(){
				ctx.drawImage(popupImg, 0,0);	
				setInterval(function(){
				ctx.clearRect(0,0,150,95);
				},9000);
			}
			    
		}
	
			

			

	//canvas ninja star animation 
	 
	window.onload = function() {
		var theCanvas = document.getElementById('Canvas1');
				
		if (theCanvas && theCanvas.getContext) {
			
		var ctx = theCanvas.getContext("2d");
		var img = new Image();
		
				
		if (ctx) {
var canvas = document.getElementById('Canvas1');
    var ctx = canvas.getContext('2d');
    var img = new Image();

    var ang = 0; 
    var fps = 5000 / 25; 
    img.onload = function () { //on image load do the following stuff
        canvas.width = 960 << 1; //double the canvas width
        canvas.height = 50 << 1; //double the canvas height
        var cache = this; //cache the local copy of image element for future reference
        setInterval(function () {
            ctx.save(); //saves the state of canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas
            ctx.translate(cache.width, cache.height); //let's translate
            ctx.rotate(Math.PI / 180 * (ang += 35)); //increment the angle and rotate the image 
            ctx.drawImage(img, -cache.width / 2, -cache.height / 2, cache.width, cache.height); //draw the image ;)
            ctx.restore(); //restore the state of canvas
			ctx.translate( 80, 0 );	
        }, fps);
    };		img.src='http://i60.tinypic.com/33uzij5.png';
		
}	

	}else {
		//Canvas is not supported
		//Polyfill would go here
		}


	if(Modernizr.draganddrop){
		//ctx.font = "25pt Georgia";
		//ctx.fillText("Drag and Drop Works!!", 20, 120);
		
		}else{
			//Ployfills would go
			}
	}
}

//map scripts
$(document).ready(function(){
	$('#mapForm').change(function(){
		var selectedContinent = $('#mapForm option:selected').val();
		if( selectedContinent == 'ALL' ){
			
			$('a.mark').show(1000);
		}else{
			$('a.mark[continent*="'+selectedContinent+'"]').show(1000);
			$('a.mark[continent!="'+selectedContinent+'"]').hide(1000);
		}
	});
		
	});
