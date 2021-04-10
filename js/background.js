chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({
    url: "welcome.html"
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.notifications.create('', {
    title: 'ayo',
    message: 'wassup',
    contextMessage: 'yeaaa',
    iconUrl: 'logo128.png',
    type: 'basic'
  });
});


chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
      chrome.notifications.create('', data.options), (id) => {testNotificationID = id;};
    }
  });

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if(buttonIndex === 0)
    {
        window.open("https://www.google.com");
    }
    else if(buttonIndex === 1)
    {
        alert("sorry!");
    }
});