chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
      chrome.notifications.create('', data.options);
    }
  });
  
chrome.alarms.onAlarm.addListener(function(alarm) {
    chrome.notifications.create('', {
        title: 'ayo',
        message: 'wassup',
        iconUrl: 'logo128.png',
        type: 'basic'
        });
});