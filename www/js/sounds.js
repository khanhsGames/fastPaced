var hhe = "sounds/ufo.wav";
var kek = document.getElementById("lawl");
kek.addEventListener('touchstart', playMP5);

function playMP3() {
    playAudio("sounds/button-1.mp3");
    
    
}

function playMP4() {
    playAudio(hhe);
}

function playMP5() {
    playAudio("sounds/ufo.wav");
}

function playAudio(url) {
    // Play the audio file at url
    var my_media = new Media(getMediaURL(url),
        // success callback
        function () {
            console.log("playAudio():Audio Success");
        },
        // error callback
        function (err) {
            console.log("playAudio():Audio Error: " + err);
        }
    );
    // Play audio
    my_media.play();
}