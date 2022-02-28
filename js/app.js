
// let color = Math.random();
// color = Math.random().toString(16).substring(2 , 8);


const num = document.querySelector('.num');
const newColor = document.querySelector('#new-color');

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2 , 8);
    document.body.style.backgroundColor = '#' + randomColor;
    const randomNum = Math.floor((Math.random()*10) + 1)
    
    num.innerText = randomNum ;
}

newColor.addEventListener('click', generateColor);
