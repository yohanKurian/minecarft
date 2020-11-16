var canvas = new fabric.Canvas('myCanvas');

var player_x = 10;
var player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";
block_object = "";

function playerUpload() {
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}


function blockUpload(getBlock) {
    fabric.Image.fromURL(getBlock, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
  console.log(e);
  keyPressed = e.keyCode;
  console.log(keyPressed);
  
  if(e.shiftKey == true && keyPressed == '80'){
      block_width = block_width + 10;
      block_height = block_height + 10;
      document.getElementById("currentWidth").innerHTML = block_width;
      document.getElementById("currentHeight").innerHTML = block_height;
  }
  if(e.shiftKey == true && keyPressed =='77'){
      block_width = block_width - 10;
      block_height = block_height - 10;
      document.getElementById("currentWidth").innerHTML = block_width;
      document.getElementById("currentHeight").innerHTML = block_height;
  }
  if(keyPressed == '38'){
      up();
      console.log("up");
  }
  if(keyPressed == '40'){
      down();
      console.log("down");
  }
  if(keyPressed == '37'){
      left();
      console.log("left");
    
  }
  if(keyPressed == '39'){
    right();
    console.log("right");
    
  }
  if (keyPressed =='67'){
      blockUpload('cloud.jpg');
      console.log("c");
  }
  if (keyPressed =='68'){
    blockUpload('dark_green.png');
    console.log("d");
}
if (keyPressed =='71'){
    blockUpload('ground.png');
    console.log("g");
}
if (keyPressed =='76'){
    blockUpload('light_green.png');
    console.log("l");
}
if (keyPressed =='82'){
    blockUpload('roof.jpg');
    console.log("r");
}
if (keyPressed =='84'){
    blockUpload('trunk.jpg');
    console.log("t");
}
if (keyPressed =='85'){
    blockUpload('unique.png');
    console.log("u");
}
if (keyPressed =='87'){
    blockUpload('wall.jpg');
    console.log("w");
}
if (keyPressed =='89'){
    blockUpload('yellow_wall.png');
    console.log("y");
}
}

function up (){
    if (player_y >= 0){
        player_y = player_y - block_height;
        console.log( player_y)
        canvas.remove( player_object);
        playerUpload();
    }
}

function down (){
    if (player_y <= 500){
        player_y = player_y + block_height;
        console.log( player_y)
        canvas.remove( player_object);
        playerUpload();
    }
}

function left (){
    if (player_x >= 0){
        player_x = player_x - block_width;
        console.log( player_x)
        canvas.remove( player_object);
        playerUpload();
    }
}

function right (){
    if (player_x <= 900){
        player_x = player_x + block_width;
        console.log( player_x)
        canvas.remove( player_object);
        playerUpload();
    }
}