
var canvas_var = new fabric.canvas = ("Canvas")

ball-y = 0
ball_x = 0
hole_y = 400
hole_x = 400


block_image_width = 5;
block_image_height = 5;

function load_img(){
	golf_image = golf-history.png;
	Background_image = Grass.jpg;
	ball_image = ball.png;
	console.log("background_image" + background_image);
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas ?
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'.  ? */ 
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (player_y >= 0) {
			player_y = player_y - block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("when up arrow key is pressed, x =" + player_x + "y =" + player_y);
			canvas.remove(player_object);
			player_update();
		}
	}

	function down()
	{
		if (player_y <= 500) {
			player_y = player_y + block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("when down arrow key is pressed, x =" + player_x + "y =" + player_y);
			canvas.remove(player_object);
			player_update();
		}
	}

	function left() {
		if (player_x >= 0) {
			player_x = player_x - block_image_width;
			console.log("block image width =" + block_image_width);
			console.log("when left arrow key is pressed, x =" + player_x + "y =" + player_y);
			canvas.remove(player_object);
			player_update();
		}
	}
	
	function right() {
	if (player_x <= 850) {
			player_x = player_x + block_image_width;
			console.log("block image width =" + block_image_width);
			console.log("when left arrow key is pressed, x =" + player_x + "y =" + player_y);
			canvas.remove(player_object);
			player_update();
		}	
    }