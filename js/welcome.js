document.querySelector("#settingsBtn").onclick = () => {
    chrome.tabs.create({
        url: 'options.html'
    });
    chrome.tabs.getCurrent(tab => {
        chrome.tabs.remove(tab.id, () => {});
    })
}