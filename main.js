function Answer(){
 navigator.mediaDevices.getUserMedia({audio:true});
    my_model= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-UJVRpsnv/model.json',modelReady)
}

function modelReady(){
my_model.classify(gotResults);
}
function gotResults(error,results){
if(error){console.log(error);}
else{
    console.log(results);
document.getElementById("sound_ka_naam").innerHTML="I can hear"+results[0].label;
document.getElementById("accuracy").innerHTML="confidence "+(results[0].confidence*100).toFixed(2)+" %";
i1=document.getElementById("an1");
i2=document.getElementById("an2");
i3=document.getElementById("an3");
i4=document.getElementById("an4");
if(results[0].label=="Sheep"){
i1.src="bakri gif.gif";
i2.src="billi static.jpg";
i3.src="dog static.png";
i4.src="janvar.jpg";
}
else if(results[0].label=="Cat"){
    i1.src="bakri static.jpg";
    i2.src="cat gif.gif";
    i3.src="dog static.png";
    i4.src="janvar.jpg";
    }
    else if(results[0].label=="Dog"){
        i1.src="bakri static.jpg";
        i2.src="billi static.jpg";
        i3.src="dog gif.gif";
        i4.src="janvar.jpg";
        }
else{
    i1.src="bakri static.jpg";
    i2.src="billi static.jpg";
    i3.src="dog static.png";
    i4.src="bg gif.gif";




}






}

}