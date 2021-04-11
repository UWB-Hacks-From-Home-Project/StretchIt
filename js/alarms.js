var alarmClock = {

    onHandler : function(e) {
        chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2} );
    },

    offHandler : function(e) {
        chrome.alarms.clear("myAlarm");
    },

    //it is necesary to have an html object with the id or else it doesn't work
    setup: function() {
        /*var button = document.getElementById('alarmOn');
        button.addEventListener('click',  alarmClock.onHandler);
        var button = document.getElementById('alarmOff');
        button.addEventListener('click',  alarmClock.offHandler);*/
    }
};

document.addEventListener('DOMContentLoaded', function () {
    alarmClock.setup();
}); 

