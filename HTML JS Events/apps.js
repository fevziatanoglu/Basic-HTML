
//MAUSE EVENTS
document.getElementById("click-me-a").addEventListener('click' , function (e){
    console.log("You " + e.type+"ed a");

    //başka sayfaya gitmez
    e.preventDefault();
    }
    );



    document.getElementById("click-me-btn").addEventListener('click' , clickFunction );
    document.getElementById("click-me-btn").addEventListener('dblclick' , clickFunction );
    document.getElementById("click-me-btn").addEventListener('mousedown' , clickFunction );
    document.getElementById("click-me-btn").addEventListener('mouseup' , clickFunction );
    document.getElementById("click-me-btn").addEventListener('mouseenter' , clickFunction );
    document.getElementById("click-me-btn").addEventListener('mouseleave' , clickFunction );

    function clickFunction(e){
        console.log("You " + e.type + "ed");
    }



    //KEYBOARD EVETNS

const nameInput = document.querySelector("#name-input");

nameInput.addEventListener('keydown' , keyboardEvent);
nameInput.addEventListener('focus' , keyboardEvent);
nameInput.addEventListener('cut' , keyboardEvent);
nameInput.addEventListener('paste' , keyboardEvent);
nameInput.addEventListener('input' , keyboardEvent)

function keyboardEvent (e){
console.log(e.type);
}

h1Text = document.querySelector("#keyboard-events-text");
sumbitButton = document.querySelector("#submit-input");
sumbitButton.addEventListener('click' , function (e){

    h1Text.textContent = "Merhaba benim adım " + nameInput.value;

});
