
document.querySelector("#luck", "button").addEventListener("click", function(){
    var random=Math.random();
    random=random*4;
    random=Math.floor(random)+1;
    var formatrandom="nk" + random + ".png";
    var finalformat="nk/" + formatrandom;
    var img=document.querySelector(".shoe-img");
    img.setAttribute("src", finalformat); 
})