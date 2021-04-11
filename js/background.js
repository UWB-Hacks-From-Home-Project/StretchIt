chrome.runtime.onInstalled.addListener((type) => {
  if (type.reason == "install") {
    chrome.tabs.create({
      url: "welcome.html"
    });
  }
});

chrome.runtime.onMessage.addListener((data) => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options);
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.notifications.create('', {
    title: 'ayo',
    message: 'wassup',
    iconUrl: 'logo128.png',
    type: 'basic'
  });
});


/*
//Test notification - persistent and with buttons
let notif = chrome.notifications.create(
    "",
    {
        title: 'Keep up that posture!',
        message: 'Were you keeping good posture?',
        iconUrl: 'logo128.png',
        type: 'basic',
        buttons: [
            {title: "Yes"}, {title: "No"}
        ],
        requireInteraction: true
    }
)

chrome.notifications.onButtonClicked.addListener((id, btn) => {
    console.log(id, btn);
    alert(btn);
});*/

