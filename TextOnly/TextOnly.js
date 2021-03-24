mode = 0;
page = 0;

// quiz info
showAnswer = false;
startType = "F";
endtype = "Celcius";
startTemp = -40;
endTemp = -40;
degree = round(startTemp) + "°" + startType;
trueFalse = 1;
value = endTemp;

function setup() {
  createCanvas(390, 667);
  textAlign(CENTER, CENTER);

  // get the current weather for MIT's latitude and longitude
  w = requestWeather(42.3596764, -71.0958358);

  // un-comment any of these lines (and comment-out the line above)
  // to try your weather app with another location/another time of day
  // w = requestWeather('data/mit-210312.json');
  //w = requestWeather('data/mit-tuesday.json');
  //w = requestWeather('data/mit-wednesday.json');
  //w = requestWeather('data/alcatraz.json');
  //w = requestWeather('data/cambridge.json');
  //w = requestWeather('data/indianapolis.json');
  //w = requestWeather('data/medfield.json');
  
  quizInfo();
}

function draw() {
  // settings
  let c1 = color(0, 174, 239); // blue
  let c2 = color(255, 82, 82); // salmon
  noStroke();
  // draw 
  if (w.ready) {
    amount = (w.getTemperature()+40)/160;
    c = lerpColor(c1, c2, amount);
    background(c);
    bar();
    switch(page) {
      case 1: learn(); break;
      case 2: quiz(); break;
      default: weather(); break;
    }
  } else {
    text("loading...", width/2, height/2);
  }
}

function bar() {
  fill(255);
  rect(0, height*0.94, width, height*0.06);
  // switch page
  fill(c);
  textSize(15);
  switch(page) {
      case 1: 
        text("Learn", width/2, height*0.975);
        fill(150);
        text("Weather", width/6, height*0.975);
        text("Quiz", 5*width/6, height*0.975); 
        break;
      case 2: 
        text("Quiz", 5*width/6, height*0.975); 
        fill(150);
        text("Weather", width/6, height*0.975);
        text("Learn", width/2, height*0.975);
        break;
      default:
        text("Weather", width/6, height*0.975);
        fill(150);
        text("Learn", width/2, height*0.975);
        text("Quiz", 5*width/6, height*0.975); 
        break;
    }
}

function learn() {
  fill(255);
  textSize(30);
  text("Learn", width/2, height*0.2);
  textSize(15);
  text("Fahrenheit to Celcius", width/2, height*0.4);
  text("(°F − 32) × 5/9 = °C", width/2, height*0.4+20);
  text("Celcius to Fahrenheit", width/2, height*0.5);
  text("(°C × 9/5) + 32 = °F", width/2, height*0.5+20);
}

function quizInfo() {
  // generate info
  startType = random(1);
  if (startType == 1) {
     startType = "F";
     endType = "Celcius";
     startTemp = random(-40, 120);
     endTemp = (startTemp-32)*(5/9);
  } else {
    startType = "C";
    endType = "Fahrenheit";
    startTemp = random(-40, 50);
    endTemp = startTemp * (9/5) + 32;
  }
  degree = round(startTemp) + "°" + startType;
  trueFalse = random(0, 1);
  if (trueFalse==1) {
    value = endTemp;
  } else {
    if (random(0, 1) == 0) {
      value = endTemp + random(5, 20);
    } else {
      value = endTemp - random(5, 20);
    }
  }
  value = round(value);
}

function quiz() {
  fill(255);
  textSize(30);
  text("Quiz", width/2, height*0.2);
  // display info
  textSize(15);
  // question
  text("True or false?", width/2, height*0.3);
  text(degree + " in " + endType + " is " + value, width/2, height*0.3 + 15);
  if (showAnswer) {
    if (trueFalse==1) {
      text("True - Correct", width/2, height*0.45);
      text("False - Incorrect", width/2, height*0.55);
    } else {
      text("True - Incorrect", width/2, height*0.45);
      text("False - Correct", width/2, height*0.55);
    }
  } else {
    text("True", width/2, height*0.45);
    text("False", width/2, height*0.55);
  }
  text("Next", width/2, height*0.65);
  noFill();
  stroke(255);
  rect(width/3, height*0.4, width/3, height*0.1);
  rect(width/3, height*0.5, width/3, height*0.1);
  rect(width/3, height*0.6, width/3, height*0.1);
  noStroke();
}

function weather() {
  // properties
  noStroke();
  fill(255);
  offset = 30;
  cfheight = height*0.15;
  // labels
  drawTemperatures();
  drawModeSelection();
  switch(mode) {
    case 1: both(); break;
    case 2: fahrenheit(); break;
    default: celcius(); break;
  }
  noLoop();
}

function drawTemperatures() {
  let temps = w.getTemperature('hourly');  // provides 48 hours (49 values)
  let times = w.getTime('hourly');

  count = 6;
  temps = subset(temps, 0, count-1);
  times = subset(times, 0, count-1);

  for (let i = 0; i < count; i++) {
    let x = map(i, 0, count-1, width*0.25, width*0.95);
    let y = map(temps[i], 120, -40, height*0.3, height*0.9);
    
    if (i == 2){
      textSize(48);
      let readout = round((temps[i]-32)*(5/9)) + "°C / " + round(temps[i]) + "°F";
      fill('white');
      text(readout, width/2, height*0.1);
    }
    
    switch(mode) {
      case 2: 
        circle(x-(width/10), y, 3);
        textSize(12);
        text(twelveHour(hour()-1+i), x-(width/10), y-35);
        textSize(16);
        text(round((temps[i]-32)*(5/9))+"°C", x-(width/10), y-15);
        break;
      case 1: 
        circle(x-(width/22), y, 3);
        textSize(12);
        text(twelveHour(hour()-1+i), x-(width/25), y-55);
        text(round((temps[i]-32)*(5/9))+"°C", x-(width/25), y-35);
        text(round(temps[i])+"°F", x-(width/25), y-15);
        break;
      default: 
        circle(x, y, 3);
        textSize(12);
        text(twelveHour(hour()-1+i), x, y-35);
        textSize(16);
        text(round(temps[i])+"°F", x, y-15);
        break;
    }
  }
}

function celcius() {
  // text
  textSize(15);
  fill(255, 255, 255, 80);
  for (i = -40; i <= 50; i += 10) {
    text(i + "°C", offset, 0.9*height-(height/150)*(i+40));
  }
  // lines
  stroke(255, 255, 255, 30);
  for (i = -40; i <= 50; i += 10) {
    line(offset*2, 0.9*height-(height/150)*(i+40), width, 0.9*height-(height/150)*(i+40));
  }
}

function both() {
  textSize(15);
  fill(255, 255, 255, 80);
  for (i = -40; i <= 50; i += 10) { // CELCIUS
    text(i + "°C", offset, 0.9*height-(height/150)*(i+40));
  }
  for (i = -40; i <= 120; i += 10) { // FAHRENHEIT
    text(i + "°F", width-offset, 0.9*height-(height/(800/3))*(i+40));
  }
  // lines
  stroke(255, 255, 255, 30);
  for (i = -40; i <= 50; i += 10) {
    line(offset*2, 0.9*height-(height/150)*(i+40), width/2, 0.9*height-(height/150)*(i+40));
  }
  for (i = -40; i <= 120; i += 10) {
    line(width/2, 0.9*height-(height/(800/3))*(i+40), width-(2*offset), 0.9*height-(height/(800/3))*(i+40));
  }
}

function fahrenheit() {
  // text
  textSize(15);
  fill(255, 255, 255, 80);
  for (i = -40; i <= 120; i += 10) {
    text(i + "°F", width-offset, 0.9*height-(height/(800/3))*(i+40));
  }
  // lines
  stroke(255, 255, 255, 30);
  for (i = -40; i <= 120; i += 10) {
    line(0, 0.9*height-(height/(800/3))*(i+40), width-(2*offset), 0.9*height-(height/(800/3))*(i+40));
  }
}

function drawModeSelection() {
  textSize(12);
  y = height*0.20;
  text("Learn", 119, y);
  text("Celcius", 164, y);
  text("Both", 206, y);
  text("Fahrenheit", 257, y);
  noFill();
  stroke(255);
  rect(140, 120, 49, 25, 5, 0, 0, 5);
  rect(189, 120, 35, 25);
  rect(224, 120, 68, 25, 0, 5, 5, 0);
  // specific to mode
  switch(mode) {
    case 1: 
      fill(255);
      rect(189, 120, 35, 25);
      noStroke();
      fill(c);
      text("Both", 206, y);
      break;
    case 2:
      fill(255);
      rect(224, 120, 68, 25, 0, 5, 5, 0);
      noStroke();
      fill(c);
      text("Fahrenheit", 257, y);
      break;
    default: 
      fill(255);
      rect(140, 120, 49, 25, 5, 0, 0, 5);
      noStroke();
      fill(c);
      text("Celcius", 164, y);
      break;
  }
}

function mouseClicked() {
  // mode selection
  if (mouseX >= 140 && mouseX < 189 && mouseY >= 120 && mouseY <= 145) {mode=0; draw();}
  if (mouseX >= 189 && mouseX < 224 && mouseY >= 120 && mouseY <= 145) {mode=1; draw();}
  if (mouseX >= 224 && mouseX <= 292 && mouseY >= 120 && mouseY <= 145) {mode=2; draw();}
  // page selection 
  if (mouseX >= 0 && mouseX < width/3 && mouseY >= height*0.94 && mouseY <= height) {page=0; draw();}
  if (mouseX >= width/3 && mouseX < 2*width/3 && mouseY >= height*0.94 && mouseY <= height) {page=1; draw();}
  if (mouseX >= 2*width/3 && mouseX < width && mouseY >= height*0.94 && mouseY <= height) {page=2; draw();}
  // quiz answer (true/false)
  if (mouseX >= width/3 && mouseX <= 2*width/3 && mouseY >= height*0.4 && mouseY < height*0.5) {showAnswer = true; draw();}
  if (mouseX >= width/3 && mouseX <= 2*width/3 && mouseY >= height*0.5 && mouseY < height*0.6) {showAnswer = true; draw();}
  // next
  if (mouseX >= width/3 && mouseX <= 2*width/3 && mouseY >= height*0.6 && mouseY < height*0.7) {showAnswer = false; quizInfo(); draw();}
}

function twelveHour(input) {
  m = "am";
  if (input >= 12 && input <= 23) {
    m = "pm";
  }
  if (input % 12 == 0) {
    return 12 + m;
  }
  return input%12 + m;
}
