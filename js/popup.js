var button = document.getElementById("notif");
button.addEventListener('click', () => {
    chrome.storage.local.get(['breakfreq'], (res) => {
        chrome.runtime.sendMessage('', {
        type: 'notification',
        options: {
            title: 'ayo',
            message: 'wassup, break frequency is ' + res['breakfreq'],
            contextMessage: 'yeah...',
            iconUrl: 'logo128.png',
            type: 'basic',
            buttons: [{
                title: "open google?",
            }, {
                title: "sorry!",
            }]
            }
        });
    });
});
