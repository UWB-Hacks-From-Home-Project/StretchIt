/*content script must directly access the website's DOM to track mouse/keyboard movement*/

let countKey = true;
let countMouse = true;

chrome.storage.local.get(['stretchfreq', 'metrics'], (res) => {
    countKey = res['metrics'].includes("typing");
    countMouse = res['metrics'].includes("mouse");
});



let keyCount = 0;
document.onkeypress = () => {
    if (countKey) {
        keyCount++;
        if (keyCount > 10) {
            chrome.runtime.sendMessage({
                type: "typing",
                newCount: keyCount
            });
            keyCount = 0;
        }
    }
}

let mouseCount = 0;
document.onmousemove = () => {
    if (countMouse) {
        mouseCount++;
        if (mouseCount > 100) {
            chrome.runtime.sendMessage({
                type: "mousing",
                newCount: mouseCount
            });
            mouseCount = 0;
        }
    }
}