var button = document.getElementById("notif");
button.addEventListener('click', () => {
    chrome.runtime.sendMessage('', {
      type: 'notification',
      options: {
        title: 'ayo',
        message: 'wassup',
        iconUrl: 'logo128.png',
        type: 'basic'
        }
    });
});
