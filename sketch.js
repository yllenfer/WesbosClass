const canvas = document.querySelector ('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector ('.shake');

const MOVE_VALUE = 15;


const {width, height} = canvas;


let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_VALUE; 

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 120%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key}) {
 hue = hue + 8; 
ctx.strokeStyle = `hsl(${hue}, 120%, 50%)`;
console.log(key);
ctx.beginPath();
ctx.moveTo(x, y);

switch(key) {
    case 'ArrowUp': y = y - MOVE_VALUE;
    break;
    case 'ArrowDown': y = y + MOVE_VALUE;
    break;
    case 'ArrowLeft': x = x - MOVE_VALUE;
    break;
    case 'ArrowRight': x = x + MOVE_VALUE;
    break;
    default: 
    break;
}

ctx.lineTo(x, y);
ctx.stroke();
}



function handleKey(e){
    if (e.key.includes('Arrow')){
    e.preventDefault();
    draw({ key: e.key});
   

    }   
}

function clearCanvas (){
    canvas.classList.add('shake');
    ctx.clearRect(0 , 0,width,height);
    canvas.addEventListener('animationend', function(){
    canvas.classList.remove('shake');
    }, {
        once: true
    }
    
    );
}


window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);