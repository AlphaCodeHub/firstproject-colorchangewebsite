document.addEventListener('DOMContentLoaded', function(){


    const yellowButton = document.querySelector('.color-button6');
    yellowButton.addEventListener('click', () => changeBackgroundColor('yellow'));
    
    const blackButton = document.querySelector('.color-button5');
    blackButton.addEventListener('click', () => changeBackgroundColor('black'));
    
    const pinkButton = document.querySelector('.color-button4');
    pinkButton.addEventListener('click', () => changeBackgroundColor('rgb(223, 12, 47)'));


    const blueButton = document.querySelector('.color-button3');
    blueButton.addEventListener('click', () => changeBackgroundColor('blue'));


    const greenButton = document.querySelector('.color-button2');
    greenButton.addEventListener('click', () => changeBackgroundColor('green'));


    const redButton = document.querySelector('.color-button1');
    redButton.addEventListener('click', () => changeBackgroundColor('red'));





});


// now create function


function changeBackgroundColor(color){

    document.body.style.backgroundColor=color
}