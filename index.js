


var audioList = ['sounds/tom-1.mp3', 'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 'sounds/tom-4.mp3', 'sounds/snare.mp3', 'sounds/kick-bass.mp3', 'sounds/crash.mp3']
var clickedButton = document.querySelectorAll(".drum");
var drumList = [];

for (var j = 0; j < clickedButton.length; j++) {
    drumList.push(clickedButton[j].textContent);
}

var currentKey = makeSoundByClick();
currentKey = makeSoundByKey();
buttonAnimation (currentKey);




// add event listner to every each button thr a for loop
// for循环中，用 ；隔开！！！！！！

function makeSoundByClick() {
    for (var i = 0; i < clickedButton.length; i++) {
        // anonymous function. function is called later.
        // named function without ()
        //(parameter1, parameter2)
        //(what should listen to, what should do)

        clickedButton[i].addEventListener("click", function () {
            var index = drumList.indexOf(this.textContent);
            var audio = new Audio(audioList[index]);
            audio.play();
            buttonAnimation (this.textContent);
        });
    }
}

function makeSoundByKey() {
    document.addEventListener("keydown", function (event) {
        var eventKey = event.key;
        var index = drumList.indexOf(eventKey);
        var audio = new Audio(audioList[index]);
        audio.play();
        buttonAnimation(eventKey);
    }
    )
}


function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}




