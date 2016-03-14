var l; //base triangolo
var h; //altezza triangolo
var liv; //livello
var dx; //larghezza finestra
var q; //altezza finestra
var px; //x di p
var py; //y di p
var transX;
var transY;
var i;
var col;
var a;
var b;
var c;
var d;
var contentdx;
var contentq;

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

function disegno (){
	d=1;
	set();
	if (c==1){
		return;
	}else if(canvas.width<canvas.height){
		dx = eval(document.getElementById("dx").value)*2;
		} else {
	dx = eval(document.getElementById("q").value)*2;
		}
	l=dx/2;
	h = l*Math.sqrt(3)/2; 
	px=-l/2;
	py=-h/2;
	i = color();
	if(i==null){
		i=5;
	}
	liv = eval(document.getElementById("liv").value);
	
	
	if (liv>7){
		window.alert("Level must be less then 7")
		return;
	}
	
	sier(liv,px,py,l,h,i);

}
    

function sier(liv,px,py,l,h,i) {
	
	mioCanvas = document.getElementById("canvas");
	context = mioCanvas.getContext("2d");
	if(liv==0){
		context.moveTo(px,py);
		context.lineTo(px+l,py);
		context.lineTo(px+l/2,py+h);
		context.lineTo(px,py);
		context.moveTo(px+l/2,py+h/2);
		if(i==0){
		context.strokeStyle = "red";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "red";
		context.fill();
		}
		if(i==1){
		context.strokeStyle = "blue";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "blue";
		context.fill();
		}
		if(i==2){
		context.strokeStyle = "yellow";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "yellow";
		context.fill();
		}
		if(i==3){
		context.strokeStyle = "lime";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "lime";
		context.fill();
		}
		if(i==4){
		context.strokeStyle = "cyan";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "cyan";
		context.fill();
		}
		if(i==5){
		context.strokeStyle = "white";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "white";
		context.fill();
		}
		if(i==6){
		context.strokeStyle = "magenta";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "magenta";
		context.fill();
		}
		
	} else{
		sier(liv-1,px,py,l/2,h/2);
		sier(liv-1,px+l/2,py,l/2,h/2);
		sier(liv-1,px+l/4,py+h/2,l/2,h/2);
		if(i==0){
		context.strokeStyle = "red";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "red";
		context.fill();
		}
		if(i==1){
		context.strokeStyle = "blue";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "blue";
		context.fill();
		}
		if(i==2){
		context.strokeStyle = "yellow";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "yellow";
		context.fill();
		}
		if(i==3){
		context.strokeStyle = "lime";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "lime";
		context.fill();
		}
		if(i==4){
		context.strokeStyle = "cyan";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "cyan";
		context.fill();
		}
		if(i==5){
		context.strokeStyle = "white";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "white";
		context.fill();
		}
		if(i==6){
		context.strokeStyle = "magenta";
		context.lineWidth=2;
		context.stroke();
		context.fillStyle = "magenta";
		context.fill();
		}
	}
	
}


function resize() {
	mioCanvas = document.getElementById("canvas");
	context = mioCanvas.getContext("2d");
	q = window.innerHeight-200;
	document.getElementById('canvas').height = q;
	dx = window.innerWidth-100;
	document.getElementById('canvas').width = dx;
	document.getElementById('dx').value=dx;
	document.getElementById('q').value=q;
}
		
function set (){
	c=0;
	mioCanvas = document.getElementById("canvas");
	context = mioCanvas.getContext("2d");
	a = window.innerWidth-100;
	b = window.innerHeight-200;
	q = eval(document.getElementById("q").value);
	dx = eval(document.getElementById("dx").value);
	contentdx = window.innerWidth-100;
	contentq = window.innerHeight-200;
	if(dx>a){
		window.alert("Width value is too hight, it must be less then " + contentdx)
		document.getElementById('dx').value=window.innerWidth-100;
		c=1;
		return;
		}else if (q>b){
		window.alert("Height value is too hight, it must be less then " + contentq)
		document.getElementById('q').value=window.innerHeight-200;
		c=1;
		return;
			}
	q = eval(document.getElementById("q").value);
	document.getElementById('canvas').height = q;
	dx = eval(document.getElementById("dx").value);
	document.getElementById('canvas').width = dx;
	context.transform(1, 0, 0, -1, 0, q);
    context.translate(dx/2, q/2);
	context.moveTo(0,0);
}


function levelDef(){
	document.getElementById('liv').value=0;
	i=null;
}

function savelv(){
	sliv = eval(document.getElementById("liv").value);
}

function redraw(){
	if(d==1){
		disegno2();
	}else{
		return;
	}
}

function disegno2 (){
	d=1;
	set();
	if (c==1){
		return;
	}else if(canvas.width<canvas.height){
		dx = eval(document.getElementById("dx").value)*2;
		} else {
	dx = eval(document.getElementById("q").value)*2;
		}
	l=dx/2;
	h = l*Math.sqrt(3)/2; 
	px=-l/2;
	py=-h/2;
	i = color();
	if(i==null){
		i=5;
	}
	liv = sliv;
	
	
	if (liv>7){
		window.alert("Level must be less then 7")
		return;
	}
	
	sier(liv,px,py,l,h,i);

}
