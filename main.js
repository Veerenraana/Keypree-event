// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.gatElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabet key");
		}
		if((keyPressed >=48 && keyPressed<=48)) (keyPressed >=57 )
		{
			numberkey();
			document.getElementById("d2").innerHTML="You pressed Number key";
			console.log("numberkey");

		}
		if((keyPressed >=37 && keyPressed<=40))
		{
			arrowkey();
			document.getElementById("d3").innerHTML="You pressed the arrow key"
		}

		//write a code to check the type of key pressed
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("spical key")
	}
}

function aplhabetkey()
{
	imag_image="Alpkey.png";
	add();
	//upload respective image with the message. 

}
function numberkey()
{
	img_image="numkey.png"
	add();
}
function arrowkey()
{
	img_image="ArrKey.png"
	add();
}
function specialkey()
{
	imag_image="spkey"
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
