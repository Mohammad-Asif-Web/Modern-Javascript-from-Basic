const body = document.body
const video = document.createElement('video');
const source = document.createElement('source');

body.prepend(video);
video.prepend(source);
video.setAttribute('width', '400');
video.setAttribute('controls',"");
video.setAttribute('loop', '');
video.setAttribute('muted', '')
source.setAttribute('src', '../assets/jonas_blue.mp4')
source.setAttribute('type', 'video/mp4')
source.innerText = 'Your browser does not support html5 video element'

video.addEventListener('canplay', videoHandler);

function videoHandler(event){
    console.log('canplay');
}



