const showMsg = (htmlMsg, blockId, type) => {
    let msgBlock = document.querySelector(`#${blockId}`);
    console.log(msgBlock)
    if (!msgBlock) return;
    msgBlock.classList = [`text-${type}`];
    msgBlock.innerHTML = htmlMsg;
}


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

    chrome.storage.local.set({
        posturefreq: data.get("posturefreq"),
        breakfreq: data.get("breakfreq"),
        stretchfreq: data.get("stretchfreq"),
        metrics: data.getAll("metrics"),
        remindtype: data.getAll("remindtype"),
        notificationlevel: data.getAll("notificationlevel")
     }, () => {
        showMsg("Successfully stored new settings!", "resMsg", "success");
     });
}