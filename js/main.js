
chrome.runtime.onMessage.addListener((msg) => { //Listen for messages and set the data accordingly
    console.log(msg);
    if (msg == "installed") {
        document.querySelector("#welcome").classList.remove("d-none");
    }
});
