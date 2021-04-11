## Inspiration
Since the start of the COVID pandemic last year, we all noticed that we were spending more and more time behind our computers and working online. In addition, many of us had begun to experience strain-related injuries as well as unhealthy computer usage habits (such as, for example, 6 hours working on a hackathon project without a single break). Because of this, we decided to make _StretchIt_, a Chrome Extension to monitor browser usage and send reminders to take breaks, drink water, and do stretches.

## What it does
In essence, _StretchIt_ runs in the background, monitoring attributes that the user can select in settings. These include whether or not typing/mousing should be tracked and if the user would like break reminders, posture reminders, water break reminders, or a combination of those three. Finally, the approximate timings between each reminder are also configurable and are set to default to what we determined to be healthy amounts after research. In addition to this, most of the notifications have interactions, such as the option to delay a break for 5 minutes, open up the StretchIt pages of stretches with animations, or even to dynamically adjust the time between notifications. Finally, there is a feature to enable silent mode so that the user can temporarily disable notifications.

## How we built it
This project is a Chrome Extension, using Google Chrome's Extension API and Manifest 2.0 as a backend. We used the notifications/alarms API to tie system-level notifications to the extension and fire notifications based on a customizable timer system, which suggests breaks and exercises based on recommended breaks. We utilized Chrome's local storage to save settings and other useful information, such as time logged on the Chrome browser, amount of keystrokes typed, etc. For that, we used a content script and key press monitor to count the number of keystrokes and mouse movements and send notifications based on those metrics, if the user selects to monitor that option in settings.

We used Bootstrap to design the front-end and other pages as well a few icons using FontAwesome. Our team used Adobe Illustrator to design the logo and other graphical components of the extension, and Harmony 20 to animate and illustrate content such as the informational guides for the stretch poses.

## Challenges we ran into
Some of the many challenges we ran into while designing, coding, and testing StretchIt were:
-  Most of the team members had never built a Chrome extension before, and the one who had was used to an older version with far less API features.
-  Debugging was difficult in comparison to other kinds of web development, as for the project you can have at least three consoles open for each of the pages (main page where the content script is injected, the background script which runs like a service worker, and finally the pop up script which runs when you open the extension).
-  In addition to the above with debugging, writing code to interface between all of these scripts proved challenging, especially given the unusual method the Chrome API uses for handling asynchronous requests
We encountered many more challenges to the ones above, but those were a few of the major ones.

## Accomplishments that we're proud of
Overall, we're really proud of the interface and usability of the extension. We all feel that this extension will be really useful, and we're using it already. Such as, in writing this description, I received a well-needed notification to take a break as I had been typing a lot.

![Typing notfication](https://i.imgur.com/0GcqxDD.png)

_Thank you, StretchIt_

## What we learned
Most of the members were new to building Chrome Extensions and had to learn on the go. In addition, the team member who had built extensions previously had not developed with some of the newer Chrome API features. We all now feel pretty well experienced in extension development and plan on building more in the future.

## What's next for StretchIt
Firstly, we're planning on uploading the extension to the Google Chrome Web Store so that others can start using it without needing to download the unpacked extension. Also, in future, we're planning on adding more smart functionality to the extension. We really want this extension to be useful to real-world users, so we plan on continuing to work on the project after this hackathon. A few main feature ideas we had while developing the app but didn't have a chance to implement were: using ML to adjust the timing of the breaks to be more natural, adding a feature for the user to be able to program in breaks they take automatically or take breaks in advance as well as triggering more options from interactions with the notifications.