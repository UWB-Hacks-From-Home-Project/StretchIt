const alarmClock = {
    breakOnHandler : function(e) {
        chrome.storage.local.get(['breakfreq'], (res) => {
            chrome.alarms.create("breakAlarm", {
              delayInMinutes: 1/*10*(res['breakfreq'] + 1)*/,
              periodInMinutes: 10*(parseInt(res['breakfreq']) + 1)
            });
            console.log("break alarm created with length " + 10*(parseInt(res['breakfreq']) + 1) + "!")
        })
    },

    breakOffHandler : function(e) {
        chrome.alarms.clear("breakAlarm");
    },

    postureOnHandler : function(e){
        chrome.storage.local.get(['posturefreq'], (res) => {
            chrome.alarms.create("postureAlarm", {
              delayInMinutes: 1/*10*(res['posturefreq'] + 1)*/,
              periodInMinutes: 10*(parseInt(res['posturefreq']) + 1)
            });
            console.log("posture alarm created with length " + 10*(parseInt(res['posturefreq']) + 1) + "!")
        })
    },

    postureOffHandler : function(e){
        chrome.alarms.clear("postureAlarm");
    },

    waterOnHandler : function(e){
        chrome.alarms.create("waterAlarm", {
            delayInMinutes: 1,
            periodInMinutes: 30
        });
        console.log("water alarm created with length 30!")
    },

    waterOffHandler : function(e){
        chrome.alarms.clear("waterAlarm");
    },

    //it is necesary to have an html object with the id or else it doesn't work
    install: function() {
        chrome.storage.local.get(['remindtype'], (res) => {
            if (res.remindtype.includes("breaks")) alarmClock.breakOnHandler();
            if (res.remindtype.includes("posture")) alarmClock.postureOnHandler();
            if (res.remindtype.includes("water")) alarmClock.waterOnHandler();
        });
        
    },

    uninstall: () => {
        alarmClock.breakOffHandler();
        alarmClock.postureOffHandler();
        alarmClock.waterOffHandler();
    }
};



chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: "welcome.html"
    });
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if(alarm.name === "breakAlarm")
    {
        var notificationID = "breakNotif";
        var notifMessage = {
            title: 'Take a break!',
            message: 'It\'s been too long since your last break! Would you like to do some stretches?',
            contextMessage: 'From StretchIt',
            iconUrl: '/assets/logo128.png',
            type: 'basic',
            buttons: [{
                title: "Yes",
            }, {
                title: "No",
            }],
            requireInteraction: true
        };
        chrome.notifications.create(notificationID, notifMessage);
    }

    if(alarm.name === "postureAlarm")
    {
        var notificationID = "postureNotif";
        var notifMessage = {
            title: 'Keep up your posture!',
            message: 'It\'s a good time to do some posture exercises now. Have you had good posture?',
            contextMessage: 'From StretchIt',
            iconUrl: '/assets/logo128.png',
            type: 'basic',
            buttons: [{
                title: "Yes",
            }, {
                title: "No",
            }],
            requireInteraction: true
        };
        chrome.notifications.create(notificationID, notifMessage);
    }

    if(alarm.name === "waterAlarm")
    {
        var notificationID = "waterNotif";
        var notifMessage = {
            title: 'Drink Water!',
            message: 'Always remember to drink 3-4 liters of water a day!',
            contextMessage: 'From StretchIt',
            iconUrl: '/assets/logo128.png',
            type: 'basic',
            requireInteraction: true
        };
        chrome.notifications.create(notificationID, notifMessage);
    }
});



chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if(notificationId === "postureNotif")
    {
        chrome.storage.local.get(['posturefreq'], (res) => {
            let val = 5 - parseInt(res['posturefreq']);
            if(buttonIndex === 0)
            {
                val++;
            }
            else if(buttonIndex === 1)
            {
                val--;
            }
            val *= 10;
            chrome.storage.local.set(
                {
                    posturefreq: Math.max(1, Math.min(5, val))
                }, 
                () => {
                    alarmClock.uninstall();
                    alarmClock.install();
                }
            );
        });
    }
    else if (notificationId == "stretchNotif" || notificationId == "breakNotif") {
        if (buttonIndex == 0) {
            chrome.tabs.create({
                url: `stretch.html${ (notificationId == "stretchNotif") ? "" : "#desk" }`
            });
        } else {
            window.setTimeout(() => { //Remind user in 5 mins if they say remind me later
                chrome.notifications.create(
                    notificationId,
                    {
                        title: `Reminder: It's time for a ${ (notificationId == "stretchNotif") ? "stretch" : "break" }!`,
                        message: 'Would you like to do one now?',
                        iconUrl: '/assets/logo128.png',
                        type: 'basic',
                        buttons: [
                            {
                                title: "Sure"
                            },
                            {
                                title: "No, remind me later"
                            }
                        ],
                        requireInteraction: true
                    }
                );
            }, 5*60*1000);
        }
    }
});

alarmClock.install();



let limitScale = 1; //How often to send notifications

chrome.storage.local.get(['stretchfreq', 'metrics'], (res) => {
    limitScale = 5 - parseInt(res['stretchfreq']); //1-5
});


let mouseCount = 0;
let keyCount = 0;
let absMouseCount = 0;
let absKeyCount = 0;
//Handle commands/messages from content script and extension
chrome.runtime.onMessage.addListener(data => {
    console.log("Message", data);
    if (data.type == "typing") {
        keyCount += data.newCount;
        absKeyCount += data.newCount;
        if (keyCount > limitScale*100) {
            createStretchNotif(data.type);
            keyCount = 0;
        }
    } else if (data.type == "mousing") {
        mouseCount += data.newCount;
        absMouseCount += data.newCount;
        if (mouseCount > limitScale*500) {
            createStretchNotif(data.type);
            mouseCount = 0;
        }
    } else if (data.type == "command") {
        console.log("oooo a command!", data.command);
        if (data.command == "settingsUpdate") {
            alarmClock.uninstall();
            alarmClock.install();
        } else if (data.command = "sendStats") {
            chrome.runtime.sendMessage({
                mouseCount,
                keyCount
            })
        }
    }
});


const createStretchNotif = (type) => {
    chrome.notifications.create(
      "stretchNotif",
      {
          title: `You've been ${type} a lot! It's time for a stretch`,
          message: 'Would you like to do one now?',
          iconUrl: '/assets/logo128.png',
          type: 'basic',
          buttons: [
              {
                title: "Sure"
              },
              {
                title: "No, remind me later"
              }
          ],
          requireInteraction: true
      }
    );
}