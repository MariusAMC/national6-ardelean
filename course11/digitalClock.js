console.log("JavaScript - Digital Clock");

let seconds = 0;
const secondParagraphs = document.querySelectorAll(".seconds p");
console.log(secondParagraphs);

let minutes = 0;
const minuteParagraph = document.querySelectorAll(".minutes p")

let hours = 0;
const hoursParagraph = document.querySelectorAll(".hours p")

setInterval(function(){
    renderDigits(seconds, secondParagraphs);
    renderDigits(minutes, minuteParagraph);
    renderDigits(hours, hoursParagraph);

    // const secondString = seconds + "";
    // const secondStringArray = secondString.split("")
    // console.log(secondStringArray);

    // if(secondStringArray.length === 2) {
    //     secondParagraphs[0].innerText = secondStringArray[0];
    //     secondParagraphs[1].innerText = secondStringArray[1];
    // } else {
    //     secondParagraphs[0].innerText = 0;
    //     secondParagraphs[1].innerText = secondStringArray[0];
    // }

                    // if(seconds === 59) {
                    //     seconds = 0;
                    //     if(minutes === 59) {
                    //         minutes = 0;
                    //     } else {
                    //         minutes++;
                    //     } 
                    // } else {
                    //     seconds++;
                    // }

    // const minuteString = minutes + "";
    // const minuteStringArray = minuteString.split("")

    // if(seconds === 59) {
    //     minutes++;
    //     minuteParagraph[0].innerText = minuteStringArray[0];
    //     minuteParagraph[1].innerText = minuteStringArray[1];
    // } else {
    //     minuteParagraph[0].innerText = 0;
    //     minuteParagraph[1].innerText = minuteStringArray[0];
    // }

    // if(minutes === 59) {
    //     minutes = 0
    // }
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes ++
    }

    if(minutes === 60) {
        minutes = 0;
        hours++;
    }

    if (hours ===24) {
        hours = 0;
    }

}, 1);

function renderDigits(nr, plist) {
    const stringDigits = nr + "";
    const digitList = stringDigits.split("");

    if(digitList.length === 2) {
        plist[0].innerText = digitList[0];
        plist[1].innerText = digitList[1];
    } else {
        plist[0].innerText = 0;
        plist[1].innerText = digitList[0];
}
}