/*deals with stretch.html*/

let handStretches = [
    {
        id: "spider",
        name: "Spiders Doing Pushups on a Mirror",
        still: "/assets/exercises_carpaltunnel/spider/1.gif",
        live: "/assets/exercises_carpaltunnel/spider.gif"
    },
    {
        id: "shake",
        name: "Hand Shakes",
        still: "/assets/exercises_carpaltunnel/shake/1.gif",
        live: "/assets/exercises_carpaltunnel/shake.gif"
    },
    {
        id: "stretcharmstrong",
        name: "Stretch Armstrong",
        still: "/assets/exercises_carpaltunnel/stretch_armstrong/1.gif",
        live: "/assets/exercises_carpaltunnel/stretch_armstrong.gif"
    }
];

let deskStretches = [
    {
        id: "forward",
        name: "Forward Stretch",
        still: "/assets/exercises_desk/forward_stretch/1.gif",
        live: "/assets/exercises_desk/forward_stretch.gif"
    },
    {
        id: "overhead",
        name: "Overhead Reach",
        still: "/assets/exercises_desk/overhead_reach/1.gif",
        live: "/assets/exercises_desk/overhead_reach.gif"
    },
    {
        id: "triceps",
        name: "Triceps Stretches",
        still: "/assets/exercises_desk/triceps_stretch/1.gif",
        live: "/assets/exercises_desk/triceps_stretch.gif"
    },
    {
        id: "upperbody",
        name: "Upper Body and Arm Stretch",
        still: "/assets/exercises_desk/upper_body_stretch/1.gif",
        live: "/assets/exercises_desk/upper_body_stretch.gif"
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
