var titles = document.getElementsByClassName("title");
var heading = 90;
var topScalar = Math.sin((heading - 90) * (Math.PI / 180));
var leftScalar = Math.cos((heading - 90) * (Math.PI / 180));
for(let i = 0; i < titles.length; i++){
    titles[i].style.top = ((i * 1.5)*topScalar+40) + "px";
    titles[i].style.left = ((i * 1.5)*leftScalar + 20) + "px";
    if(i < titles.length -1){
        titles[i].style.color = "hotpink";

        titles[i].style.filter = "hue-rotate(" + (25 * i) +"deg)"
    }
}

// function updateHeading(){
//     var element = document.getElementById("angleChanger");
//     heading = element.value;
//     var topScalar = Math.sin((heading - 90) * (Math.PI / 180));
//     var leftScalar = Math.cos((heading - 90) * (Math.PI / 180));
//     for(let i = 0; i < titles.length; i++){
//         titles[i].style.top = ((i * 1.5)*topScalar+40) + "px";
//         titles[i].style.left = ((i * 1.5)*leftScalar) + "px";
//         if(i < titles.length -1){
//             titles[i].style.color = "hotpink";
    
//             titles[i].style.filter = "hue-rotate(" + (25 * i) +"deg)"
//         }
//     }
    
// }