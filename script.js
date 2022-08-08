//----------TEXT DISPLAY----------////

//Selectors: input fields

const inputName1 = document.getElementById('name1')
const inputName2 = document.getElementById('name2')
const inputWeddingDate = document.getElementById('weddingDate')
const inputWeddingTime = document.getElementById('weddingTime')
const inputLocation = document.getElementById('location')
const inputRsvpDate = document.getElementById('rsvpDate')
const inputEmail = document.getElementById('email')
const inputPhone = document.getElementById('phone')

//Selectors: display fields

const showName1 = document.getElementById('displayName1')
const showName2 = document.getElementById('displayName2')
const showAnd = document.getElementById('conjunction')
const showDate = document.getElementById('displayDate')
const showTime = document.getElementById('displayTime')
const showLocation = document.getElementById('displayLocation')
const showRsvpDate = document.getElementById('displayRsvpDate')
const showEmail = document.getElementById('displayEmail')
const showPhone = document.getElementById('displayPhone')

//Event Listeners

inputName1.addEventListener ('keyup', printName1)
inputName2.addEventListener ('keyup', printName2)
inputName2.addEventListener ('keydown', printAnd)
inputWeddingDate.addEventListener ('keyup', printWeddingDate)
inputWeddingTime.addEventListener ('keyup', printWeddingTime)
inputLocation.addEventListener ('keyup', printLocation)
inputRsvpDate.addEventListener ('keyup', printRsvpDate)
inputEmail.addEventListener ('keyup', printEmail)
inputPhone.addEventListener ('keyup', printPhone)

//Functions

function printName1() {
    showName1.innerHTML = inputName1.value
}

function printName2() {
    showName2.innerHTML = inputName2.value
}

function printAnd () {
    showAnd.innerHTML = (`and`)
}

function printWeddingDate () {
    showDate.innerHTML = (`on &nbsp${inputWeddingDate.value}`)
}

function printWeddingTime () {
    showTime.innerHTML = (`&nbsp at &nbsp${inputWeddingTime.value}`)
}

function printLocation () {
    showLocation.innerHTML = (`at &nbsp${inputLocation.value}`)
}

function printRsvpDate () {
    showRsvpDate.innerHTML = (`<strong>RSVP</strong><br>by &nbsp${inputRsvpDate.value} &nbspto`)
}

function printEmail () {
    showEmail.innerHTML = (`${inputEmail.value}<br>`)
}

function printPhone () {
    showPhone.innerHTML = inputPhone.value
}



//----------CHANGE INVITATION STYLE----------//

let classicButton = document.getElementById('btnClassic')
let flowersButton = document.getElementById('btnFlowers')
let heartsButton = document.getElementById('btnHearts')

let displayInvitation = document.getElementById('display')

classicButton.addEventListener('click', changeToClassic)
flowersButton.addEventListener('click', changeToFlowers)
heartsButton.addEventListener('click', changeToHearts)



function changeToClassic () {
    displayInvitation.style.backgroundImage = "url(images/classic.jpg)";
    displayInvitation.style.fontFamily = "Times New Roman, Times, serif";
    displayInvitation.style.color = "black";
}

function changeToFlowers () {
    displayInvitation.style.backgroundImage = "url(images/rose.jpg)";
    displayInvitation.style.fontFamily = "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif";
    displayInvitation.style.color = "#565555";
}

function changeToHearts () {
    displayInvitation.style.backgroundImage = "url(images/hearts.jpg)";
    displayInvitation.style.fontFamily = "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif"
    displayInvitation.style.color = "white";
}
