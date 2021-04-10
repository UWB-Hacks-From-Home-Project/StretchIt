chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: "welcome.html"
    });
});