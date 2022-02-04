let h = document.querySelector('.h');
let m = document.querySelector('.m');
let s = document.querySelector('.s');
let ap = document.querySelector('.ap');

const clock = ()=>{
    const latestTime= new Date;
    const hour = latestTime.getHours();
    const mins = latestTime.getMinutes();
    const seconds = latestTime.getSeconds();

    const convertedTime = hour%12;

    if(hour > 12 && hour < 24){
        h.innerText = convertedTime;
        ap.innerText = "PM";
    }else if(hour < 12 || hour == 24){
        h.innerText = convertedTime;
        ap.innerText = "AM";
    }else if(hour == 12){
        h.innerText = hour;
        ap.innerText = "PM";
    }

    
    m.innerText = mins;
    s.innerText = seconds;
}

setInterval(clock, 1000);