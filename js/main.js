
chrome.runtime.onMessage.addListener((msg) => { //Listen for messages and set the data accordingly
    console.log(msg);
    if (msg == "installed") {
        document.querySelector("#welcome").classList.remove("d-none");
    }
  });

  document.querySelector("#settingsForm").onsubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);

    //this will have the value of the input named 'freq': data.get("freq");

    chrome.storage.local.set({
        posturefreq: data.get("posturefreq"),
        breakfreq: data.get("breakfreq"),
        stretchfreq: data.get("stretchfreq"),
        metrics: data.get("metrics"),
        remindtype: data.get("remindtype"),
        notificationlevel: data.get("notificationlevel")
     }, () => {});
}