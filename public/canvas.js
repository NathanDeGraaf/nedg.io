var colors = ["purple","orange","red","yellow"];

var canvas = document.getElementById("canvas");
canvas.style.backgroundColor = 'black';
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;

var context = canvas.getContext("2d");

var Triangle = function(c1,c2,c3){
	this.c1 = c1;
	this.c2 = c2;
	this.c3 = c3;
	this.center = null;
};

var Circle = function(x,y,r,c){
	this.x = x;
	this.y = y;
	this.r = r;
	this.color = c;
	this.removed = false;
};

var Vector = function(x,y){
	this.x = x;
	this.y = y;
};

Vector.prototype = {
	magnitude: function(){
        return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
    },
	magnitudeSquared: function(){
        return Math.pow(this.x,2)+Math.pow(this.y,2);
    },
};


//Seed our program with three tangent circles
var triangles = new DoublyLinkedList();

var circle1 = new Circle(0,0,width/2,0);
var circle2 = new Circle(width,0,width/2,1);
var circle3 = new Circle(width/2,Math.sqrt(3)*width/2,width/2,2);

var triangle0 = new Triangle(circle1,circle1,circle1);
triangle0.center = circle1;
var triangle1 = new Triangle(circle2,circle2,circle2);
triangle1.center = circle2;
var triangle2 = new Triangle(circle3,circle3,circle3);
triangle2.center = circle3;
var triangle3 = new Triangle(circle1,circle2,circle3);
	
triangles.append(triangle0);
triangles.append(triangle1);
triangles.append(triangle2);
triangles.append(triangle3);

function draw(){
    // Clear screen to white.
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	
	var minCircleSize = 1;
	
	//Iterate through our triangles, drawing all circles larger than minCircleSize, and recursively creating smaller triangles
	var first = 1;
	var triangleData = triangles.head();
	while(triangleData.next!=null || first === 1){
		triangleData = triangleData.next;
		if(first){
			triangleData = triangles.head();
			first = 0;
		}
		
		var triangle = triangleData.data;
		
		//If a circle on the point of a triangle has been removed, delete the triangle to save space (triangle is too small)
		if(triangle.c1.removed || triangle.c2.removed || triangle.c3.removed){
			deleteTriangle(triangleData);
			continue;
		}
		
		var centerCircle = triangle.center; 
		if(centerCircle == null){
			centerCircle = getCenterCircle(triangle);
			
			if(centerCircle.r<minCircleSize){
				centerCircle.removed = true;
				triangle.center = null;
				continue;
			}
			
			if(!inFrame(centerCircle)) {
                continue;
            }

			//Recursively create triangles
			triangle.center = centerCircle;
			var t1 = new Triangle(centerCircle,triangle.c1,triangle.c2);
			var t2 = new Triangle(centerCircle,triangle.c1,triangle.c3);
			var t3 = new Triangle(centerCircle,triangle.c2,triangle.c3);
			triangles.append(t1);
			triangles.append(t2);
			triangles.append(t3);
		}
		
		if(centerCircle.r<minCircleSize){
			centerCircle.removed = true;
			triangle.center = null;
			continue;
		}
		
		if(!inFrame(centerCircle)) {
            continue;
		}

		drawMyCircle(centerCircle);
	}
}

function getCenterCircle(triangle){
	var c1 = triangle.c1;
	var c2 = triangle.c2;
	var c3 = triangle.c3;

	var leftBound = getAngle(c1,c2);
	var rightBound = getAngle(c1,c3);
	
	//Circles to mark the intersection points of circles c1/c2 and c1/c3
	//drawMyCircle(c1.x+c1.r*Math.cos(leftBound),c1.y+c1.r*Math.sin(leftBound),20,"purple");
	//drawMyCircle(c1.x+c1.r*Math.cos(rightBound),c1.y+c1.r*Math.sin(rightBound),20,"purple");
	
	var newCircle;
	while(Math.abs(rightBound-leftBound)>.0000001){
		var angle = (leftBound+rightBound)/2;
		if(Math.abs(angle-leftBound)>Math.PI/2) {
            angle-=Math.PI;
		}

		newCircle = getCircleOnLine(c1,c2,angle);
		
		var v4 = new Vector(newCircle.x-c3.x,newCircle.y-c3.y);
		var d = v4.magnitude();

		if(c3.r+newCircle.r === d) {
            break;
        }
		if(c3.r+newCircle.r > d) {
			rightBound = angle;
		} else {
			leftBound = angle;
		}
	}
	
	if(newCircle==null){
		// console.log("error creating circle");
		return;
	}

	newCircle.color = 6-c1.color-c2.color-c3.color;
	return newCircle;
}

//return the angle of elevation from the center of c1 towards the center of c2
function getAngle(c1,c2){
		var deltaX = c2.x - c1.x;
		var deltaY = c2.y - c1.y;
		if (deltaX === 0){
			if(deltaY > 0) {
                return Math.PI / 2;
            } else {
                return 2 * Math.PI - Math.PI / 2;
            }
		}
		if (deltaY === 0) {
			if (deltaX > 0) {
                return 0;
            } else {
                return Math.PI;
            }
		}
		var angle = Math.atan(Math.abs(deltaY / deltaX));
		var ret = 0;
		if(deltaX > 0 && deltaY > 0) {
            ret = angle;
        }
		if(deltaX > 0 && deltaY < 0) {
            ret = -angle;
        }
		if(deltaX < 0 && deltaY > 0) {
            ret = Math.PI - angle;
        }
		if(deltaX < 0 && deltaY < 0) {
            ret = angle - Math.PI;
        }
		if(ret < 0) {
            ret += 2 * Math.PI;
        }
		return ret;
}

//return a circle tangent to both c1 and c2, whose center is at the given angle from the center of c1
function getCircleOnLine(c1,c2,angle){
	var x = c1.r*Math.cos(angle) + c1.x;
	var y = c1.r*Math.sin(angle) + c1.y;
	
	var v1 = new Vector(c2.x - c1.x, c2.y-c1.y);
	var v2 = new Vector(x-c1.x, y-c1.y);
	
	var projX = (v1.x*v2.x + v1.y*v2.y) / (v2.magnitude());
	var projY = Math.sqrt(v1.magnitudeSquared()-Math.pow(projX,2));
	
	var s = projX - c1.r;
	var r = (s*s + projY*projY - c2.r*c2.r)/(2*(c2.r+s));
	return new Circle((c1.r+r)*Math.cos(angle) + c1.x , (c1.r+r)*Math.sin(angle) + c1.y,r,0);
}

function deleteTriangle(triangleData){
	var triangle = triangleData.data;
	var circle = triangle.center;
	if(circle!=null){
		circle.removed = true;
	}
	triangleData.remove();
}

function inFrame(circle){
	return !(circle.x < -circle.r || circle.y < -circle.r || circle.x > canvas.width +circle.r || circle.y > canvas.height +circle.r);
}

var middleCircleHighlight = false;
function drawMyCircle(circle){
	var x = circle.x;
	var y = circle.y;
	var r = circle.r;
	var color = colors[circle.color];
	
	
	context.beginPath();
	context.arc(x, y, r, 0, 7, false);
	context.fillStyle = color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "black";
    context.stroke();
	
	
	// Fun link stuff, can be deleted without any loss
	if(circle === triangle3.center){
		if(inMiddleCircle()){
			context.beginPath();
			context.arc(x, y, r, 0, 7, false);
			if(middleCircleHighlight) {
                context.fillStyle = "white";
            } else {
                context.fillStyle = color;
            }
			context.fill();
			context.lineWidth = 1;
			context.strokeStyle = "black";
			context.stroke();
		}
		
		context.fillStyle = "black";
		context.font = r/6 + "px Arial";

		var txts = ["Made by","Nathan De Graaf","","Click here to learn how","","Scroll and click around","to explore"];
		for(var i = 0 ; i < txts.length ; i++) {
            context.fillText(txts[i], x - context.measureText(txts[i]).width / 2, y - 3 * r / 5 + r / 5 * i);
        }
	}
	
}

canvas.onmousewheel = function (event){
/////////////////////////////////////////////////////
//This code is from csiz (http://stackoverflow.com/questions/2916081/zoom-in-on-a-point-using-scale-and-translate)
//Original code used canvas scaling and traslating, this limited how far we could zoom, so the rest of the function was rewritten
    event.preventDefault();
    // Get mouse offset.
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    // Normalize wheel to +1 or -1.
    var wheel = event.wheelDelta/120;

    // Compute zoom factor.
	var zoomIntensity = 0.2;
    var zoom = Math.exp(wheel*zoomIntensity);
///////////////////////////////////////////////////////
    
	//Do not allow user to zoom out too far
	if(zoom<1 && triangles.size() < 5) {
        return;
    }
		
	zoomCircles(zoom,x,y);
	
	draw();
};


//getRandomColor() written by Anatoliy at http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function zoomCircles(zoom,x,y){
	var tData = triangles.head();
	while(tData!=null){
		var t = tData.data;
		var c = t.center;
		if(c==null){
			tData = tData.next;
			continue;
		}
		c.x = (c.x-x)*zoom + x;
		c.y = (c.y-y)*zoom + y;
		c.r = c.r*zoom;
		tData = tData.next;
	}
}

function resize() {
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
	draw();
}


// zoom in 10 times on mouse-click, this allows for demonstration on mobile devices
canvas.addEventListener('mousedown',async function(event) {
	if(inMiddleCircle()){
		window.location = "http://www.nedg.io/about";
		return;
	}

	colors = [getRandomColor(),getRandomColor(),getRandomColor(),getRandomColor()];
    event.preventDefault();
    // Get mouse offset.
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;

    // Compute zoom factor.
	var zoomIntensity = 0.2;
    var zoom = Math.exp(zoomIntensity);
    
	var count = 0;
	while(count<10){
		zoomCircles(zoom,x,y);
		draw();
		await sleep(1);
		count++;
	}
})
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function inMiddleCircle(){
  	var v = new Vector(mouseX - triangle3.center.x,mouseY - triangle3.center.y);
	var d = v.magnitude();
	return d<triangle3.center.r;
}
window.addEventListener('resize', resize, false);

var mouseX = 0;
var mouseY = 0;
canvas.addEventListener( "mousemove", function ( e ){
  mouseX = e.clientX - canvas.offsetLeft;
  mouseY = e.clientY - canvas.offsetTop;
		if(inMiddleCircle()&& !middleCircleHighlight){
			middleCircleHighlight = true;
			canvas.style.cursor = 'pointer';
			drawMyCircle(triangle3.center);
		} else if(!inMiddleCircle() && middleCircleHighlight){
			middleCircleHighlight = false;
			canvas.style.cursor = 'default';
			drawMyCircle(triangle3.center);
		}
  
  
}, false );

draw();