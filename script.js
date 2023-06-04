let div=document.createElement("div");
div.id="line"
div.style.position="absolute"
div.style.width="200px"
div.style.height="2px"
div.style.backgroundColor="black"
div.style.animation = "rotateAnimation 2s infinite";
let body=document.getElementsByTagName("body")[0];
body.append(div);