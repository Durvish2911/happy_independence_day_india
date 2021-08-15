function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    india=ml5.imageClassifier("https://storage.googleapis.com/tm-model/4xRV8RST8/model.json",model_masale);
}
function model_masale(){
    console.log("hi how are model is loaded regards Durvish");
}
function draw(){
    image(video,0,0,300,300);
    india.classify(video,gotposes)
}
function gotposes(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}