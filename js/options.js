/*OPTIONS SAVING, ETC*/

const showMsg = (htmlMsg, blockId, type) => {
    let msgBlock = document.querySelector(`#${blockId}`);
    if (!msgBlock) return;
    msgBlock.classList = [`text-${type}`];
    msgBlock.innerHTML = htmlMsg;
}


let opts = ['posturefreq', 'breakfreq', 'stretchfreq', 'metrics', 'remindtype']
chrome.storage.local.get(opts, (res) => {
    for (let opt in res) {
        if (typeof res[opt] == "object") {
            document.querySelectorAll(`input[name="${opt}"]`).forEach(ele => {
                ele.checked = false;
            });
            for (let val of res[opt]) {
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
        remindtype: data.getAll("remindtype")
    }, () => {
        showMsg("<b>Successfully stored new settings!</b> You can now exit out of this page.", "resMsg", "success");
    });

    chrome.runtime.sendMessage({
        type: "command",
        command: "settingsUpdate"
    })
}