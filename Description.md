## Inspiration
After we were locked down as a result of the COVID pandemic last year, each of us noticed we were spending excessive amounts of time behind our computers working digitally. That caused many of us to experience strain-related injuries as well as unhealthy computer usage habits (e.g. working 6 hours on a hackathon project without any breaks). To help resolve this, we decided to make _StretchIt_, a Chrome extension which monitors browser usage and sends reminders to take breaks, drink water, and do stretches.

## What it does
_StretchIt_ is a background application which monitors a set of attributes that the user can select in the settings page. These include whether or not typing and mousing can be tracked, and whether the user would like break reminders, posture reminders, or a combination of those three. Those reminders also come with stretch suggestions to ensure good posture and prevent carpal tunnel, with animated instructions that guide the user with clear and simple directions. The approximate timings between each reminder are also configurable and default to what we’ve determined to be healthy lengths after research. In addition, many of the notifications are interactive and include options such as the ability to delay a break for 5 minutes, open up the stretch exercise pages, or even dynamically adjust the time between notifications based on how the user feels. After QA, we also decided to include a silent mode which enables the user to disable notifications.

## How we built it
This project is a Chrome Extension, using Google Chrome's Extension API and Manifest 2.0 as a backend. We used the notifications/alarms API to tie system-level notifications to the extension and fire notifications based on a customizable timer system, which suggests breaks and exercises based on recommended breaks. We utilized Chrome's local storage to save settings and other useful information, such as time logged on the Chrome browser, amount of keystrokes typed, etc. For that, we used a content script and key press monitor to count the number of keystrokes and mouse movements and send notifications based on those metrics, if the user selects to monitor that option in settings.
We used Bootstrap to design the front-end and other pages as well a few icons using FontAwesome. Our team used Adobe Illustrator to design the logo and other graphical components of the extension, and Harmony 20 to animate and illustrate content such as the informational guides for the stretch poses.

## Challenges we ran into
We ran into many challenges while designing, coding, and testing StretchIt and we’re very proud to have overcome them. Some issues include:
-  Most of the team members had never built a Chrome extension before, and the one who had was used to an older version with far less API features.
-  Chrome’s extension system does not support in-IDE testing, which made debugging much more difficult compared to most programs. For example, debugging the extension requires at least three different Chrome consoles open to monitor different JavaScript pages – one to monitor the main page where the content script is injected, one for the background script which acts as a service worker, and a final one for the popup script which runs while the extension is open.
-  In addition to the above with debugging, writing code to interface between all of these scripts proved challenging, especially given the unusual method the Chrome API uses for handling asynchronous requests.
We encountered many more challenges to the ones above, but those were a few of the major ones.

## Accomplishments that we're proud of
We’re very proud of the interface and usability of the extension. The relative simplicity of the user interface hides just how much utility we packed into this extension. We know that _StretchIt_ will see lots of use in our daily lives. For example, I just received a well needed notification to stop typing!

![Typing notification](https://i.imgur.com/0GcqxDD.png)

_Thank you, StretchIt!_

## What we learned
All but one of our members were completely new to Chrome’s Extension API and learned it on the fly, and the experienced member had to re-learn much of it, as Google had recently updated the extension system with new features. All of us feel experienced in regards to extension development, and feel like we understand Google’s extension ecosystem better. We also substantially increased our knowledge on application design and user interface/user experience optimization. Even though some of our front-end developers had created more complicated projects before, none had ever built a project as cohesive as ours as quickly. Many of us also learned a lot about the workflow of project development. Although many of us had used git before, we mostly used it as a version tracker rather than as a collaboration tool. This hackathon helped us unlock git’s powerful collaboration features.

## What's next for StretchIt
We fully intend on publishing the extension to the Google Chrome Web Store and getting it certified by Google so others can use our extension directly. To help convince Google that our extension would add to the Web Store ecosystem, we will add machine-learning based smart functionality to the extension that dynamically changes the times between breaks and staggers them to make sure the user feels the extension understands their workflow. Another idea that would improve the extension would be to allow the user to program in breaks that they would automatically take – for example a lunch break or bathroom break – or to take breaks in advance as to ensure the best user experience. We’re confident this will ensure that our extension is used in the future.
