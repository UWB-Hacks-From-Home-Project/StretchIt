let handStretches = [
    {
        id: "spider",
        name: "Spiders doing pushups on a mirror",
        still: "/assets/carpal tunnel exercises/Spiders doing pushups on a mirror frames/1.gif",
        live: "/assets/carpal tunnel exercises/Spiders doing pushups on a mirror.gif"
    },
    {
        id: "shake",
        name: "Hand Shakes",
        still: "/assets/carpal tunnel exercises/shake frames/1.gif",
        live: "/assets/carpal tunnel exercises/Shake.gif"
    },
    {
        id: "stretcharmstrong",
        name: "Stretch Armstrong",
        still: "/assets/carpal tunnel exercises/stretch armstrong frames/1.gif",
        live: "/assets/carpal tunnel exercises/Stretch armstrong.gif"
    }
];

let deskStretches = [
    {
        id: "forward",
        name: "Forward Stretch",
        still: "/assets/desk exercises/Forward stretch frames/1.gif",
        live: "/assets/desk exercises/Forward stretch.gif"
    },
    {
        id: "overhead",
        name: "Overhead Reach",
        still: "/assets/desk exercises/Overhead reach frames/1.gif",
        live: "/assets/desk exercises/Overhead reach.gif"
    },
    {
        id: "triceps",
        name: "Triceps Stretches",
        still: "/assets/desk exercises/Triceps stretches frames/1.gif",
        live: "/assets/desk exercises/Triceps stretches.gif"
    },
    {
        id: "upperbody",
        name: "Upper body and arm stretch",
        still: "/assets/desk exercises/Upper body and arm stretch frames/1.gif",
        live: "/assets/desk exercises/Upper body and arm stretch.gif"
    }
];


let currStretch = 0;

let stretches = window.location.hash.includes("desk") ? deskStretches : handStretches; //stretches in this case will be hands only

const updateFrames = (newStretch) => {
    document.querySelector(`#${stretches[currStretch].id}`).classList.add("d-none"); //Hide current frame and then update current stretch

    currStretch = newStretch;
    
    document.querySelector("#prevBtn").innerHTML = `<i class="fa fa-angle-left font-weight-bold mr-2"></i>Previous Stretch (${currStretch} done)`;
    document.querySelector("#prevBtn").disabled = currStretch == 0;

    document.querySelector("#nextBtn").innerHTML = `Next Stretch (${stretches.length-1-currStretch} left)<i class="font-weight-bold ml-2 fa fa-angle-right"></i>`;
    document.querySelector("#nextBtn").disabled = currStretch == stretches.length-1;

    document.querySelector("#title").innerHTML = stretches[currStretch].name;
    document.querySelector("#gifContainer").src = stretches[currStretch].still;
    document.querySelector(`#${stretches[currStretch].id}`).classList.remove("d-none");    
}

document.querySelector("#startBtn").onclick = () => {
    document.querySelector("#gifContainer").src = stretches[currStretch].live;
}

document.querySelector("#prevBtn").onclick = () => {
    if (currStretch <= 0) return;
    updateFrames(currStretch-1);
}

document.querySelector("#nextBtn").onclick = () => {
    if (currStretch >= stretches.length) return;
    updateFrames(currStretch+1);
}


//Setup first stretch
updateFrames(0);
