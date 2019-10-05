// Write your JavaScript code here.
window.onload = function(){
 takeOff();
}
// Remember to pay attention to page loading!
function takeOff(){
    const takeoff = document.getElementById("takeoff");  
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const land=document.getElementById("landing");
    const shuttleStatus = document.getElementById("flightStatus");
    const abort = document.getElementById("missionAbort");
    const button = {
        up : document.getElementById("up"),
        down : document.getElementById("down"),
        right : document.getElementById("right"),
        left : document.getElementById("left")
    };
    const rocketImage = document.getElementById("rocket");
   
    console.log(shuttleBackground.clientHeight);
    rocketImage.style.top = parseInt(shuttleBackground.clientHeight)-75+"px";
    rocketImage.style.left = "0px";
    takeoff.addEventListener("click",()=>{
     let isReady = window.confirm("Confirm that the shuttle is ready for takeoff."); 
    if(isReady){
    
        shuttleBackground.style.backgroundColor="blue";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        
    }
    });
    land.addEventListener("click",()=>{
        window.alert("The shuttle is landing.Landing gear engaged");
        
          shuttleStatus.innerHtml = "The shuttle has landed";
          shuttleBackground.style.backgroundColor = "green";
          shuttleHeight.innerHTML = 0;
          rocketImage.style.top = parseInt(shuttleBackground.clientHeight)-75+"px";
          rocketImage.style.left = "0px";
        
    });
    abort.addEventListener("click",()=>{
        let isReady=window.confirm("Confirm that you want to abort the mission");
        shuttleStatus.innerHTML = "mission aborted";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocketImage.style.top = parseInt(shuttleBackground.clientHeight)-75+"px";
        rocketImage.style.left = "0px";
    });
    moveRocket(button,rocketImage,shuttleHeight,shuttleBackground);
    window.addEventListener("resize",()=>{
        rocketImage.style.top = parseInt(shuttleBackground.clientHeight)-75+"px";
        rocketImage.style.left = "0px";
        shuttleHeight.innerHTML = 0;       
    });
    window.addEventListener("keydown",(e)=>{
        e.preventDefault();
        if(e.keyCode === 38  && parseInt(rocketImage.style.top) >0){
            rocketImage.style.top = (parseInt(rocketImage.style.top)-10)+"px";    
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+10000;
        }else if(e.keyCode===40 && parseInt(rocketImage.style.top)< parseInt(shuttleBackground.clientHeight)-75){
            rocketImage.style.top = (parseInt(rocketImage.style.top)+10)+"px";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)-10000;
         }else if(e.keyCode ===37 &&  parseInt(rocketImage.style.left) > -1 * (parseInt(shuttleBackground.clientWidth)/2)+37.5){
            rocketImage.style.left = (parseInt(rocketImage.style.left)-10)+"px";
         }else if(e.keyCode ===39 && parseInt(rocketImage.style.left) < (parseInt(shuttleBackground.clientWidth)/2)-37.5){
            rocketImage.style.left = (parseInt(rocketImage.style.left)+10)+"px";
         }  
    });
}

function moveRocket(theButtons,imageToMove,heightToChange,background){
    for(let buttons in theButtons ){
        theButtons[buttons].addEventListener("click",()=>{
         if(buttons ==="up"  && parseInt(imageToMove.style.top) >0){
            imageToMove.style.top = (parseInt(imageToMove.style.top)-10)+"px";    
            heightToChange.innerHTML = parseInt(heightToChange.innerHTML)+10000;
        }else if(buttons==="down" && parseInt(imageToMove.style.top)< parseInt(background.clientHeight)-75){
            imageToMove.style.top = (parseInt(imageToMove.style.top)+10)+"px";
            heightToChange.innerHTML = parseInt(heightToChange.innerHTML)-10000;
         }else if(buttons ==="left" &&  parseInt(imageToMove.style.left) > -1 * (parseInt(background.clientWidth)/2)+37.5){
            imageToMove.style.left = (parseInt(imageToMove.style.left)-10)+"px";
         }else if(buttons ==="right" && parseInt(imageToMove.style.left) < (parseInt(background.clientWidth)/2)-37.5){
            imageToMove.style.left = (parseInt(imageToMove.style.left)+10)+"px";
         }   
        });
    }
}