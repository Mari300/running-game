$( document ).ready(function() {
var guy = document.getElementById("person"); 
var container = document.getElementById("container"); 
var personLeft = 0; 
var y = 0;  
function go(e) { 
if (e.keyCode == 39) { 
personLeft += 2; guy.style.left = personLeft + "px"; 
} 
else if (e.keyCode == 37) {
personLeft -= 2; guy.style.left = personLeft + "px"; 
}
else if (e.keyCode == 40) {
y += 2; guy.style.top = y + "px"; 
}
else if (e.keyCode == 38) {
y -= 2; guy.style.top = y + "px"; 
}

} document.onkeydown = go;

})