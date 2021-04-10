let opts = ['posturefreq', 'breakfreq', 'stretchfreq', 'metrics', 'remindtype', 'notificationlevel']
console.log("hi")
chrome.storage.local.get(opts, (res) => {
    for (let opt in res) {
        if (typeof res[opt] == "object") {
            document.querySelectorAll(`input[name="${opt}"]`).forEach(ele => {
                ele.checked = false;
            });
            for (let val of res[opt]) {
                console.log(opt, val);
                document.querySelector(`input[name="${opt}"][value="${val}"]`).checked = true;
            }
        } else {
            document.querySelector(`input[name="${opt}"]`).value = res[opt];
        }
    }
});

document.querySelector("#settingsForm").onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);
    console.log(data.getAll("remindtype"))
    chrome.storage.local.set({
        remindtype: data.getAll("remindtype"),
        posturefreq: data.get("posturefreq")
    }, () => {
        
    })
}