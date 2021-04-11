let limitScale = 1; //How often to send notifications

chrome.storage.local.get(['stretchfreq'], (res) => {
    limitScale = 5 - parseInt(res['stretchfreq']); //1-5
});

let keyCount = 0;
document.onkeypress = () => {
    keyCount++;
    if (keyCount > 100*limitScale) {
        chrome.runtime.sendMessage({
            type: "typing",
            newCount: keyCount
        });
        keyCount = 0;
    }
}

let mouseCount = 0;
document.onmousemove = () => {
    mouseCount++;
    if (mouseCount > 1000*limitScale) {
        chrome.runtime.sendMessage({
            type: "mousing",
            newCount: mouseCount
        });
        mouseCount = 0;
    }
}