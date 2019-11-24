const video = document.querySelector('video');
//const iframe = document.querySelector('iframe');

// This function will make the phone vibrate once
// for the amount of time you want
// TIME IS IN MILLISECONDS!!!
function vibrate(time) {
    if ('vibrate' in navigator) {
        navigator.vibrate(0);
        navigator.vibrate([time]);
    }
}


// Checks whether the video is currently at a certain time
function isTime(seconds, threshold = 0.2) {
    const currentTime = video.currentTime;
    //const currentTime = iframe.currentTime;
    return (currentTime > seconds - threshold && currentTime < seconds + threshold);
}



// This runs while the video is playing
video.addEventListener('timeupdate', () => {

    // Everytime the video gets to 1 seconds
    // make the phone vibrate for 500 milliseconds
    if (isTime(9)) {
        vibrate(250);
    }
    if (isTime(10)) {
        vibrate(250);
    }
    if (isTime(11)) {
        vibrate(250);
    }
    if (isTime(12)) {
        vibrate(250);
    }
    if (isTime(13)) {
        vibrate(250);
    }
    if (isTime(14)) {
        vibrate(250);
    }
    if (isTime(65)) {
        vibrate(250);
    }
    if (isTime(66)) {
        vibrate(250);
    }
    if (isTime(67)) {
        vibrate(250);
    }
    if (isTime(68)) {
        vibrate(250);
    }
    if (isTime(69)) {
        vibrate(250);
    }
    if (isTime(70)) {
        vibrate(250);
    }
    if (isTime(75)) {
        vibrate(250);
    }
});
