function points() {
  //if (abs(width/2-mouseX) > boxWidth/2) {
  //  a = 255-abs(abs(width/2-mouseX)-boxWidth/2);
  //} else {
  //  a = 255;
  //}
  let c = color(10, 10, 10, a);
  fill(c);
  rect(boxLeft, boxTop, boxWidth, boxHeight);
  overview();
  graph();
  info();
  pacman();
}

function graph() {
  stroke(150);
  line(boxLeft, boxTop/1.5+boxHeight*(7/8), boxLeft+boxWidth, boxTop/1.5+boxHeight*(7/8));
  
  // statistics for each game
  i1 -= 2;
  if (i1 < 1) {i1 = 1;}
  i2 += 2;
  if (i2 >= days.length) {i2 = days.length-1;}
   for (i = i1; i <= i2; i++) {
    stretchScale = 5;
    x1 = boxLeft + (days[i-1]/maxDay)*(boxWidth-2*padding)+padding;
    x1 = (x1-px)*stretchScale+width/2;
    x2 = boxLeft + (days[i]/maxDay)*(boxWidth-2*padding)+padding;
    x2 = (x2-px)*stretchScale+width/2;
    // y scaling
    stretch = boxHeight*100;
    // y values
    val1 = [views[i-1], likes[i-1]];
    val2 = [views[i], likes[i]];
    colors = [color(230, 44, 155), color(255, 41, 169)];
    // lines
    for (j = 0; j < val1.length; j++) {
      y1 = boxTop/1.5-(sqrt(val1[j])/maxStat)*(stretch)+boxHeight*(7/8);
      y2 = boxTop/1.5-(sqrt(val2[j])/maxStat)*(stretch)+boxHeight*(7/8);
      stroke(colors[j]);
      line(x1, y1, x2, y2);
    }
  }
  
  // year markings
  for (i = 0; i <= newYears.length; i++) {
    stretchScale = 5;
    x = boxLeft + (newYears[i]/maxDay)*(boxWidth-2*padding)+padding;
    x = (x-px)*stretchScale+width/2;
    // y scaling
    stretch = boxHeight*100;
    // y values
    y = boxTop/1.5+boxHeight*(7/8);
    stroke(100);
    line(x, y, x, y-110);
    noStroke();
    fill(100);
    textFont(normal, 12);
    text(2013+i, x, y-125);
    
  }
  
  // each game point
  noStroke();
  for (i = i1-1; i <= i2; i++) {
    fill(200);
    circleX = boxLeft+(days[i]/maxDay)*(boxWidth-2*padding)+padding;
    circleX = (circleX-px)*stretchScale+width/2;
    circle(circleX, boxTop/1.5+boxHeight*(7/8), 5);
  }
}


function info() {
  x = boxLeft+(days[selectedIndex]/maxDay)*(boxWidth-2*padding)+padding;
  x = (x-px)*stretchScale+width/2;
  stroke(100);
  // current game line + stats
  viewsY = boxTop/1.5-(sqrt(views[selectedIndex])/maxStat)*(stretch)+boxHeight*(7/8);
  line(x, viewsY-9, x, boxTop/1.5+boxHeight*(7/8));
  noStroke();
  textFont(normal, 12);
  textAlign(CENTER, CENTER);
  stats = release[selectedIndex] + "  |  " + views[selectedIndex] + " views, " + likes[selectedIndex] + " likes";
  statsWidth = textWidth(stats);
  let c = color(150, 150, 150, 100);
  fill(c);
  rect(x-statsWidth/2-15, viewsY-55, statsWidth+30, 35, 10);
  beginShape();
  vertex(x, viewsY-9);
  vertex(x-10, viewsY-20);
  vertex(x+10, viewsY-20);
  endShape(CLOSE);
  fill(255);
  text(stats, x, viewsY-55+(35/2));
  // stats and story
  textFont(fancy, 18);
  y = boxTop + boxHeight * (6/8) + 25;
  text(title[selectedIndex], x, y);
  textFont(normal, 12);
  text(genre[selectedIndex] + " game on " + program[selectedIndex], x, y+20);
  fill(40, 247, 192);
  textAlign(CENTER, TOP);
  textFont(fancy, 24);
  text(subheadline[selectedIndex], boxLeft+5*padding, boxTop+30, boxWidth-10*padding, boxTop+boxHeight-y);
  textFont(normal, 16);
  text(motivations[selectedIndex], boxLeft+5*padding, boxTop+70, boxWidth-10*padding, boxTop+boxHeight);
  // likes views labels
  textFont(normal, 12);
  textAlign(RIGHT, CENTER);
  x = boxLeft + (days[0]/maxDay)*(boxWidth-2*padding)+padding;
  x = (x-px)*stretchScale+width/2-10;
  y1 = boxTop/1.5-(sqrt(views[0])/maxStat)*(stretch)+boxHeight*(7/8)-5;
  y2 = boxTop/1.5-(sqrt(likes[0])/maxStat)*(stretch)+boxHeight*(7/8)-5;
  fill(230, 44, 155);
  text("views", x, y1);
  fill(255, 41, 169);
  text("likes", x, y2);
}

function overview(){
  if (keyIsDown(LEFT_ARROW)) {
    pxv -= 0.05;
  } else
  if (keyIsDown(RIGHT_ARROW)) {
    pxv += 0.05;
  } else {pxv *= 0.5;}
  if (pxv < -2) { pxv = -1;}
  if (pxv > 2) { pxv = 1;}
  px += pxv;
  if (px < boxLeft+1.43*circleRadius) { px = boxLeft+1.43*circleRadius; pxv = 0;}
  if (px > boxLeft+boxWidth-1.43*circleRadius) {px = boxLeft+boxWidth-1.43*circleRadius; pxv = 0;}

  // we will only check the x position
  for (let i = 0; i < days.length; i++) {
    let x = boxLeft+(days[i]/maxDay)*(boxWidth-2*padding)+padding;
    // how far away is the mouse from this session?
    let distance = abs(px - x);
    if (distance < 1) {
      selectedIndex = i;
    }
  }
  
  //let closestDistance = boxWidth * 2;

  //// we will only check the x position
  //for (let i = 0; i < days.length; i++) {
  //  let x = boxLeft+(days[i]/maxDay)*(boxWidth-2*padding)+padding;
  //  // how far away is the mouse from this session?
  //  let distance = abs(px - x);
  //  if (distance < closestDistance) {
  //    closestDistance = distance;
  //    selectedIndex = i;
  //  }
  //}
  
  // overview
  fill(50);
  rect(boxLeft, boxTop+boxHeight-60, boxWidth, 60);
  fill(80);
  rect(px-80, boxTop+boxHeight-60, 160, 60);
  // reset borders
  i1 = title.length-1;
  i2 = 1;
  for (i = 1; i < days.length; i++) {
    x1 = boxLeft + (days[i-1]/maxDay)*(boxWidth-2*padding)+padding;
    x2 = boxLeft + (days[i]/maxDay)*(boxWidth-2*padding)+padding;
    // checking borders
    if (x2 > px-100 && i <= i1) {i1 = i;}
    if (x1 < px+100 && i >= i2) {i2 = i;}
    // y scaling
    stretch = boxHeight*250;
    stroke(230);
    // y values
    //val1 = [views[i-1], likes[i-1]];
    //val2 = [views[i], likes[i]];
    val1 = [views[i-1]];
    val2 = [views[i]];
    // lines
    for (j = 0; j < val1.length; j++) {
      y1 = boxTop-(sqrt(sqrt(val1[j]))/maxStat)*(stretch)+boxHeight*(15.8/16);
      y2 = boxTop-(sqrt(sqrt(val2[j]))/maxStat)*(stretch)+boxHeight*(15.8/16);
      line(x1, y1, x2, y2);
    }
  }
  
  textAlign(LEFT, TOP);
  textFont(normal, 12);
  for (i = 0; i < era.length; i++) {
    x = boxLeft + (eraDate[i]/maxDay)*(boxWidth-2*padding)+padding;
    fill(50, 166, 135);
    noStroke();
    text(era[i], x+5, boxTop+boxHeight-57);
    noFill();
    stroke(50, 166, 135);
    line(x, boxTop+boxHeight-56, x, boxTop+boxHeight-4);
  }
}

function pacman(){
  fill(252, 186, 3);
  noStroke();
  arc();
  if (keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) {pacNum += 0.1;}
  if (keyIsDown(LEFT_ARROW)) {pacFace = 1;}
  if (keyIsDown(RIGHT_ARROW)) {pacFace = 0;}
  if (pacFace == 0) {
    arc(boxLeft+boxWidth/2, boxTop/1.5+boxHeight*(7/8), pacSize, pacSize, abs(sin(pacNum)), 2*PI-abs(sin(pacNum)), PIE);
  } else {
    arc(boxLeft+boxWidth/2, boxTop/1.5+boxHeight*(7/8), pacSize, pacSize, PI + abs(sin(pacNum)), PI-abs(sin(pacNum)), PIE);
  }
  
}
