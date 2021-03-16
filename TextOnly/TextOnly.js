// this will store all the weather data
let w;

// this will be the location of the temperature chart
let chart = { };


function setup() {
  createCanvas(390, 844);
  textAlign(CENTER, CENTER);

  // get the current weather for MIT's latitude and longitude
  //w = requestWeather(42.3596764, -71.0958358);

  // un-comment any of these lines (and comment-out the line above)
  // to try your weather app with another location/another time of day
  w = requestWeather('data/mit-210312.json');
  //w = requestWeather('data/mit-tuesday.json');
  //w = requestWeather('data/mit-wednesday.json');
  //w = requestWeather('data/alcatraz.json');
  //w = requestWeather('data/cambridge.json');
  //w = requestWeather('data/indianapolis.json');
  //w = requestWeather('data/medfield.json');

  chart.left = 40;
  chart.right = width - chart.left;
  chart.top = 400;
  chart.bottom = 530;
}

function fclabels() { // both same at -40 degrees
  strokeWeight(0);
  fill(255);
  let offset = 20;
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
      text(i, offset, height-8*height*(i+40)/900);
    }
  }
  // fahrenheit
  for (let i = -40; i <= 120; i += 10) {
    if (i != -40) {
      text(i, width-offset, height-8*height*(i+40)/1600);
    }
  }
}

function draw() {
  background(0, 174, 239);  // blue
  
  fclabels();
  
  fill('white');
  noStroke();
  textAlign(CENTER);
  textSize(14);

  if (w.ready) {
    drawWeather();

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
  textSize(80);
  // get the temperature, round it, and add the degree symbol
  let readout = formatDegrees(w.getTemperature());
  // show the temperature in degrees
  text(readout, width/2, 110);
  
  // draw the chart of temperatures
  drawTemperatures();

  // stop animating
  noLoop();
}

function drawTemperatures() {
  let temps = w.getTemperature('hourly');  // provides 48 hours (49 values)
  let times = w.getTime('hourly');

  const count = 6;  // we'll use 24 hours
  temps = subset(temps, hour()-count/2+1, hour()+count/2+1);  // grab the first 24 temperatures
  times = subset(times, hour()-count/2+1, hour()+count/2+1);

  for (let i = 0; i < count; i++) {
    let x = map(i, 0, count-1, width*0.2, width*0.8);
    let y = map(temps[i], -40, 120, height*0.95, height*0.15);
    
    noStroke();
    fill(255);
    textSize(14);
    text(twelveHour(hour()-count/2+1+i), x, y);
    //textSize(12);
    //text(twelveHour(hour()-count/2+1+i), x, y-15);
    //textSize(16);
    //text(formatDegrees(temps[i]), x, y);
  }
}
