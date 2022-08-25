var char = document.getElementById("character");
var block = document.getElementById("block");
var count = 0;
function jump(){
   if(character.classList =="animate") {return}
       character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
            block.style.animate = "none";
            // block.style.display = "none";
            alert("GAME OVER. Your Score:"+Math.floor(count/100));
            count = 0;
            block.style.animate = "block 1s infinite linear";
        }
        else{
            count++;
            document.getElementById("score").innerHTML = Math.floor(count/100);
        }
    },10);
