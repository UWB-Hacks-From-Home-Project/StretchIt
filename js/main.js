
chrome.runtime.onMessage.addListener((msg) => { //Listen for messages and set the data accordingly
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




//Stretch reminders
let type = "typing"; //mousing
let notif = chrome.notifications.create(
    "stretchNotif",
    {
        title: `You've been ${type} a lot! It's time for a stretch`,
        message: 'Would you like to do one now?',
        iconUrl: 'logo128.png',
        type: 'basic',
        buttons: [
            {title: "Sure"}, {title: "No, remind me later"}
        ],
        requireInteraction: true
    }
)

chrome.notifications.onButtonClicked.addListener((id, btn) => {
    if (id == "stretchNotif") {
        if (btn == 0) {
            chrome.tabs.create({
                url: "stretch.html"
            });
        } else {

        }
    }
});