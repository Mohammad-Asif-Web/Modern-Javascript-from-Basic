const body = document.body
const video = document.createElement('video');
const source = document.createElement('source');

body.prepend(video);
video.prepend(source);
video.setAttribute('width', '400');
video.setAttribute('controls',"");
// video.setAttribute('loop', '');
video.setAttribute('muted', "")
source.setAttribute('src', '../assets/jonas_blue.mp4')
source.setAttribute('type', 'video/mp4')
source.innerText = 'Your browser does not support html5 video element'

video.addEventListener('canplay', function(){
    console.log('canplay'); //when the video is ready to play and everything is ok to play directly this event will occur.
})
video.addEventListener('play', function(){
    console.log('play');    //this event occurs when play button is clicked
});
video.addEventListener('playing', function(){
    console.log('playing'); // this event occurs when the video is playing
})
video.addEventListener('pause', function(){
    console.log('pause button clicked');    // when the play button is paused, then it happens
});

video.addEventListener('ended', function(){
    console.log('thanks for watching'); //this event occurs when video is properly ended. But if the loop is on, this event won't work.
})

video.addEventListener('volumechange', function(){
    console.log('volume is changing');
})

// waiting event happens when video is stopped for browser buffering
// progress event happen when is able to play in progress for buffer.







