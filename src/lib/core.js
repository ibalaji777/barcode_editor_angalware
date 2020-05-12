"use strict";

// Minimum resizable area
var minWidth = 60;
var minHeight = 40;

// Thresholds
var FULLSCREEN_MARGINS = -10;
var MARGINS = 4;

// End of what's configurable.
var clicked = null;
var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;

var rightScreenEdge, bottomScreenEdge;

var preSnapped;

var b, x, y;

var redraw = false;
// ---------------------------drag--------------- 




export function replaceString(string,obj){
   let result;
    var regex=/\${[ ]*([a-zA-Z0-9]+)[ ]*}/ig;
let new_string=string;
    // var str = "The rain in ${SPAIN} stays ${mainly} in the plain"; 
    var res = string.match(regex);
    console.log(res)
    if(res!=null){

    for (const match of res) {
    console.log(regex.test(match))
    var mat=match.match(regex);

if(obj[RegExp.$1]!=undefined){
     result = new_string.replace(/\${[ ]*([a-zA-Z0-9]+)[ ]*}/i,obj[RegExp.$1]);
     new_string=result;
    }
    

     //replace
    }
}

return new_string; 
}


export function dnd_transfer(element,doc){

// var el= element.cloneNode(true);

// console.log(el)
// el.removeAttribute("id");
// Get full markup (like outerHTML, but better-supported)
//
element.setAttribute('draggable','true')
//draggable

 //destination
 doc.addEventListener('dragover',(e)=>{
allowDrop(e)
})
 

doc.addEventListener('drop',(e)=>{
drop(e)
})

 
 
    function allowDrop(ev) {
  ev.preventDefault();
}

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

function drop(ev) {
  ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
  ev.target.insertAdjacentHTML('beforeend',element_to_string(element));
}


function element_to_string(element){


    // var element =element;
var elementToString;

if (element.outerHTML)
    elementToString = element.outerHTML;
else if (XMLSerializer)
    elementToString = new XMLSerializer().serializeToString(element); var element = document.getElementById("id");
        return elementToString;

    }


}






export function dnd(doc,pane,response_model){

    /*
 * @author https://twitter.com/blurspline / https://github.com/zz85
 * See post @ http://www.lab4games.net/zz85/blog/2014/11/15/resizing-moving-snapping-windows-with-js-css/
 */

//creating ghost pane
if(!doc.getElementById("ghostpane")){
var create_element=doc.createElement("div");
create_element.setAttribute("id","ghostpane");
// iframeWindow.getElementById('ghostpane')
console.log(doc.body)
doc.body.appendChild(create_element);
}

var ghostpane=doc.getElementById("ghostpane");
function setBounds(name,element, x, y, w, h) {

let    obj={
    name:name,
x:x,
y:y,
width:w,
height:h
    }
	element.style.left = x + 'px';
	element.style.top = y + 'px';
	element.style.width = w + 'px';
    element.style.height = h + 'px';
    response_model(obj)
}

function hintHide() {
  setBounds("hint",ghostpane, b.left, b.top, b.width, b.height);
  ghostpane.style.opacity = 0;

}


// Mouse events
pane.addEventListener('mousedown', onMouseDown);
doc.addEventListener('mousemove', onMove);
doc.addEventListener('mouseup', onUp);

// Touch events	
pane.addEventListener('touchstart', onTouchDown);
doc.addEventListener('touchmove', onTouchMove);
doc.addEventListener('touchend', onTouchEnd);


function onTouchDown(e) {
  onDown(e.touches[0]);
  e.preventDefault();
}

function onTouchMove(e) {
  onMove(e.touches[0]);		
}

function onTouchEnd(e) {
  if (e.touches.length ==0) onUp(e.changedTouches[0]);
}

function onMouseDown(e) {
  onDown(e);
  e.preventDefault();
}

function onDown(e) {
  calc(e);

  var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;

  clicked = {
    x: x,
    y: y,
    cx: e.clientX,
    cy: e.clientY,
    w: b.width,
    h: b.height,
    isResizing: isResizing,
    isMoving: !isResizing && canMove(),
    onTopEdge: onTopEdge,
    onLeftEdge: onLeftEdge,
    onRightEdge: onRightEdge,
    onBottomEdge: onBottomEdge
  };
}

function canMove() {
  return x > 0 && x < b.width && y > 0 && y < b.height
  && y < 30;
}

function calc(e) {
  b = pane.getBoundingClientRect();
  x = e.clientX - b.left;
  y = e.clientY - b.top;

  onTopEdge = y < MARGINS;
  onLeftEdge = x < MARGINS;
  onRightEdge = x >= b.width - MARGINS;
  onBottomEdge = y >= b.height - MARGINS;

  rightScreenEdge = window.innerWidth - MARGINS;
  bottomScreenEdge = window.innerHeight - MARGINS;
}

var e;

function onMove(ee) {
  calc(ee);

  e = ee;

  redraw = true;

}

function animate() {

  requestAnimationFrame(animate);

  if (!redraw) return;

  redraw = false;

  if (clicked && clicked.isResizing) {

    if (clicked.onRightEdge) pane.style.width = Math.max(x, minWidth) + 'px';
    if (clicked.onBottomEdge) pane.style.height = Math.max(y, minHeight) + 'px';

    if (clicked.onLeftEdge) {
      var currentWidth = Math.max(clicked.cx - e.clientX  + clicked.w, minWidth);
      if (currentWidth > minWidth) {
        pane.style.width = currentWidth + 'px';
        pane.style.left = e.clientX + 'px';	
      }
    }

    if (clicked.onTopEdge) {
      var currentHeight = Math.max(clicked.cy - e.clientY  + clicked.h, minHeight);
      if (currentHeight > minHeight) {
        pane.style.height = currentHeight + 'px';
        pane.style.top = e.clientY + 'px';	
      }
    }

    hintHide();

    return;
  }

  if (clicked && clicked.isMoving) {

    if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
      // hintFull();
      setBounds("hint bt",ghostpane, 0, 0, window.innerWidth, window.innerHeight);
      ghostpane.style.opacity = 0.2;
    } else if (b.top < MARGINS) {
      // hintTop();
      setBounds("hint b.top < MARGINS",ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
      ghostpane.style.opacity = 0.2;
    } else if (b.left < MARGINS) {
      // hintLeft();
      setBounds("hint b.left < MARGINS",ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
      ghostpane.style.opacity = 0.2;
    } else if (b.right > rightScreenEdge) {
      // hintRight();
      setBounds("hint b.right > rightScreenEdge",ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
      ghostpane.style.opacity = 0.2;
    } else if (b.bottom > bottomScreenEdge) {
      // hintBottom();
      setBounds("hint b.bottom > bottomScreenEdge",ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
      ghostpane.style.opacity = 0.2;
    } else {
      hintHide();
    }

    if (preSnapped) {
      setBounds("total",pane,
      	e.clientX - preSnapped.width / 2,
      	e.clientY - Math.min(clicked.y, preSnapped.height),
      	preSnapped.width,
      	preSnapped.height
      );
      return;
    }

    // moving
    pane.style.top = (e.clientY - clicked.y) + 'px';
    pane.style.left = (e.clientX - clicked.x) + 'px';

    return;
  }

  // This code executes when mouse moves without clicking

  // style cursor
  if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
    pane.style.cursor = 'nwse-resize';
  } else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
    pane.style.cursor = 'nesw-resize';
  } else if (onRightEdge || onLeftEdge) {
    pane.style.cursor = 'ew-resize';
  } else if (onBottomEdge || onTopEdge) {
    pane.style.cursor = 'ns-resize';
  } else if (canMove()) {
    pane.style.cursor = 'move';
  } else {
    pane.style.cursor = 'default';
  }
}

animate();

function onUp(e) {
  calc(e);
//   response_model(clicked);
  if (clicked && clicked.isMoving) {
    // Snap
    var snapped = {
      width: b.width,
      height: b.height
    };

    if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
      // hintFull();
      setBounds("btp"+pane, 0, 0, window.innerWidth, window.innerHeight);
      preSnapped = snapped;
    } else if (b.top < MARGINS) {
      // hintTop();
      setBounds("b.top < MARGINS"+pane, 0, 0, window.innerWidth, window.innerHeight / 2);
      preSnapped = snapped;
    } else if (b.left < MARGINS) {
      // hintLeft();
      setBounds("b.left < MARGINS"+pane, 0, 0, window.innerWidth / 2, window.innerHeight);
      preSnapped = snapped;
    } else if (b.right > rightScreenEdge) {
      // hintRight();
      setBounds("b.right > rightScreenEdge",pane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
      preSnapped = snapped;
    } else if (b.bottom > bottomScreenEdge) {
      // hintBottom();
      setBounds("b.bottom > bottomScreenEdge",pane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
      preSnapped = snapped;
    } else {
      preSnapped = null;
    }

    hintHide();

  }


  clicked = null;

}




}