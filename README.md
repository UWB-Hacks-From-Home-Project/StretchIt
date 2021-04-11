<p align="center">
    <img src="https://github.com/UWB-Hacks-From-Home-Project/StretchIt/blob/2bfb729ae8dcc101f7c8d9de202ec62b01383b12/assets/logo256%20without%20background.png">
</p>

[![GitHub issues](https://img.shields.io/github/issues/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/issues) [![GitHub forks](https://img.shields.io/github/forks/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/network) [![GitHub stars](https://img.shields.io/github/stars/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/stargazers) [![GitHub license](https://img.shields.io/github/license/UWB-Hacks-From-Home-Project/Project)](https://github.com/UWB-Hacks-From-Home-Project/Project/blob/main/COPYING) 


StrechIt is a Chrome Extension designed to help users that do long computer seesions correct their posture and prevent back and carpal tunnel pain. 

## Goal
Our goal with this project is to help prevent back and carpall tunnel pain, which was greatly incresead by the pandemic need to study/work at home. We achieved this by creating StrechIt, a Chrome Extension that can remind and teach users how to be healthier during long computer seesions. 

## User Experience
After installing the extension the user is prompted to a welcome page, where they have the option to configure their settings. There there will be sliders where the user can configure how often, what type, and how their reminders should be recieved. The program than runs on the background, whith the capabilities of reminding users to take a break, do a strech routine (with ilustrative animation) or correct their posture.

## Implementation Details
This project is a Chrome extension, using Google Chrome's Extension API and Manifest 2.0 as a backend. We used the notifications/alarms API to tie system-level notifications to the extension and fire notifications based on a customizible timer system which suggests breaks and excercises based on medically sound information. We utilized Chrome's local storage to save settings and other useful information, such as time logged on the Chrome browser, amount of keystrokes typed, etc. For that, we used a content script and key press monitor to count the number of keystrokes and mouse movements and send notifications based on those metrics, if the user selects to monitor that option in settings. 

We used Bootstrap to design the front-end and other pages as well a few icons using FontAwesome. Our team used Adobe Illustrator to design the logo and other graphical components of the extension, and Harmony 20 to animate and illustrate content such as the informational guides for the stretch poses. 

## Issues encountered

## Bugs

## Future Work To Be Done

## Authors and acknowledgment
Back-end done by [Alex Mous](https://github.com/alex-mous), [Vincent Xiao](https://github.com/vvv317) and [Christian Estrella](https://github.com/lil206chris)

Front-end done by [Alex Mous](https://github.com/alex-mous) and [Pedro Amarante](https://github.com/pedrodeoliamarante) 

## Support
For support, you can contact us though discord by direct messanging Amarante#3384 on Discord.

## Contributing

If you wish to contribute to the project please contact Amarante#3384 on Discord.

## License 

All assets and code are under the [GNU General Public License v3.0](https://github.com/UWB-Hacks-From-Home-Project/Project/blob/main/COPYING) and in the public domain unless specified otherwise.

The assets, logos and animations are trademarks of their respective owners and are under their terms and license.
