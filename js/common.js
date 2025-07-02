var wrapBlock = document.querySelector('.weather');
var audio = document.getElementById("weatherSound");
var currentAudioSrc = null;
var volumeControl = document.querySelector('.sound');
if (volumeControl) {
    volumeControl === null || volumeControl === void 0 ? void 0 : volumeControl.addEventListener('input', function () {
        if (!audio)
            return;
        audio.volume = parseFloat(volumeControl.value) / 100;
    });
}
wrapBlock === null || wrapBlock === void 0 ? void 0 : wrapBlock.addEventListener('click', function (event) {
    var target = event.target;
    var block = target.closest('.weather__block');
    if (!block || !audio)
        return;
    var classList = block.classList;
    var newBackgroundImage;
    var newAudioSrc;
    if (classList.contains('weather__block--winter')) {
        newBackgroundImage = "url('/assets/images/winter-bg.jpg')";
        newAudioSrc = '/assets/sounds/winter.mp3';
    }
    else if (classList.contains('weather__block--summer')) {
        newBackgroundImage = "url('/assets/images/summer-bg.jpg')";
        newAudioSrc = '/assets/sounds/summer.mp3';
    }
    else if (classList.contains('weather__block--rain')) {
        newBackgroundImage = "url('/assets/images/rainy-bg.jpg')";
        newAudioSrc = '/assets/sounds/rain.mp3';
    }
    else {
        return;
    }
    document.body.style.backgroundImage = newBackgroundImage;
    if (currentAudioSrc !== newAudioSrc) {
        audio.pause();
        audio.src = newAudioSrc;
        currentAudioSrc = newAudioSrc;
        audio.play();
    }
    else {
        if (audio.paused) {
            audio.play();
        }
        else {
            audio.pause();
        }
    }
});
