/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


if(Modernizr.canvas){
	//canvas is supported
	var theCanvas = document.getElementById('canvas1');
	var ctx = theCanvas.getContext('2d');
}else{
	//canvas not supported polyfills would go here
}
*/

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

if(Modernizr.canvas){
	//canvas is supported
	var part1 = document.getElementById('canvas1');
	var ctx = part1.getContext('2d');
	
	//Draw Rectangle here
	ctx.strokeStyle = 'black';
	ctx.fillStyle = '#87CEFA';
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillRect(0,0,50,100);
	ctx.strokeRect(0,0,50,100);
	ctx.stroke();
	ctx.fill();
}else{
	//canvas not supported polyfills would go here
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/
if(Modernizr.canvas){
	//canvas is supported
	var part2 = document.getElementById('canvas2');
	var ctx = part2.getContext('2d');
	
	//Draw Circle here
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'rgba(128, 0, 0, .5)';
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(50,50,20,0,(360/180) * Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(50,50,30,0,(360/180) * Math.PI);
	ctx.stroke();
}else{
	//canvas not supported polyfills would go here
}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/

if(Modernizr.canvas){
	//canvas is supported
	var part3 = document.getElementById('canvas3');
	var ctx = part3.getContext('2d');
	
	//Draw Star here
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'yellow';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(125,125);
	ctx.lineTo(150,125);
	ctx.lineTo(125,150);
	ctx.lineTo(135,175);
	ctx.lineTo(100,150);
	ctx.lineTo(75,175);
	ctx.lineTo(75,175);
	ctx.lineTo(80,150);
	ctx.lineTo(60,125);
	ctx.lineTo(80,125);
	ctx.lineTo(100,100);
	
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
	
}else{
	//canvas not supported polyfills would go here
}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
if(Modernizr.canvas){
	//canvas is supported
	var part4 = document.getElementById('canvas4');
	var ctx = part4.getContext('2d');
	
	//Draw Umbrella top here
	ctx.strokeStyle = 'black';
	ctx.fillStyle = 'rgba(128, 0, 0, .5)';
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.arc(60,60,50,1 *Math.PI, 2 * Math.PI);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(10,60);
	ctx.bezierCurveTo(20,50,45,50,45,60);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(45,60);
	ctx.bezierCurveTo(45,50,80,50,80,60);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(80,60);
	ctx.bezierCurveTo(90,50,110,50,110,60);
	ctx.stroke();
	
}else{
	//canvas not supported polyfills would go here
}




/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

if(Modernizr.canvas){
	//canvas is supported
	var part5 = document.getElementById('canvas5');
	var ctx = part5.getContext('2d');
	
	var text = "Hello World!!!";
	
	//Draw text here
	ctx.font = "18pt trebuchet";
	ctx.fillStyle = "orange";
	ctx.fillText(text, 40, 40);

}else{
	//canvas not supported polyfills would go here
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

if(Modernizr.canvas){
	//canvas is supported
	var part6 = document.getElementById('canvas6');
	var ctx = part6.getContext('2d');
	
	
	//Draw images here
	var srcImg = document.getElementById("img1");
	//ctx.drawImage(srcImg, 0, 0);
	
	//scale
	//ctx.drawImage(srcImg, 50, 50, 1650, 544);
	
	//slice
	ctx.drawImage(srcImg, 312, 584, 316, 416, 50, 50, 100, 150);
}else{
	//canvas not supported polyfills would go here
}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

if(Modernizr.canvas){
	//canvas is supported
	var part7 = document.getElementById('canvas7');
	var ctx = part7.getContext('2d');
	
	//Draw Rectangle here
	ctx.strokeStyle = 'black';
	ctx.fillStyle = '#87CEFA';
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.fillRect(50,150,300,150);
	ctx.fill();
	
	//windows
	ctx.fillStyle = 'white';
	ctx.fillRect(270,180,50,50);
	ctx.strokeRect(270,180,50,50);
	ctx.fillRect(80,180,50,50);
	ctx.strokeRect(80,180,50,50);	
	ctx.stroke();
	ctx.fill();
	
	//door
	ctx.fillStyle='brown';
	ctx.fillRect(170, 210, 50,90);
	ctx.fill();
	
	//roof
	ctx.fillStyle = 'red';
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(0,150);
	ctx.lineTo(200,50);
	ctx.lineTo(400, 150);
	ctx.lineTo(0, 150);
	ctx.closePath();
	ctx.stroke();
	ctx.fill();
	
	//chimney
	ctx.fillStyle="#700000";
	ctx.beginPath();
	ctx.moveTo(280, 89);
	ctx.lineTo(280,50);
	ctx.lineTo(250, 50);
	ctx.lineTo(250,75);
	ctx.stroke();
	ctx.fill();
	
	//smoke
	ctx.strokeStyle="#989393";
	ctx.lineWidth = 15;
	ctx.beginPath();
	ctx.moveTo(265,50);
	ctx.bezierCurveTo(265, 40, 280, 40, 240, 0);
	
	ctx.stroke();
	
}else{
	//canvas not supported polyfills would go here
}




















