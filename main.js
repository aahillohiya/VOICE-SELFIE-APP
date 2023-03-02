var SpeechRecognition = window.webkitSpeechRecognition;
var Recogniton = new SpeechRecognition();

function Start() {
   document.getElementById("textbox").innerHTML = "";
   Recogniton.start();
}

Recogniton.onresult = function (event){

    console.log(event);
    
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;

 if (Content == "take my selfie") {
    speech();
 }
}

function speech(){
 
    var synt = window.speechSynthesis;

    var speech_data = "taking your selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speech_data);

    synt.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:150,
    image_format:'png',
    image_quality:90
});

camera = document.getElementById("camera");
 
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+data_uri+'"/>'; 
      });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}