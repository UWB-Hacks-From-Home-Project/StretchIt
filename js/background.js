

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
            message: 'It\'s been too long since your last break!',
            contextMessage: 'From StretchIt',
            iconUrl: 'logo128.png',
            type: 'basic'
        };
        chrome.notifications.create(notificationID, notifMessage);
    }

    if(alarm.name === "postureAlarm")
    {
        var notificationID = "postureNotif";
        var notifMessage = {
            title: 'Fix your posture!',
            message: 'It\'s a good time to do some posture exercises now. Have you had good posture?',
            contextMessage: 'From StretchIt',
            iconUrl: 'logo128.png',
            type: 'basic',
            buttons: [{
                title: "Yes",
            }, {
                title: "No",
            }]
        };
        chrome.notifications.create(notificationID, notifMessage);
    }
});

chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
      chrome.notifications.create('testNotif', data.options)
    }
  });

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if(notificationId === "testNotif")
    {
        if(buttonIndex === 0)
        {
            window.open("https://www.google.com");
        }
        else if(buttonIndex === 1)
        {
            alert("sorry!");
        }
    }

    if(notificationId === "postureNotif")
    {
        if(buttonIndex === 0)
        {
            chrome.storage.local.get(['posturefreq'], (res) => {
                chrome.local.storage.set(
                    {posturefreq: (parseInt(res['posturefreq']) + parseInt(1))}, 
                    () => alert((parseInt(res['posturefreq']) + parseInt(1)))
                )
            });
        }
        else if(buttonIndex === 1)
        {
            chrome.storage.local.get(['posturefreq'], (res) => {
                chrome.local.storage.set(
                    {posturefreq: (parseInt(res['posturefreq']) - parseInt(1))}, 
                    () => alert((parseInt(res['posturefreq']) - parseInt(1)))
                )
            });
        }
    }
});