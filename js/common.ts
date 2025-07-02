
let wrapBlock = document.querySelector('.weather');
let audio = document.getElementById("weatherSound") as HTMLAudioElement | null;
let currentAudioSrc: string | null = null;

let volumeControl = document.querySelector('.sound') as HTMLInputElement ;

if (volumeControl) {
volumeControl?.addEventListener('input', () => {
    if (!audio) return;

    audio.volume = parseFloat(volumeControl.value) / 100;
});
}

wrapBlock?.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
   
    const block = target.closest('.weather__block') as HTMLElement | null;    
    if (!block || !audio) return;

        const classList = block.classList;
        let newBackgroundImage: string;
        let newAudioSrc: string;

     if (classList.contains('weather__block--winter')) {
        newBackgroundImage = "url('/assets/images/winter-bg.jpg')";
        newAudioSrc = '/assets/sounds/winter.mp3';
    } else if (classList.contains('weather__block--summer')) {
        newBackgroundImage = "url('/assets/images/summer-bg.jpg')";
        newAudioSrc = '/assets/sounds/summer.mp3';
    } else if (classList.contains('weather__block--rain')) {
        newBackgroundImage = "url('/assets/images/rainy-bg.jpg')";
        newAudioSrc = '/assets/sounds/rain.mp3';
    } else {
        return; 
    }

    document.body.style.backgroundImage = newBackgroundImage;

   if (currentAudioSrc !== newAudioSrc) {
        audio.pause();
        audio.src = newAudioSrc;
        currentAudioSrc = newAudioSrc;
        audio.play()
    } else {
        
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause();
        }
        
    }

})
