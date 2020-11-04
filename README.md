# NodeLifxArt-Net
## Uses [Node.js](https://nodejs.org/) to Convert [Art-Net](https://art-net.org.uk/) Data into RGB Values for [LIFX API](https://api.developer.lifx.com/)
#
### Requires:

### [Node.js](https://nodejs.org/), [lifxjs](https://www.npmjs.com/package/lifxjs), [dmxnet](https://www.npmjs.com/package/dmxnet), [Art-Net Software](https://dmxking.com/control-software), and a [LIFX Color Lightbulb](https://www.lifx.com/collections/lamps-and-pendants/products/lifx-color-a19)

#
## LIFX Setup:
- Add all LIFX Lightbulbs to 1 Account
- This also works in Multiple Locations on Different WiFi Networks
#
## Art-Net Software Setup:
- Set Art-Net Output to match the 'main.js' file or vice versa 

     *'main.j's is defaulted to* ***Universe: 0, Net: 0, Subnet: 0***
- Patch Each LIFX Lightbulb as a 3-Channel RGB Fixture
  
  *Example:*

    *Lightbulb 1 would be Address 1-3*  
    *(1) Red, (2) Green, (3) Blue*

    *Lightbulb 2 would be Address 4-6*   
    *(4) Red, (5) Green, (6) Blue*
#
## Node Installation and Setup:
- Download or Clone this repository
- Open in preferred source code editor (ex. [Visual Studio Code](https://code.visualstudio.com/download) or Terminal/Command Prompt)
  - If you use Visual Studio Code...
  - Go to "View > Command Palette..."
  -  Type "Git: Clone" [Enter]
  -  Paste the Github Clone HTTPS URL. This is the same as the URL just with ".git" added to the end (https://github.com/jshea2/NodeLifxArt-Net.git)
- Open code editor's Terminal
- Install 'lifxjs' & 'dmxnet': `npm install` (installs dependencies from 'package.json')

    (Prepend `sudo` if on Mac)
  
  or install seperately
  - `npm install lifxjs`
  - `npm install dmxnet`

- In file 'main.js' change config info..
        
 - Input your LIFX Token:
    ```javascript
    //Authenticate Lifx Token
    lifx.init({ appToken: 'ENTER TOKEN HERE' });
    ```
    To find LIFX Token:

   - Login to your [LIFX Cloud Account](https://cloud.lifx.com/settings)
   - Generate New Token
  
  - Input Your Lightbulb's Name:
    ```javascript
    //ENTER NAME OF LIGHTS HERE
    let light1name = 'Wall Light'//Example
    let light2name = ''
    let light3name = ''
    let light4name = ''
    let light5name = ''
    let light6name = ''
    let light7name = ''
    let light8name = ''
    ```
    -***Name Must Match in LIFX App!***-

  - Configure which Art-Net Universe, Net, and Subnet to recieve data on: 

    ```javascript
    //Listening for universe 0 on net 0 subnet 0
    var receiver = dmxnet.newReceiver({
    subnet: 0,
    universe: 0,
    net: 0,
    });
    ```
- If you have more than 1 Lightbulb; Un-Comment all the ones you need. This can be found in three sections:
```javascript
    // //Fixture 2
    // const bulb2 = await lights.find(function (light) {
    //   return light.label === light2name;
    // });
```
```javascript
    // fixture2 = bulb2;
```
```javascript
  // //Fixture 2
  // lifx.color.light(fixture2.id, {
  //   rgb: `${chan4},${chan5},${chan6}`
  // });
```
-***This Is Currently Only Setup for **8** Lightbulbs***-
#
## Notes:

- This Node file processes Art-Net data only every 1000ms (or 1 second) which seems to work effectively. However, you can adjust the interval:
  ```javascript
    let myInterval = setInterval(processLastRequest, 1000);
    ```
- This Node file only works with LIFX Color Bulbs
- When you first run the Node file expect an initial longer latency, because Node has to 'get' and 'find' each lightbulb's 'id'. It should be faster after that, because the 'id' values are stored from then on
- Since these lightbulbs are connected via WiFi expect a little latency. It's about the same as controlling it from the LIFX App (my experience has been 1.5 seconds)
- This has only been tested on a [LIFX Color A19](https://www.lifx.com/collections/lamps-and-pendants/products/lifx-color-a19) bulb
- The name's of each available lightbulb on the account will be logged to the console when you first run the Node file. To see this list, scroll to the top of the console. This can be used for inputting strings to '***light1name***' variables

    (This might be hard to see since Art-Net data is constantly coming into the console)
- See QLab file "QLabLifxArt-Netdemo" for a DEMO

#

For Questions, Bugs, or Feature Requests


Send me an email: joe.daniel.shea@gmail.com
