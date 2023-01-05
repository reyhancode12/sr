function setup(){

canvas = createCanvas(200,170);

canvas.center();

background("white");

canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;

}



function clear(){

background("white");

}


function preload(){

classifier = ml5.imageClassifier('DoodelNet');


}


function draw(){



strokeWeight(6);

stroke(0);

if(mouseIsPressed){

line(pmouseX,pmouseY,mouseX,mouseY);

};
}

function classifyCanvas(){

classifier.classifier(canvas.gotResult);



}

function gotResult(error,results){

if(error){

console.error(error);

}

console.log(results);

document.getElementById("label").innerHTML="label:"+results[0].label;

document.getElementById("confidence").innerHTML="confidence:"+Math.round(results[0].confidence*100)+"%";

utterThis =  new SpeechSynthesisUtterance(results[0].label);

synth.speech(utterThis);

}
