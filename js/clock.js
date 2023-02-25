const clock = document.querySelector("#clock");
function getClock(){
    const date = new Date();
    //padStart(length, plus) ex ) 5 > 05
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText =`${hours}:${minutes}:${second}`;
}
getClock();
//1초마다 
setInterval(getClock,1000);