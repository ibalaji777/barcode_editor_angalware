export function wygsiwyg(iframeWindow){


//shortcuts wygsiwyg added


iframeWindow.onkeydown=(event)=>{
    window.designMode = "on";
  console.log("shit")
 //66 b
  if (event.altKey&&event.keyCode == 66) {
  
        console.log("bold")
        // Execute command if user presses the SHIFT button:
      iframeWindow.execCommand("bold");
}
//73 i
if (event.altKey&&event.keyCode == 73) {
  
    console.log("bold")
    // Execute command if user presses the SHIFT button:
  iframeWindow.execCommand("italic");
}

//83 s
if (event.altKey&&event.keyCode == 83) {
  
  iframeWindow.execCommand("superscript");
}

// 80 p
if (event.altKey&&event.keyCode == 80) {
  
    iframeWindow.execCommand("subscript");
  }
  

  // 40 down arrow
if (event.altKey&&event.keyCode == 40) {
  let fontSize=0;
    // iframeWindow.execCommand("subscript");



    iframeWindow.execCommand("fontSize", false, "7");
    var fontElements = iframeWindow.getSelection().anchorNode.parentNode
   fontSize=parseFloat(getCurrentProperties(window,fontElements,'font-size'))-1;
    fontElements.removeAttribute("size");
    
    fontElements.style.fontSize = fontSize+"pt";
  
  }

// 38 up arrow
  if (event.altKey&&event.keyCode == 38) {
    let fontSize=0;
      // iframeWindow.execCommand("subscript");
  
  
  
      iframeWindow.execCommand("fontSize", false, "7");
      var fontElements = iframeWindow.getSelection().anchorNode.parentNode
     fontSize=parseFloat(getCurrentProperties(window,fontElements,'font-size'))+1;
      fontElements.removeAttribute("size");
      
      fontElements.style.fontSize = fontSize+"pt";
    
    }
  
  
  


  }
  


function getCurrentProperties(iframeWindow,el,css_property){


    var style = iframeWindow.getComputedStyle(el, null).getPropertyValue(css_property);
    var fontSize = parseInt(style);
    console.log(fontSize)
    
    //convert
 let   pt = 3/4*fontSize; 
 console.log(pt)  
 // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    // el.style.fontSize = (fontSize + 1) + 'px';
return pt;
}








}