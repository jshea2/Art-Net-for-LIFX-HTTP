# Art-Net for LIFX-HTTP
### Standalone App that Converts [Art-Net](https://art-net.org.uk/) Data into RGB Values for [LIFX API](https://api.developer.lifx.com/)
#

<img width="175" alt="Screen Shot 2021-02-28 at 1 53 01 AM" src="https://user-images.githubusercontent.com/70780576/111094889-73d51680-84f9-11eb-9572-a4bf1b4c5e61.png">

## [Download Now](https://github.com/jshea2/Art-Net-for-LIFX/releases)
Doing Virtual Zoom Productions? 
Control LIFX Bulbs anywhere in the world from your lighting console/software 
(*Converts Art-Net data into LIFX API commands*)

Requires: Any [LIFX Color Bulb](https://www.lifx.com/pages/lightbulbs) & Any [Art-Net Software](http://dmxking.com/m/support/13-control-software/80-artnet-sacn-software)
## Setting Up Physical LIFX Bulbs
 - Install LIFX Bulbs and Connect to WIFI (Only works on 2.4Ghz, not 5G)
   - If you're having trouble connecting refer to [LIFX Troubleshooting Website](https://support.lifx.com/hc/en-us/categories/200238164-Set-Up-Troubleshooting)
 - All LIFX Lightbulbs must be connected to the **SAME** Account
    - This also works in Multiple Locations on Different WiFi Networks (Remote Lighting Control for Theatre 😉)
## Setting Up *'Art-Net for LIFX-HTTP' App*'

<img width="317" alt="Screen Shot 2021-02-28 at 1 53 01 AM" src="https://user-images.githubusercontent.com/70780576/109415191-11faa580-796c-11eb-885a-1f18b6b8ed5d.png">



   - Input Your LIFX Account's "Access Token"
      - Login to your [LIFX Cloud Account](https://cloud.lifx.com/settings)
      - Generate New Token
- Click "Connect LIFX" button
   - This will open the "DevTools" window and if connected will log all available scenes on the account.
   - If you do not see this make sure it's on the **"Console"** tab, not "Elements"
   - You'll also notice a drop-down list of all available LIFX bulbs 
- Now to "Patch" these bulbs to our Art-Net universe
   - Select LIFX bulb from drop-down list and input starting "Address"
   - Click "Patch/Add LIFX Bulb" button
   - This will patch and also log below
      - You can also patch **more than one** bulb to the **same** address for grouping multiple LIFX bulbs to one patched fixture in your lighting software
- Input your Art-Net's "Subnet, Universe, and Net" ([0, 0, 0] is usually the default)
- Click "Start" and send some Art-Net!
   - The "Latency" Slider is for adjusting how fast it sends to the LIFX API, If you set it too low be aware LIFX commands might start freezing.
## Patching External Art-Net Software
- ETC Nomad & QLab Settings Example:
<img width="400" alt="Screen Shot 2021-01-29 at 11 37 29 PM" src="https://user-images.githubusercontent.com/70780576/106350597-33904080-628b-11eb-9760-5746e11c9f48.png">

<img width="400" alt="Screen Shot 2021-01-29 at 11 36 50 PM" src="https://user-images.githubusercontent.com/70780576/106350632-6c301a00-628b-11eb-8a9e-66f25e18bc37.png">
 
- Each LIFX Bulb is set up to be a 3-channel fixture (Red, Green, Blue)
   - You can use generic 3-channel RGB profiles to patch
   - *Fun Fact:* The Free version of QLab lets you do 16-channels, so you can control 5 LIFX fixtures separately

## Notes:
- Current workaround for "Clearing Patch" is to go to "View>Reload". This will reset everything, including re-inputting your Access Token.
- Other features not available, but currently in the works:
   - Deleting "Patched" Bulbs

## Support:
Join the Discord server Community: 

<a href="https://discord.gg/FJ79AKPgSk">
        <img src="https://img.shields.io/discord/308323056592486420?logo=discord"
            alt="chat on Discord"></a>

## [Download "Art-Net for LIFX-HTTP" Now](https://github.com/jshea2/Art-Net-for-LIFX/releases)
