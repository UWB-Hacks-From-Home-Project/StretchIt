document.querySelector("#silentBtn").onclick = () => {
    chrome.runtime.sendMessage({
        type: "command",
        command: "silent"
    });
}

document.querySelector("#settingsBtn").onclick = () => {
    chrome.tabs.create({
        url: "options.html"
    })
}

document.querySelector("#stretches1Btn").onclick = () => {
    chrome.tabs.create({
        url: "stretch.html"
    })
}

document.querySelector("#stretches2Btn").onclick = () => {
    chrome.tabs.create({
        url: "stretch.html#desk"
    })
}

chrome.storage.local.get(['stretchfreq'], (res) => {
    document.querySelector("#maxTypeCount").innerHTML = 100*(5 - parseInt(res['stretchfreq']));
    document.querySelector("#maxMouseCount").innerHTML = 500*(5 - parseInt(res['stretchfreq']));
});

chrome.runtime.onMessage.addListener(data => {
    if (data.absMouseCount != undefined && data.absKeyCount != undefined) {
        document.querySelector("#currTypeCount").innerHTML = data.absKeyCount;
        document.querySelector("#currMouseCount").innerHTML = data.absMouseCount;
    }
});

chrome.runtime.sendMessage({
    type: "command",
    command: "sendStats"
})
