//break alarm
var timing = setInterval(
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

            document.getElementById("breakReminderTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

            if (timeLeft <= 0) {
                clearInterval(timing);
                document.getElementById("countdown").innerHTML = "It's over";
            }
        });
    }, 1000
);