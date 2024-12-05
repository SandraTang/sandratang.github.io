function arcade() {
  noStroke();
  // box border
  fill(230);
  rect(boxLeft-boxBorder, boxTop-boxBorder, boxBorder, boxHeight+2*boxBorder); // left
  rect(boxLeft+boxWidth, boxTop-boxBorder, boxBorder, boxHeight+2*boxBorder); // right
  rect(boxLeft-boxBorder, boxTop-boxBorder, boxWidth+2*boxBorder, boxBorder); // top
  rect(boxLeft-boxBorder, boxTop+boxHeight, boxWidth+2*boxBorder, boxBorder); // top
  // outer jut
  outerJutWidth = boxWidth+2*boxBorder+4*jut;
  outerJutHeight = boxTop-boxBorder-jut;
  rect(boxLeft-boxBorder-2*jut, 0, outerJutWidth, outerJutHeight);
  rect(boxLeft-boxBorder-2*jut, boxTop+boxHeight+boxBorder+jut, outerJutWidth, outerJutHeight);
  // trapezoid
  fill(210);
  beginShape();
  vertex(boxLeft-boxBorder, boxTop-boxBorder);
  vertex(boxLeft-boxBorder-2*jut, boxTop-boxBorder-jut);
  vertex(boxLeft+boxWidth+boxBorder+2*jut, boxTop-boxBorder-jut);
  vertex(boxLeft+boxWidth+boxBorder, boxTop-boxBorder);
  endShape(CLOSE);
  beginShape();
  vertex(boxLeft-boxBorder, boxTop+boxHeight+boxBorder);
  vertex(boxLeft-boxBorder-2*jut, boxTop+boxHeight+boxBorder+jut);
  vertex(boxLeft+boxWidth+boxBorder+2*jut, boxTop+boxHeight+boxBorder+jut);
  vertex(boxLeft+boxWidth+boxBorder, boxTop+boxHeight+boxBorder);
  endShape(CLOSE);
  // cover the extra lines
  fill(150);
  rect(0-boxBorder, boxTop-boxBorder, boxLeft, boxHeight+2*boxBorder); // left
  rect(boxLeft+boxWidth+boxBorder, boxTop-boxBorder, width-(boxLeft+boxWidth+boxBorder), boxHeight+2*boxBorder); // right
  // text
  fill(150);
  textFont(fancy, 32);
  textAlign(CENTER, CENTER);
  text("Sandra Tang Game Development History", width/2, outerJutHeight/2);
  if (phase == 1) {
    text("arrow keys to play", width/2, (boxTop+boxHeight+boxBorder+jut+height)/2);
  }
}
