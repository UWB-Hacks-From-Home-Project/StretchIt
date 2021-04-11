let keyCount = 0;
console.log(keyCount)
document.onkeypress = () => {
  keyCount++;
  if (keyCount > 100) {
    console.log("keyboard")
    //send notification
  }
}

let mouseCount = 0;
document.onmousemove = () => {
  mouseCount++;
  if (mouseCount > 10000) {
    console.log("mouse");
     //send notification
  }
}

chrome.runtime.onMessage.addListener((msg) => {
    console.log("Sending message with metrics");
    chrome.runtime.sendMessage([
        {
            type: "key",
            value: keyCount
        },
        {
            type: "mouse",
            value: keyCount
        }
        
    ]);
    chrome.runtime.sendMessage({
        
    });
});