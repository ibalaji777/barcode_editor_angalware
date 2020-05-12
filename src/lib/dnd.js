//dnd 
export function dnd_listen(dnd){
    removeSelection();
    dnd.onmousedown = function(event) { 
      pauseEvent(event);
        dnd.style.position = 'absolute';
        dnd.style.zIndex = 1000;
        
    
        moveAt(event.pageX, event.pageY);
      
        function moveAt(pageX, pageY) {
          dnd.style.left = pageX - dnd.offsetWidth / 2 + 'px';
          dnd.style.top = pageY - dnd.offsetHeight / 2 + 'px';
        }
      
        function onMouseMove(event) {
          pauseEvent(event);
        event.cancelBubble = true;
        
          moveAt(event.pageX, event.pageY);
        }
      
    
        document.addEventListener('mousemove', onMouseMove);
        dnd.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          dnd.onmouseup = null;
        };
      
      };
    }
    

function pauseEvent(e){
    //  window.getSelection().removeAllRanges();
    if(e.stopPropagation) e.stopPropagation();
        if(e.preventDefault) e.preventDefault();
        e.cancelBubble=true;
        e.returnValue=false;
        return false;
    }
    function startEvent(e){
        console.log("startevent");
        e.cancelBubble=false;
        return true;
    }
    

    
    function removeSelection(){

        if (window.getSelection) {
            if (window.getSelection().empty) {  // Chrome
              window.getSelection().empty();
            } else if (window.getSelection().removeAllRanges) {  // Firefox
              window.getSelection().removeAllRanges();
            }
          } else if (document.selection) {  // IE?
            document.selection.empty();
          }
    }
