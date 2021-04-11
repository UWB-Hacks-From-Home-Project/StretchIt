var alarmClock = {
    breakOnHandler : function(e) {
        chrome.storage.local.get(['breakfreq'], (res) => {
            chrome.alarms.create("breakAlarm", {delayInMinutes: 0/*(parseInt(res['breakfreq']) + parseInt(1))*/, periodInMinutes: (parseInt(res['breakfreq']) + parseInt(1))}), 
            alert("break alarm created with length " + (parseInt(res['breakfreq']) + parseInt(1)) + "!")
        })
    },

    breakOffHandler : function(e) {
        chrome.alarms.clear("breakAlarm");
    },

    postureOnHandler : function(e){
        chrome.storage.local.get(['posturefreq'], (res) => {
            chrome.alarms.create("postureAlarm", {delayInMinutes: 0/*(parseInt(res['posturefreq']) + parseInt(1))*/, periodInMinutes: (parseInt(res['posturefreq']) + parseInt(1))}), 
            alert("posture alarm created with length " + (parseInt(res['posturefreq']) + parseInt(1)) + "!")
        })
    },

    postureOffHandler : function(e){
        chrome.alarms.clear("postureAlarm");
    },

    //it is necesary to have an html object with the id or else it doesn't work
    setup: function() {
        var button = document.getElementById('breakAlarmOn');
        button.addEventListener('click',  alarmClock.breakOnHandler);
        var button = document.getElementById('breakAlarmOff');
        button.addEventListener('click',  alarmClock.breakOffHandler);
        var button = document.getElementById('postureAlarmOn');
        button.addEventListener('click',  alarmClock.postureOnHandler);
        var button = document.getElementById('postureAlarmOff');
        button.addEventListener('click',  alarmClock.postureOffHandler);
    }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
}); 

