//LifxArt-Net
//by Joe Shea & Marcus Pasell

//Load 'lifxjs' as Library
const Lifx = require('lifxjs');
// Load 'dmxnet' as libary
var dmxlib = require('dmxnet');

// Create New 'dmxnet' instance
var dmxnet = new dmxlib.dmxnet({});
//Create a New Receiver Instance
//Listening for universe 0 on net 0 subnet 0
var receiver = dmxnet.newReceiver({
  subnet: 0,
  universe: 0,
  net: 0,
});

//Create new lifx instance
const lifx = new Lifx();
//Authenticate Lifx Token
lifx.init({ appToken: 'ENTER TOKEN HERE' });

//ENTER NAME OF LIGHTS HERE
let light1name = 'Wall Light'//Example
let light2name = ''
let light3name = ''
let light4name = ''
let light5name = ''
let light6name = ''
let light7name = ''
let light8name = ''

//Initialize variables
let lastRequest;
let fixture1;
let fixture2;
let fixture3;
let fixture4;
let fixture5;
let fixture6;
let fixture7;
let fixture8;


// Recieve Art-Net (DMX) Data
receiver.on('data', async (data) => {
  lastRequest = data;
});

async function processLastRequest() {
  if (!lastRequest) {
    return;
  }
  const data = lastRequest;
  lastRequest = null;
  if (!fixture1) {
    //Get All Lights
    const lights = await lifx.get.all();
    lights.forEach(i => console.log(i.label))

    //Find the Light (UN-COMMENT TO ADD MORE LIGHTS)
    //Fixture 1
    const bulb1 = await lights.find(function (light) {
      return light.label === light1name;
    });
    // //Fixture 2
    // const bulb2 = await lights.find(function (light) {
    //   return light.label === light2name;
    // });
    // //Fixture 3
    // const bulb3 = await lights.find(function (light) {
    //   return light.label === light3name;
    // });
    // //Fixture 4
    // const bulb4 = await lights.find(function (light) {
    //   return light.label === light4name;
    // });
    // //Fixture 5
    // const bulb5 = await lights.find(function (light) {
    //   return light.label === light5name;
    // });
    // //Fixture 6
    // const bulb6 = await lights.find(function (light) {
    //   return light.label === light6name;
    // });
    // //Fixture 7
    // const bulb7 = await lights.find(function (light) {
    //   return light.label === light7name;
    // });
    // //Fixture 8
    // const bulb8 = await lights.find(function (light) {
    //   return light.label === light8name;
    // });

    //UN-COMMENT TO ADD MORE LIGHTS
    fixture1 = bulb1;
    // fixture2 = bulb2;
    // fixture3 = bulb3;
    // fixture4 = bulb4;
    // fixture5 = bulb5;
    // fixture6 = bulb6;
    // fixture7 = bulb7;
    // fixture8 = bulb8;
  }
  //Fixture 1
  var chan1 = data[0]
  var chan2 = data[1]
  var chan3 = data[2]
  //Fixture 2
  var chan4 = data[3]
  var chan5 = data[4]
  var chan6 = data[5]
  //Fixture 3
  var chan7 = data[6]
  var chan8 = data[7]
  var chan9 = data[8]
  //Fixture 4
  var chan10 = data[9]
  var chan11 = data[10]
  var chan12 = data[11]
  //Fixture 5
  var chan13 = data[12]
  var chan14 = data[13]
  var chan15 = data[14]
  //Fixture 6
  var chan16 = data[15]
  var chan17 = data[16]
  var chan18 = data[17]
  //Fixture 7
  var chan19 = data[18]
  var chan20 = data[19]
  var chan21 = data[20]
  //Fixture 8
  var chan22 = data[21]
  var chan23 = data[22]
  var chan24 = data[23]

  //Change RGB Values (UN-COMMENT TO ADD MORE LIGHTS)
  //Fixture 1
  lifx.color.light(fixture1.id, {
    rgb: `${chan1},${chan2},${chan3}`
  });
  // //Fixture 2
  // lifx.color.light(fixture2.id, {
  //   rgb: `${chan4},${chan5},${chan6}`
  // });
  // //Fixture 3
  // await lifx.color.light(fixture3.id, {
  //   rgb: `${chan7},${chan8},${chan9}`
  // });
  // //Fixture 4
  // await lifx.color.light(fixture4.id, {
  //   rgb: `${chan10},${chan11},${chan12}`
  // });
  // //Fixture 5
  // await lifx.color.light(fixture5.id, {
  //   rgb: `${chan13},${chan14},${chan15}`
  // });
  // //Fixture 6
  // await lifx.color.light(fixture6.id, {
  //   rgb: `${chan16},${chan17},${chan18}`
  // });
  // //Fixture 7
  // await lifx.color.light(fixture7.id, {
  //   rgb: `${chan19},${chan20},${chan21}`
  // });
  // //Fixture 8
  // await lifx.color.light(fixture8.id, {
  //   rgb: `${chan22},${chan23},${chan24}`
  // });
  //console.log('DMX data:', data); // eslint-disable-line no-console
  console.log(data)
}

function resetRequestInterval(intervalMs) {
  clearInterval(myInterval);
  myInterval = setInterval(processLastRequest, intervalMs);
}

let myInterval = setInterval(processLastRequest, 1000);
// setTimeout(() => { resetRequestInterval(10000); }, 10000);
