//ELEMENTI DEL DOM
const daysCount = document.getElementById('days');
const hoursCount = document.getElementById('hours');
const minutesCount = document.getElementById('minutes');
const secondsCount = document.getElementById('seconds');

function timeLeft() {
//Data di oggi
const now = new Date()
const msNow = now.getTime();

//Date di natale
const xmasDate = new Date ('12-21-2022');
const msXmasDate = xmasDate.getTime ();

//Quanto manca
const msLeft = msXmasDate - msNow;

//Conversione
let secondsLeft = Math.floor(msLeft / 1000);
let minutesLeft = Math.floor(secondsLeft / 60);
let hoursLeft = Math.floor(minutesLeft / 60);
let daysLeft = Math.floor(hoursLeft / 24);

secondsLeft = secondsLeft % 60;
minutesLeft = minutesLeft % 60;
hoursLeft = hoursLeft % 24;

//Stampo in pagina
daysCount.innerText = daysLeft;
hoursCount.innerText = hoursLeft;
minutesCount.innerText = minutesLeft;
secondsCount.innerText = secondsLeft;  

};

timeLeft();

const countdown = setInterval (timeLeft, 1000);

function stopFunction() {
    clearTimeout(countdown){
    }
}
