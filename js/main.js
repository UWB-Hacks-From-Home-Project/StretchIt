//Update UI/
/*chrome.runtime.onMessage.addListener((msg) => { //Listen for messages and set the data accordingly
    console.log(msg);
    if (msg.type == "key") {
        console.log("typing",  msg.value);
    } else if (msg.type == "mouse") {
        console.log("mouse", msg.value);
    }
});

chrome.tabs.query({ //Request typing count and others
    active: true,
    currentWindow: true
}, (tabs) => {
    if (!tabs.length) return;
    chrome.tabs.sendMessage(tabs[0].id, "");
});
*/

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