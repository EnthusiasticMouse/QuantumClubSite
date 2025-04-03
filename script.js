var flipped = false;
function flipContainer(){
    var box = document.getElementById("boxToFlip");
    if(flipped){
        box.style.transform = "rotateY(0)";
    }else{
        box.style.transform = "rotateY(180deg)";
    }
    flipped = !flipped;
}