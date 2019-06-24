var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
document.addEventListener("keydown", keyPush);
setInterval(game, 1000/10);
x = y = 200;
xv = yv = score = gotten = gx = gy = 0;
move = "none";
change = 20;
tail = 2;
tailX = [200];
tailY = [200];
function game() {
	ctx.fillStyle = "black";
    ctx.fillRect(0, 0, c.width, c.height-40);
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, c.height-40, c.width, c.height);
    
    //player
    
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, change, change);
    
    //movement
    
    x += xv;
    y += yv;
    
    if (x < 0) {
    	x = 380;
    }
    if (x > 380) {
    	x = 0;
    }
    if (y < 0) {
    	y = 380;
    }
    if (y > 380) {
    	y = 0;
    }
    
    //shift
    
    tailX.push(x);
    tailY.push(y);
    tailX.shift();
    tailY.shift();
    
    //tail
    
    for (var i = 0; i < tail; i++)
    {
        ctx.fillRect(tailX[i], tailY[i], change, change);
    }
    
    //collision detection
    
    for (var i = 0; i < tail-1; i++)
    {
        if (x == tailX[i] && y == tailY[i])
        {
        	tail = 1;
            score = 0;
            tailX.length = 0;
            tailY.length = 0;
            tailX.push(x);
            tailY.push(y);
        }
    }
    
    //goal
    
    if (gotten === 0) {
    	gx = Math.floor(Math.random()*20)*20;
        gy = Math.floor(Math.random()*20)*20;
        gotten = 1;
    }
    
    ctx.font = "12px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Endless Snake Game by Sandra Tang. Score " + score, 10, 424);
    
	ctx.fillStyle = "red";
    ctx.fillRect(gx, gy, change, change);
    
    if (x == gx && y == gy) {
    	score++;
        gotten = 0;
        tail++;
        tailX.push(x);
        tailY.push(y);
    }
    
}
function keyPush(evt) {
	switch(evt.keyCode) {
    	//left arrow and a
        case 37: 
        	xv = 0 - change;
            yv = 0;
            break;
        case 65: 
        	xv = 0 - change;
            yv = 0;
            break;
        //up arrow and w
        case 38:
        	xv = 0;
            yv = 0 - change;
            break;
        case 87:
        	xv = 0;
            yv = 0 - change;
            break;
        //right arrow and d
        case 39:
        	xv = change;
            yv = 0;
            break;
        case 68:
        	xv = change;
            yv = 0;
            break;
        //down arrow and s
        case 40:
        	xv = 0;
            yv = change;
            break;
        case 83:
        	xv = 0;
            yv = change;
            break;
    }
}
