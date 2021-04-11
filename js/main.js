/*SILENT MODE*/

let silentMode = false;

document.querySelector("#silentBtn").onclick = () => {
    let silentBtn = document.querySelector("#silentBtn");
    silentBtn.classList.toggle("btn-primary", silentMode);
    silentBtn.classList.toggle("btn-success", !silentMode);

    silentMode = !silentMode;
    
    silentBtn.innerHTML = silentMode ? "Disable Silent Mode" : "Enable Silent Mode";

    document.querySelector("#silentModeMsg").classList.toggle("d-none", !silentMode);

    chrome.storage.local.set({
        silent: silentMode
    })

    chrome.runtime.sendMessage({
        type: "command",
        command: silentMode ? "silenceThee" : "thouMakeNoise"
    });
}

/*BUTTONS*/

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

/*ACTIVITY TRACKERS/TIMERS*/

chrome.storage.local.get(['stretchfreq', 'silent'], (res) => {
    document.querySelector("#maxTypeCount").innerHTML = 100*(5 - parseInt(res['stretchfreq']));
    document.querySelector("#maxMouseCount").innerHTML = 500*(5 - parseInt(res['stretchfreq']));
    let silentBtn = document.querySelector("#silentBtn");
    silentBtn.classList.toggle("btn-primary", !res['silent']);
    silentBtn.classList.toggle("btn-success", res['silent']);
    silentBtn.innerHTML = res['silent'] ? "Disable Silent Mode" : "Enable Silent Mode";
    document.querySelector("#silentModeMsg").classList.toggle("d-none", !res['silent']);
    silentMode = res['silent'];
});

chrome.runtime.onMessage.addListener(data => {
    if (data.mouseCount != undefined && data.keyCount != undefined) {
        document.querySelector("#currTypeCount").innerHTML = data.keyCount;
        document.querySelector("#currMouseCount").innerHTML = data.mouseCount;
    }
});

chrome.runtime.sendMessage({
    type: "command",
    command: "sendStats"
})

var timer = setInterval(
    function(){
        chrome.alarms.get("breakAlarm", (alarm) => {
            showTime(alarm, "breakReminderTimer");
            
        });

        chrome.alarms.get("postureAlarm", (alarm) => {
            showTime(alarm, "postureReminderTimer");
        });

        chrome.alarms.get("waterAlarm", (alarm) => {
            showTime(alarm, "waterReminderTimer");
        });
    }, 1000
);

const showTime = (alarm, id) => {
    if (!alarm) return;
    var yourDateToGo = alarm.scheduledTime;

    var currentDate = new Date().getTime(); 
    var timeLeft = yourDateToGo - currentDate;

    if (timeLeft <= 0) {
        return;
    }

    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) hours="0"+hours;
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) minutes="0"+minutes;
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    if (seconds < 10) seconds="0"+seconds;

    document.getElementById(id).innerHTML = hours + "h " + minutes + "m " + seconds + "s";
}