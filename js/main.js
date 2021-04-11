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

//alarm
var timer = setInterval(
    function(){
        chrome.alarms.get("breakAlarm", (alarm) => {
            var yourDateToGo = alarm.scheduledTime;

            var currentDate = new Date().getTime(); 
            var timeLeft = yourDateToGo - currentDate;

            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10) hours="0"+hours;
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            if (minutes < 10) minutes="0"+minutes;
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (seconds < 10) seconds="0"+seconds;

            document.getElementById("breakReminderTimer").innerHTML = hours + "h " + minutes + "m " + seconds + "s";

            if (timeLeft <= 0) {
            clearInterval(timing);
            document.getElementById("countdown").innerHTML = "It's over";
            }
        });

        chrome.alarms.get("postureAlarm", (alarm) => {
            var yourDateToGo = alarm.scheduledTime;

            var currentDate = new Date().getTime(); 
            var timeLeft = yourDateToGo - currentDate;

            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10) hours="0"+hours;
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            if (minutes < 10) minutes="0"+minutes;
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (seconds < 10) seconds="0"+seconds;

            document.getElementById("postureReminderTimer").innerHTML = hours + "h " + minutes + "m " + seconds + "s";

            if (timeLeft <= 0) {
            clearInterval(timing);
            document.getElementById("countdown").innerHTML = "It's over";
            }
        });

        chrome.alarms.get("waterAlarm", (alarm) => {
            var yourDateToGo = alarm.scheduledTime;

            var currentDate = new Date().getTime(); 
            var timeLeft = yourDateToGo - currentDate;

            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours < 10) hours="0"+hours;
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            if (minutes < 10) minutes="0"+minutes;
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (seconds < 10) seconds="0"+seconds;

            document.getElementById("waterReminderTimer").innerHTML = hours + "h " + minutes + "m " + seconds + "s";

            if (timeLeft <= 0) {
            clearInterval(timing);
            document.getElementById("countdown").innerHTML = "It's over";
            }
        });
    }, 1000
);