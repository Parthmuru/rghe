x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
 
var SpeechRecognition = window.webkitSpeechRecognition;
recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "Pl speek the system is listening or I will force u to do.";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech Recognition has started: " + content;
    if(content == "circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Drawing a circle dont u see!";
        draw_circle = "set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Drawing a rectangle dont u see!";
        draw_rect = "set";
    }
}
 
function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.round() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn dont u see so beuatifull corcle!!!!!!";
        draw_circle = "";
    }
    if(draw_rect == "set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn dont u see u r so buddhu!!!";
        draw_rect = "";
    }
}