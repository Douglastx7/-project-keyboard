// get all keys 
const keys = document.querySelectorAll(".key")


function playNote(event) {
   console.log(event)


   console.log(event.keyCode)
    
    let audiokeyCode = getkeyCode(event);

  
    console.log(audiokeyCode)
    // typed or pressed key 
    const key = document.querySelector(`.key[data-key="${audiokeyCode}"]`)

    // if key exists 
    const cantFoundAnykey = key 

    if(!cantFoundAnykey){ 
        return;
    }
     
        
     
     addPlayingClass(key)
     playAudio(audiokeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getkeyCode(event){
    let keyCode; 
 
    const iskeyboard = event.type === "keydown"
    if(iskeyboard) {
        keyCode = event.keyCode 
    } else {
       keyCode = event.target.dataset.key 
    }
    return keyCode
}

function playAudio(audiokeyCode) {
    const audio = document.querySelector(`audio[data-key="${audiokeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
} 

function removePlayingClass(event){ 
    event.target.classList.remove("playing")
}

function registerEvents () { 
    // click with mouse
keys.forEach(function(key){
    key.addEventListener("click", playNote) 
    key.addEventListener("transitionend", removePlayingClass)
})

// keyboard type
window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)
