var img = document.getElementById("banner").children[0];
document.getElementById("banner").style.position = "relative";
//console.log(img);
img.style.position = "relative";
img.style.left = 0;
var i = 1;
var j = 1;
img.style.transition= "all 1s ease";
setInterval(function(){
	if(i==5 && j==5){i = 1;j = 1}
	if(j < 5) left();
	else right();
	console.log("i="+i+",j="+j)
},3000)

function right(){
	img.style.left = img.offsetLeft + 1130 + "px";
	i++;
}

function left(){
	img.style.left = img.offsetLeft - 1130 + "px";
	j++;
}
