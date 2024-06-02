

const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const time=document.getElementById('time');

const today = new Date();
const count= today.getTime();

console.log(count);

date.innerHTML = today.getDate();

let dayy;

switch (today.getDay()) {
    case 0:
        dayy = 'Sunday';
        break;
    case 1:
        dayy = 'Monday';
        break;
    case 2:
        dayy = 'Tuesday';
        break;
    case 3:
        dayy = 'Wednesday'
        break;
    case 4:
        dayy = 'Thursday'
        break;
    case 5:
        dayy = 'Friday';
        break;
    case 6:
        dayy = 'Saturday';
        break;
    default:
        break;
}

day.innerHTML = dayy;

let monthh

switch (today.getMonth()) {
    case 0:
        monthh = 'Jan';
        break;
    case 1:
        monthh = 'Feb';
        break;
    case 2:
        monthh = 'March';
        break;
    case 3:
        monthh = 'April'
        break;
    case 4:
        monthh = 'May'
        break;
    case 5:
        monthh = 'June';
        break;
    case 6:
        monthh = 'July';
        break;
    case 7:
        monthh = 'August';
        break;
    case 8:
        monthh = 'Sep';
        break;
    case 9:
        monthh = 'Oct';
        break;
    case 10:
        monthh = 'Nov';
        break;
    case 11:
        monthh = 'Dec';
        break;

    default:
        break;
}



month.innerHTML = monthh;
year.innerHTML = today.getFullYear();

function setTime(){
const d=new Date()
let h=String(d.getHours()).padStart(2,"0");
let m=String(d.getMinutes()).padStart(2,"0");
let s=String(d.getSeconds()).padStart(2,"0");

if(parseInt(s)>=50){
    time.style.color='red';
}
if(parseInt(s)<50){
    time.style.color='black';
}

time.innerHTML=`${h}:${m}:${s}`;
}

setTime();
setInterval(setTime,1000);