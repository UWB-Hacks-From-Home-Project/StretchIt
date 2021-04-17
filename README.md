<p align="center">
    <img src="https://github.com/UWB-Hacks-From-Home-Project/StretchIt/blob/fb6015c5b14907941ac46cac9bb7f49a40c9870a/assets/logo%20without%20background.png">
</p>

[![GitHub issues](https://img.shields.io/github/issues/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/issues) [![GitHub forks](https://img.shields.io/github/forks/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/network) [![GitHub stars](https://img.shields.io/github/stars/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/stargazers) [![GitHub license](https://img.shields.io/github/license/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/blob/main/COPYING) 


StrechIt is a Chrome Extension designed to help users who do long or frequent computer sessions to correct their posture and prevent back pain, carpal tunnel, and strain injuries.

This project is being submitted for the UWB Hacks from Home 2021: Health Track.

## Goal
Our goal with this project is to help prevent back and carpal tunnel pain, which was greatly increased by the pandemic need to study/work at home. We achieved this by creating StrechIt, a Chrome Extension that can remind and teach users how to be healthier during long computer sessions. 

## User Experience
After installing the extension the user is prompted to a welcome page, where they have the option to configure their settings. There there will be sliders where the user can configure how often, what type, and how their reminders should be received. The program than runs on the background, with the capabilities of reminding users to take a break, do a strech routine (with ilustrative animation) or correct their posture.

## Implementation Details
This project is a Chrome extension, using Google Chrome's Extension API and Manifest 2.0 as a backend. We used the notifications/alarms API to tie system-level notifications to the extension and fire notifications based on a customizable timer system which suggests breaks and exercises based on recommended breaks. We utilized Chrome's local storage to save settings and other useful information, such as time logged on the Chrome browser, amount of keystrokes typed, etc. For that, we used a content script and key press monitor to count the number of keystrokes and mouse movements and send notifications based on those metrics, if the user selects to monitor that option in settings. 

We used Bootstrap to design the front-end and other pages as well a few icons using FontAwesome. Our team used Adobe Illustrator to design the logo and other graphical components of the extension, and Harmony 20 to animate and illustrate content such as the informational guides for the stretch poses. 

## Bugs
Fixed bugs
- Timers going into the negative
- inversed sliders(meaning often = not often and not often = often etc.)
- Typing metric not working fully

## Future Work To Be Done
- Publish the extension to the Google Chrome Web Store and getting it certified by Google - done!
- Add machine-learning based smart functionality to the extension that dynamically changes the times between breaks and staggers them to make sure the user feels the extension understands their workflow. 
- Allow the user to program in breaks that they would automatically take – for example a lunch break or bathroom break – or to take breaks in advance as to ensure the best user experience. 

## Authors and acknowledgment
Back-end done by [Alex Mous](https://github.com/alex-mous), [Vincent Xiao](https://github.com/vvv317) and [Christian Estrella](https://github.com/lil206chris)

Front-end done by [Alex Mous](https://github.com/alex-mous) and [Pedro Amarante](https://github.com/pedrodeoliamarante) 

## Support/Contributions
The easiest way to contact us about problems or contributions is through Discord. DM us at vvv317#1640 or Amarante#3384.

## Installation
StretchIt has been added to the Chrome Web Store! You can get it [here](https://chrome.google.com/webstore/detail/stretchit/pkcjhigdfegkdliiflopbpchpgmpackh).

### Manual Installation
However, if you want to install StretchIt manually, we've included steps below:

1. Download this project and unzip the folder


2. Open up chrome and go to manage extensions (chrome://extensions/)
<p>
    <img src="https://github.com/UWB-Hacks-From-Home-Project/StretchIt/blob/main/assets/readme_images/setup1.png">
</p>

3. Navigate to the extracted file and highlight it. Then hit "Select Folder"
<p>
    <img src="https://github.com/UWB-Hacks-From-Home-Project/StretchIt/blob/main/assets/readme_images/setup2.png">
</p>

4. Now it is installed! Configure your settings and StretchIt!
<p>
    <img src="https://github.com/UWB-Hacks-From-Home-Project/StretchIt/blob/main/assets/readme_images/welcomescreen.png">
</p>

## License 

All assets and code are under the [GNU General Public License v3.0](https://github.com/UWB-Hacks-From-Home-Project/Project/blob/main/COPYING) and in the public domain unless specified otherwise.

The assets, logos and animations are trademarks of their respective owners and are under their terms and license.
