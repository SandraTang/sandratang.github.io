// this will store all the weather data
let w;

// this will be the location of the temperature chart
let chart = { };


function setup() {
  createCanvas(375, 667);
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
}

function fclabels() { // both same at -40 degrees
  strokeWeight(0);
  fill(255);
  let offset = 30;
  // CF
  textSize(20);
  let cfheight = height*0.1;
  text("°C", offset, cfheight);
  text("°F", width-offset, cfheight);
  // numbers
  textSize(15);
  // celcius
  for (let i = -40; i <= 50; i += 10) {
    if (i != -40) {
      for (let j = 1; j < width*0.5/offset; j++) {
        a = 80 - j*10;
        fill(255, 255, 255, a);
        text(i, offset*j, height-8*height*(i+40)/900);
      }
    }
  }
  // fahrenheit
  for (let i = -40; i <= 120; i += 10) {
    if (i != -40) {
      for (let j = 1; j < width*0.5/offset; j++) {
        a = 80 - j*10;
        fill(255, 255, 255, a);
        text(i, width-offset*j, height-8*height*(i+40)/1600);
      }
    }
  }
}

function draw() {
  let c1 = color(0, 174, 239); // blue
  let c2 = color(255, 82, 82); // salmon
  
  noStroke();
  textAlign(CENTER);
  textSize(14);

  if (w.ready) {
    amount = (w.getTemperature()+40)/160;
    let c = lerpColor(c1, c2, amount);
    background(c);
    drawWeather();
    fclabels();
    fill('white');

  } else {
    // if the forecast isn't ready yet, show a message at the bottom of the screen
    drawMessage("Loading...");
  }
}


// show a message at the bottom of the screen
function drawMessage(what) {
  text(what, width/2, height - 36);
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

function drawWeather() {
  drawTemperatures();
  noLoop();
}

function drawTemperatures() {
  // temps = [-40, 0, 40, 60, 100, 120, -40, 0, 40, 60, 100, 120, -40, 0, 40, 60, 100, 120, -40, 0, 40, 60, 100, 120, -40, 0, 40, 60, 100, 120, -40, 0, 40, 60, 100, 120, -40, 0, 40, 60, 100, 120, -40, 0, 40, 60, 100, 120];
  let temps = w.getTemperature('hourly');  // provides 48 hours (49 values)
  let times = w.getTime('hourly');

  const count = 6;
  temps = subset(temps, hour()-(count/2)+1, hour()+(count/2)+1);
  times = subset(times, hour()-count/2+1, hour()+count/2+1);

  for (let i = 0; i < count; i++) {
    let x = map(i, 0, count-1, width*0.2, width*0.8);
    let y = map(temps[i], 120, -40, height*0.2, height);
    
    noStroke();
    fill(255);
    textSize(14);
    text(twelveHour(hour()-count/2+1+i), x, y);
    
    if (hour() == hour()-count/2+1+i){
      textSize(80);
      let readout = formatDegrees(temps[i]);
      fill('white');
      text(readout, width/2, height/10);
    }
    
    //textSize(12);
    //text(twelveHour(hour()-count/2+1+i), x, y-10);
    //textSize(16);
    //text(formatDegrees(temps[i]), x, y+5);
  }
}
