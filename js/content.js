let limitScale = 1; //How often to send notifications
let countKey = true;
let countMouse = true;

chrome.storage.local.get(['stretchfreq', 'metrics'], (res) => {
    limitScale = 5 - parseInt(res['stretchfreq']); //1-5
    countKey = res['metrics'].includes("typing");
    countMouse = res['metrics'].includes("mouse");
    console.log(limitScale, countKey, countMouse)
});



let keyCount = 0;
document.onkeypress = () => {
    if (countKey) {
        keyCount++;
        if (keyCount > 100*limitScale) {
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
        if (mouseCount > 1000*limitScale) {
            chrome.runtime.sendMessage({
                type: "mousing",
                newCount: mouseCount
            });
            mouseCount = 0;
        }
    }
}