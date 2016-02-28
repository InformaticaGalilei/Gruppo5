var l; //lunghezza
var h; //altezza
var liv; //livello
var transX;
var transY;
var i;
var col;

function color(col){
	if(col==0)i=0;
	if(col==1)i=1;
	if(col==2)i=2;
	if(col==3)i=3;
	if(col==4)i=4;
	if(col==5)i=5;
	if(col==6)i=6;
	return i;
}

function resize() {
	mioCanvas = document.getElementById("canvas");
	context = mioCanvas.getContext("2d");
	l = window.innerWidth-100;
	document.getElementById('canvas').width = l;
	h = window.innerHeight-200;
	document.getElementById('canvas').height = h;
	document.getElementById('l').value=window.innerWidth-100;
	document.getElementById('h').value=window.innerHeight-200;
}

function disegno (){
	i = color();
	l = eval(document.getElementById("l").value);
	h = eval(document.getElementById("h").value);
	liv = eval(document.getElementById("liv").value);
	if (liv>7){
		window.alert("Level must be less then 8")
		return;
	}else if(i==null){
		window.alert("Select one color first")
		return;
	}
	tree(liv,l,h,i);
}
    

function tree(liv,l,h,i) {
	
	mioCanvas = document.getElementById("canvas");
	context = mioCanvas.getContext("2d");
	context.lineTo(l/4,0);
	context.lineTo(l/4,h/4);
	context.moveTo(l/4,0);
	context.lineTo(l/4,-h/4);
	context.moveTo(0,0);
	context.lineTo(-l/4,0);
	context.lineTo(-l/4,h/4);
	context.moveTo(-l/4,0);
	context.lineTo(-l/4,-h/4);
	context.moveTo(0,0);
	if(i==0){
	context.strokeStyle = "red";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==1){
	context.strokeStyle = "blue";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==2){
	context.strokeStyle = "yellow";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==3){
	context.strokeStyle = "lime";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==4){
	context.strokeStyle = "cyan";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==5){
	context.strokeStyle = "white";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==6){
	context.strokeStyle = "magenta";
	context.lineWidth=2;
	context.stroke();
	}
	
	if(liv>0) {
		context.translate(l/4, h/4);
		context.moveTo(0,0);
		tree(liv-1,l/2,h/2);
		context.translate(-l/4, -h/4);
	}
	
	if(liv>0) {
		context.translate(l/4, -h/4);
		context.moveTo(0,0);
		tree(liv-1,l/2,h/2);
		context.translate(-l/4, +h/4);
	}
	
	if(liv>0) {
		context.translate(-l/4, h/4);
		context.moveTo(0,0);
		tree(liv-1,l/2,h/2);
		context.translate(l/4, -h/4);
	}
	
	if(liv>0) {
		context.translate(-l/4, -h/4);
		context.moveTo(0,0);
		tree(liv-1,l/2,h/2);
		context.translate(l/4, h/4);
		context.moveTo(0,0);
	}
	if(i==0){
	context.strokeStyle = "red";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==1){
	context.strokeStyle = "blue";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==2){
	context.strokeStyle = "yellow";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==3){
	context.strokeStyle = "lime";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==4){
	context.strokeStyle = "cyan";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==5){
	context.strokeStyle = "white";
	context.lineWidth=2;
	context.stroke();
	}
	if(i==6){
	context.strokeStyle = "magenta";
	context.lineWidth=2;
	context.stroke();
	}
}

		
function set (){
	mioCanvas = document.getElementById("canvas");
	context = mioCanvas.getContext("2d");
	l = eval(document.getElementById("l").value);
	document.getElementById('canvas').width = l;
	h = eval(document.getElementById("h").value);
	document.getElementById('canvas').height = h;
	context.transform(1, 0, 0, -1, 0, h);
    context.translate(l/2, h/2);
	context.moveTo(0,0);
	//a=0;
}


function levelDef(){
	document.getElementById('liv').value=0;
}
