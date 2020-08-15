const video  = document.querySelector ('.webcam');

const canvas  = document.querySelector ('.video');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#ffc600';
ctx.lineWidth = 2;
const faceCanvas  = document.querySelector ('.face');
const faceCtx = canvas.getContext('2d');

const faceDetector = new window.FaceDetector();
console.log(video, canvas, faceCanvas, faceDetector);

async function populateVideo(){
    const stream = await navigator.mediaDevices.getUserMedia({

        video: {width: 1280, height: 720}
    

    });  
   video.srcObject = stream;
   await video.play();

  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect(){
  const faces = await faceDetector.detect(video);
  console.log(faces.length);
  faces.forEach(drawFace) 
  requestAnimationFrame(detect);
}

function drawFace(face){
    const {width, height, top, left} = face.boundingBox;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ffc600'
    ctx.lineWidth = 2; 
    ctx.strokeRect(left, top, width, height);
    
}

function censor({boundingBox}){
    boundingBox;
}

populateVideo().then(detect);