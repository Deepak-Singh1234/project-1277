astronomia = "";
born_for_this = "";
unstoppable = "";

function preload(){
    astronomia = loadSound("Asronomia.mp3");
    bft = loadSound("Bornforthis.mp3");
    unstoppable = loadSound("Unstoppable.mp3");
}

function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
}

function play(){
    var name = document.getElementById("name").value;
    if(name == "astronomia"){
     
        astronomia.play();
    }
    
    if(name == "born_for_this"){
       
        born_for_this.play();
    }

    if(name = "unstoppable"){
   
        unstoppable.play();
    }
}

function stop(){
    astronomia.stop();
    born_for_this.stop();
    unstoppable.stop();
}