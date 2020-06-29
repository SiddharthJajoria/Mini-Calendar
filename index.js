const monthName=document.querySelector('.month h3');
const dayName=document.querySelector('.day');
const dateName=document.querySelector('.date');
const yearName=document.querySelector('.year');

let options={
    day:'numeric',
    weekday:'long',
    year:'numeric',
    month:'long'
}
let today=new Date();

let now=today.toLocaleDateString('en-US',options);
let arrayNow=now.split(',');
console.log(arrayNow);
monthName.textContent=(arrayNow[1].split(' '))[1];
dayName.textContent=arrayNow[0];
dateName.textContent=(arrayNow[1].split(' '))[2];
yearName.textContent=arrayNow[2];
// monthName.innerHTML=arrayNow
