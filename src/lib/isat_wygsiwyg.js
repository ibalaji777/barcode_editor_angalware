// isat_wygsiwyg_();
  export function isat_wygsiwyg_(){
    
    console.log("run isat wygsiwyg")
    
   
    
    
    
            var lastelem;
    
            document.onmouseover = function (e) {
    
              var isat_parameter=document.getElementById("isat_parameter");
    
    
    
     var elementOnMouseOver = getClosest(e.target, '.isat_editable_content');
// console.log(elementOnMouseOver)
// console.log()
     if (lastelem) {
    
                            lastelem.style.border = "none";
    
    
    
    
    
                    }
    
    
    try {
    
    //  -----------------------------------------------isat_wysiwyg_finder-----------------------------------------------------
    
    var isat_editable_content=elementOnMouseOver.getAttribute("isat_editable_content");
    
    //  -----------------------------------------------isat_wysiwyg_finder_end---------------------------------------------------
    
    } catch (error) {
    console.log("");
    }
    
    
    
    
    
    if(isat_editable_content=="isat_editable_content")
    {
    
    elementOnMouseOver.style.border = "3px dotted #FFC038";
    // document.querySelector(".tooltipp").style.position="absolute";
    lastelem = elementOnMouseOver;
    // i=increment(i);
    console.log("isat_debug:isat_editable_content");
    
    
    
    
    
            // var elementOnMouseOver = document.elementFromPoint(x, y);
            elementOnMouseOver.addEventListener('mousedown', function() {
    try {
    
    var last_edit=document.getElementById("main-input");
    console.log("isat_debug:last_edited_id"+last_edit)
    last_edit.removeAttribute("contenteditable");
    last_edit.removeAttribute("autofoucs");
    last_edit.removeAttribute("id");
    last_edit.removeAttribute("ref");
    // last_edit.removeAttribute("tabindex");
    
    
    
    } catch (error) {
    
        console.log("");
    }
    
    var mtimestamp=Math.floor(Math.random() * 90 + 10)
    // var mtimestamp = new Date().getUTCMilliseconds();
    isat_parameter.myParam = mtimestamp;
    
    elementOnMouseOver.setAttribute("id","main-input");
    
    
    
    elementOnMouseOver.setAttribute("contenteditable","true");
    
    
    // part code 10
    
    
    elementOnMouseOver.setAttribute("ref","search");
    
    try {
    
    
    var isat_editable=document.getElementById("main-input");
    isat_editable.focus();
    
    isat_editable.onblur=function()
    {
    // isat_editable.focus();
    
    }
    
    } catch (error) {
    
        console.log("")
    }
    
    
    
    
    
    }, false);
    

    // elementOnMouseOver.onfocus=function(){


    //     alert(document.getElementById("main-input").innerHTML)
    //         }
    elementOnMouseOver.onkeyup=function(){

        get_final_html()
    }
    
    elementOnMouseOver.onmousedown=function()
    {
    
    isat_wygsiwyg();


    }
    
    }
    
    
    
            }
    
    
    
    
            //2nd method-----------------------------------------------------------------------------------------------------------------------------
    
    
    
            // activate tooltip
    
    
    
    
    
    
    
    
    
    
    
    var range = null;
    
    document.addEventListener('selectionchange', function(event) {
        var taget = event.target;
        if (taget.activeElement.id == 'main-input') {
            range = getSelectionRange();
        }
    });
    
    function isIE() {
        return document.all || (!!window.MSInputMethodContext && !!document.documentMode);
    }
    
    
    function isat_Command_execute(isat_custom_command){
    
    
    try {
      var isat=document.getElementById("main-input");
    
      isat.focus();
    } catch (error) {
    
    
    console.log("");
    }
    
    
    
    var object=JSON.parse(isat_custom_command);
    console.log(object);
    var isat_commands=object.isat_commands;
    var gui=object.gui;
    var value=object.value;
    console.log(isat_commands);
    console.log(gui);
    console.log(value);
    document.execCommand(isat_commands,Boolean(gui),value);
    }
    function isat_Command_engine(isat_command) {
        if (document.getSelection() != "") {
            document.execCommand(isat_command);
        } else {
            var s = null;
            if (window.getSelection) {
                s = window.getSelection();
            } else {
                s = document.getSelection();
            }
    
            if (isIE()) {
                var selRange = s.getRangeAt(0);
    
                //Insert node with dummy text 'd'
                var newNode = document.createTextNode('d');
                selRange.insertNode(newNode);
                s.removeAllRanges();
                s.addRange(selRange);
    
                //Execute command on dummy
                document.execCommand(isat_command);
    
                //Delete dummy from range
                selRange.setStart(newNode, 0);
                selRange.setEnd(newNode, 1);
                selRange.deleteContents();
    
                s.removeAllRanges();
                s.addRange(selRange);
            } else {
                if (range == null) {
                    range = document.createRange();
                }
                s.removeAllRanges();
                s.addRange(range);
                document.execCommand(isat_command);
            }
        }
    }
    
    function getSelectionRange() {
        var sel;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                return sel.getRangeAt(0);
            }
        } else if (document.selection) {
            return document.createRange();
        }
    
        return null;
    }
    
    
    function isat_wygsiwyg(){
    
    
    var isat_savedSelection, restoreSelection;
    
    try {
    
    var isat=document.getElementById("main-input");
    
    isat.focus();
    
    } catch (error) {
    
        console.log("");
    }
    
    
    
    
    
    // new task i2
    function getComputedStyleProperty(el, propName) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null)[propName];
        } else if (el.currentStyle) {
            return el.currentStyle[propName];
        }
    }
    
    function reportColourAndFontSize() {
        var containerEl, sel;
        if (window.getSelection) {
            sel = window.getSelection();
            if (sel.rangeCount) {
                containerEl = sel.getRangeAt(0).commonAncestorContainer;
                // Make sure we have an element rather than a text node
                if (containerEl.nodeType == 3) {
                    containerEl = containerEl.parentNode;
                }
            }
        } else if ( (sel = document.selection) && sel.type != "Control") {
            containerEl = sel.createRange().parentElement();
        }
    
        if (containerEl) {
            var fontSize = getComputedStyleProperty(containerEl, "fontSize");
            // var colour = getComputedStyleProperty(containerEl, "color");
            var lineHeight=getComputedStyleProperty(containerEl,"lineHeight");
            // var letter_spacing=getComputedStyleProperty(containerEl,"letterSpacing");
                    var font_weight=getComputedStyleProperty(containerEl,"fontWeight");
            // alert("Colour: " + colour + ", font size: " + parseFloat(fontSize) );
if(document.getElementById("isat-line-height")){
            document.getElementById("isat-line-height").value=parseFloat(lineHeight)
          
  }
  if(document.getElementById("isat-fontsize")){
    document.getElementById("isat-fontsize").value=parseFloat(fontSize)
  }  

if(document.getElementById("isat-font-weight")){
    document.getElementById("isat-font-weight").value=parseFloat(font_weight)
}  
        //    document.getElementById("isat-letter-spacing").value=parseFloat(letter_spacing)
        }
    }
    
    
    // end new task i2
    
    
    
    
    //get current font type and thier styles
    //this code is developed by balaji at isat software solutions
    isat.onmouseup=function(){
    
    //  var colour = document.queryCommandValue("ForeColor");
        // var fontSize = document.queryCommandValue("FontSize");
        //    var fontname = document.queryCommandValue("fontname");
        //    console.log("font name====>"+fontname);
    reportColourAndFontSize();
        // var selected=document.getElementById("isat-fontfamily").value=fontname.replace(/"/ig, '');;
    
    //   var isat_color_changer=document.getElementById("isat_color_changer");
      // isat_color_changer.removeAttribute("acp-color");
    //   isat_color_changer.setAttribute("acp-color",colour);
    
          //  alert("Colour: " + colour + ", font size: " + fontSize+"colour"+fontname);
    }
    
    
    console.log("isat_debug:isat_wygsiwyg_started");
    
    
    
    
    
    
    
    
    
    
    
    let isat_header=document.getElementById("isat-headers");
    
    
    if(isat_header){
    isat_header.addEventListener("change", function(){
        var selected=document.getElementById("isat-headers").value;
    
    try {
    
    isat.focus();
    
    } catch (error) {
        console.log("")
    
    }
    var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"'+selected+'"}';
    isat_Command_execute(isat_custom_command);
    
    // document.execCommand('formatBlock', false, selected);
    
    
    get_final_html()
    // console.log(isat_r_id);
    
    });
}
    
    
    //alignment------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    //developed by balaji at isat software solution
    
    //hire me :6380188237
    
    let isat_left=document.getElementById("isat-left");
   if(isat_left){
    isat_left.addEventListener("click", function(){
    
    try {
        isat.focus();
    } catch (error) {
    console.log("")
    }
    
    var isat_command="justifyLeft";
    isat_Command_engine(isat_command);
    get_final_html()
    
    // document.execCommand("justifyLeft",false,null);
    });
}

let isat_jfull=document.getElementById("isat-jfull")    
if(isat_jfull){
isat_jfull.addEventListener("click", function(){
    
    
    // document.execCommand("justifyFull",false,null);
    
    try {
    
    isat.focus();
    } catch (error) {
    console.log("");
    }
    var isat_command="justifyFull";
    isat_Command_engine(isat_command);
    
    get_final_html()
    });
}
    
   let isat_center= document.getElementById("isat-center"); 
   if(isat_center){
   isat_center.addEventListener("click", function(){
    
    // document.execCommand("justifyCenter",false,null);
    
    try {
    
    isat.focus();
    } catch (error) {
    console.log("")
    }
    var isat_command="justifyCenter";
    isat_Command_engine(isat_command);
    get_final_html()
    
    });
}
var isat_right=document.getElementById("isat-right");    
if(isat_right){
isat_right.addEventListener("click", function(){
    
    
    try {
        isat.focus();
    } catch (error) {
    console.log("")
    }
    
    var isat_command="justifyRight";
    isat_Command_engine(isat_command);
    
    
    
    // document.execCommand("justifyRight",false,null);
    get_final_html()
    });
    
}
    // bold,italic header tags-----------------------------------------------------------------------------------------------------------------------------------------------
    //developed by  balaji at isat software solutions
    
    //hire me:6380188237
    
    
    //font family
   var isat_fontfamily=document.getElementById("isat-fontfamily");
   if(isat_fontfamily){    isat_fontfamily.addEventListener("change", function(){
        var selected=document.getElementById("isat-fontfamily");
    
    try {
      isat.focus();
    } catch (error) {
    
        console.log("");
    }
    
    // Load a Google font by name.
    // var loadFont = function(font) {
    //   WebFont.load({
    //     google: {
    //       families: [font]
    //     }
    //   });
    // };
    
    // loadFont(selected.value);
    
    
    
    
    var  isat_custom_command='{"isat_commands":"fontName","gui":false,"value":"'+selected.value+'"}';
    isat_Command_execute(isat_custom_command);
    
    
    console.log(selected.innerHTML);
    //  document.execCommand("fontName", false, selected);
    
    get_final_html()
    
    
    });
    
}
    
    
 var isat_underline=document.getElementById("isat-underline");   
if(isat_underline)
{ isat_underline.addEventListener("click", function(){
    
    //   document.execCommand("underline",false,null);
    
    try {
    
    isat.focus();
    } catch (error) {
    
        console.log("");
    }
    var isat_command="underline";
    isat_Command_engine(isat_command);
    
    
    
    
    
    console.log("clicked underline")
    get_final_html()   
});
    
    
    
    var isat_unorderlist=document.getElementById("isat-boost_insertUnorderedList");
    
    if(isat_unorderlist){
    isat_unorderlist.addEventListener("click", function(){
    
    console.log("isat_debug:unorderlist_activated");
    try {
      isat.focus();
    } catch (error) {
    console.log("")
    }
    document.designMode = "on";
    
    document.execCommand('styleWithCSS',false,true);
    document.execCommand("insertUnorderedList",false,null);
    
    // var isat_command="insertUnorderedList";
    // isat_Command_engine(isat_command);
    document.designMode = "off";
    isat.focus();
    get_final_html()
    });
}   
}
   var isat_insertorderList= document.getElementById("isat-insertOrderedList"); 
    if(isat_insertorderList){
   isat_insertorderList.addEventListener("click", function(){
    
    // document.execCommand("insertOrderedList",false,null);
    
    try {
    
    isat.focus();
    } catch (error) {
    
        console.log("");
    }
    
    document.designMode = "on";
    
    document.execCommand('styleWithCSS',false,true);
    document.execCommand("insertOrderedList",false,null);
    
    
    document.designMode = "off";
    isat.focus();
    // var isat_command="insertOrderedList";
    
    // document.execCommand('styleWithCSS',false,true);
    // isat_Command_engine(isat_command);
    get_final_html()
    });
    
    }
    
    
    var isat_indent=document.getElementById("isat-indent");
    if(isat_indent){
    isat_indent.addEventListener("click", function(){
    
    
    // document.execCommand("indent",false,null);
    
    try {
    
    isat.focus();
    } catch (error) {
    console.log("");
    }
    var isat_command="indent";
    isat_Command_engine(isat_command);
   
    get_final_html()});
    
}
 
var isat_outdent= document.getElementById("isat-outdent");
if(isat_outdent){   
isat_outdent.addEventListener("click", function(){
    
    // document.execCommand("outdent",false,null);
    
    try {
    
    isat.focus();
    } catch (error) {
    console.log("");
    }
    var isat_command="outdent";
    isat_Command_engine(isat_command);
    get_final_html()
    
    });
}

var isat_strikeThrough=document.getElementById("isat-strikeThrough");
    if(isat_strikeThrough){
isat_strikeThrough.addEventListener("click", function(){
    
    
    //   document.execCommand("strikeThrough",false,null);
    
    
    try {
    
    isat.focus();
    } catch (error) {
    console.log("");
    }
    var isat_command="strikeThrough";
    isat_Command_engine(isat_command);
    
    get_final_html()
    
    
    });
    
}
    
    //new task
    var isat_font_weight= document.getElementById("isat-font-weight");
   if(isat_font_weight){
    isat_font_weight.addEventListener("change", function(){
        var selected=document.getElementById("isat-font-weight").value;
    
    try {
    
    isat.focus();
    
    } catch (error) {
    console.log("");
    }
    
        // var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"span"}';
    // isat_Command_execute(isat_custom_command);
             var  selectedElement = window.getSelection().focusNode.parentNode;
                    selectedElement.style.fontWeight = selected;
    
    
                    get_final_html()
    
    });
    
    
}

var isat_fontsize_inv=document.querySelectorAll(".isat_fontsize_inv")[0];
    if(isat_fontsize_inv){
    isat_fontsize_inv.addEventListener("click",function () {
    
    // alert(document.getElementById("isat-fontsize").value)
    try {
    
        var isat=document.getElementById("main-input");
        // event.preventDefault();
        isat.focus();
    
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    
    
        restoreSelection(isat, isat_savedSelection);
        // restoreSelection(isat, isatExec_savedSelection);
    
        } catch (error) {
    
            console.log("");
          }
        // document.execCommand("fontSize", false, document.getElementById("isat-fontsize").value);
       document.execCommand('formatblock', false, 'span');
             var  selectedElement = window.getSelection().focusNode.parentNode;
                    selectedElement.style.fontSize = document.getElementById("isat-fontsize").value+'px';
                    get_final_html()
                })
}

var isat_fontsize_inv_1= document.querySelectorAll(".isat_fontsize_inv")[1];
if(isat_fontsize_inv_1){  
isat_fontsize_inv_1.addEventListener("click",function () {
    
    // alert(document.getElementById("isat-fontsize").value)
    try {
    
        var isat=document.getElementById("main-input");
        // event.preventDefault();
        isat.focus();
    
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    
    
        restoreSelection(isat, isat_savedSelection);
        // restoreSelection(isat, isatExec_savedSelection);
    
        } catch (error) {
    console.log("");
          }
        // document.execCommand("fontSize", false, document.getElementById("isat-fontsize").value);
       document.execCommand('formatblock', false, 'span');
             var  selectedElement = window.getSelection().focusNode.parentNode;
                    selectedElement.style.fontSize = document.getElementById("isat-fontsize").value+'px';
                    get_final_html()
                })
}

var isat_line_height_0=document.querySelectorAll(".isat-line-height-inv")[0];
    if(isat_line_height_0){
isat_line_height_0.addEventListener("click",function () {
    
    // alert(document.getElementById("isat-fontsize").value)
    try {
    
        var isat=document.getElementById("main-input");
        // event.preventDefault();
        isat.focus();
    
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    
    
        restoreSelection(isat, isat_savedSelection);
        // restoreSelection(isat, isatExec_savedSelection);
    
        } catch (error) {
    console.log("");
          }
        // document.execCommand("fontSize", false, document.getElementById("isat-fontsize").value);
    
            // document.execCommand("lineHeight", false, document.getElementById("isat-line-height").value);
    
    document.execCommand('formatblock', false, 'span');
             var  selectedElement = window.getSelection().focusNode.parentNode;
                    selectedElement.style.lineHeight = document.getElementById("isat-line-height").value+'px';
                    get_final_html()
                })
}


var isat_line_height_1=document.querySelectorAll(".isat-line-height-inv")[1];
    if(isat_line_height_1){
isat_line_height_1.addEventListener("click",function () {
    
    // alert(document.getElementById("isat-fontsize").value)
    try {
    
        var isat=document.getElementById("main-input");
        // event.preventDefault();
        isat.focus();
    
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    
    
        restoreSelection(isat, isat_savedSelection);
        // restoreSelection(isat, isatExec_savedSelection);
    
        } catch (error) {
    console.log("");
          }
        // document.execCommand("fontSize", false, document.getElementById("isat-fontsize").value);
       document.execCommand('formatblock', false, 'span');
             var  selectedElement = window.getSelection().focusNode.parentNode;
                    selectedElement.style.lineHeight = document.getElementById("isat-line-height").value+'px';
                    get_final_html()
                })
    
}

var isat_letter_spacing_0=document.querySelectorAll(".isat-letter-spacing-inv")[0];
    if(isat_letter_spacing_0){
isat_letter_spacing_0.addEventListener("click",function () {
    
    // alert(document.getElementById("isat-fontsize").value)
    try {
    
        var isat=document.getElementById("main-input");
        // event.preventDefault();
        isat.focus();
    
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    
    
        restoreSelection(isat, isat_savedSelection);
        // restoreSelection(isat, isatExec_savedSelection);
    
        } catch (error) {
    
            console.log("");
          }
        // document.execCommand("fontSize", false, document.getElementById("isat-fontsize").value);
       document.execCommand('formatblock', false, 'span');
             var  selectedElement = window.getSelection().focusNode.parentNode;
                    selectedElement.style.letterSpacing = document.getElementById("isat-letter-spacing").value+'px';
   get_final_html()
                })
    
    document.querySelectorAll(".isat-letter-spacing-inv")[1].addEventListener("click",function () {
    
    // alert(document.getElementById("isat-fontsize").value)
    try {
    
        var isat=document.getElementById("main-input");
        // event.preventDefault();
        isat.focus();
    
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    
    
        restoreSelection(isat, isat_savedSelection);
        // restoreSelection(isat, isatExec_savedSelection);
    
        } catch (error) {
    
            console.log("");
          }
        // document.execCommand("fontSize", false, document.getElementById("isat-fontsize").value);
       document.execCommand('formatblock', false, 'span');
             var  selectedElement = window.getSelection().focusNode.parentNode;
                    selectedElement.style.letterSpacing = document.getElementById("isat-letter-spacing").value+'px';
    })
    
}

var isat_bold=document.getElementById("isat-bold")
    if(isat_bold){
    isat_bold.addEventListener("click", function(){
    
    event.preventDefault();
    
    
        var elem = document.getElementById("main-input");
    
    
    elem.focus();
        // if(elem != null) {
        //     if(elem.createTextRange) {
        //         var range = elem.createTextRange();
        //         range.move('character',var caretPos);
        //         range.select();
        //     }
        //     else {
        //         if(elem.selectionStart) {
        //             elem.focus();
        //             elem.setSelectionRange(caretPos, caretPos);
        //         }
        //         else
        //             elem.focus();
        //     }
    
        // }
    
    var isat_command="bold";
    isat_Command_engine(isat_command);
    
    
    
        // var elem = document.getElementById("main-input");
    
        // if(elem != null) {
        //     if(elem.createTextRange) {
        //         var range = elem.createTextRange();
        //         range.move('character', caretPos);
        //         range.select();
        //     }
        //     else {
        //         if(elem.selectionStart) {
        //             elem.focus();
        //             elem.setSelectionRange(caretPos, caretPos);
        //         }
        //         else
        //             elem.focus();
        //     }
        // }
    
    
    
    
    
    
        get_final_html();
    
    });
}

var isat_italic=document.getElementById("isat-italic");
if(isat_italic) {  
isat_italic.addEventListener("click", function(){
    
    var sel = window.getSelection();
    //   document.execCommand("italic",false,null);
    var isat_command="italic";
    isat_Command_engine(isat_command);
    sel.focusOffset;
    
    // isat.focus();
    get_final_html();    
});
    
}

var isat_header_1=document.getElementById("isat-header-1");
if(isat_header_1){
isat_header_1.addEventListener("click", function(){
    
    
    
    var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"h1"}';
    isat_Command_execute(isat_custom_command);
    //  document.execCommand('formatBlock', false, 'h1');
    get_final_html();
    
    });
    
}

var isat_p= document.getElementById("isat-p");
if(isat_p){
   isat_p.addEventListener("click", function(){
    
    
    
    var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"p"}';
    isat_Command_execute(isat_custom_command);
    //  document.execCommand('formatBlock', false, 'h1');
    
    get_final_html();
    });
}
var isat_header_2=document.getElementById("isat-header-2"); 
if(isat_header_2){
isat_header_2.addEventListener("click", function(){
    
        var  isat_custom_command='{"isat_commands":"formatBlock","gui":false,"value":"h2"}';
    isat_Command_execute(isat_custom_command);
    get_final_html();
    });
    
}
    
    // font color and background  color-------------------------------------------------------------------------------------------------------------------------------------------
    //made by balaji at isat software solution senior engineer
    //hire me :6380188237
    
    // document.getElementById("isat-forecolor").addEventListener("click", function(){
    
    // try {
    
    
    // isat.focus();
    // } catch (error) {
    
    //     console.log("");
    // }
    
    
    // document.querySelector(".color_picker").style.display="block";
    
    
    
    
    
    // console.log("isat_debug forecolour clicked");
    //   document.execCommand('forecolor', false,$vm.colors);
    
    
    // });
    
    
    // document.getElementById("isat-backcolor").addEventListener("click", function(){
    
    // try {
    
    // isat.focus();
    // } catch (error) {
    //     console.log("");
    
    // }
    
    // console.log("isat_debug backcolour clicked");
    //    document.execCommand('backcolor', false,$vm.colors );
    
    
    // var color_picker=document.querySelector(".color_picker_backcolor");
    // color_picker.style.display="block";
    // });
    
    
    
    // // link-----------------------------------------------------------------------------------------------------------------
 var isat_creatlink=document.getElementById("isat-createlink");   
 if(isat_creatlink){
 isat_creatlink.addEventListener("click", function(){
    
    var url = prompt('Enter the link here: ', 'http://');
    // document.execCommand("createlink",false,url);
    
    var  isat_custom_command='{"createlink":"formatBlock","gui":false,"value":'+url+'}';
    isat_Command_execute(isat_custom_command);
    get_final_html();
    });
}

var isat_unlink=document.getElementById("isat-unlink");
    if(isat_unlink){
    
isat_unlink.addEventListener("click", function(){
    
    // document.execCommand("unlink",false,null);
    var isat_command="unlink";
    isat_Command_engine(isat_command);
    get_final_html();   
});
    
}

var isat_subscript=document.getElementById("isat-subscript");
if(isat_subscript){
isat_subscript.addEventListener("click", function(){

    
    isat.focus();
    
      var isat_command="subscript";
    isat_Command_engine(isat_command);
    
    isat.focus();
    
    get_final_html();
    });
}
    

var isat_superscript=document.getElementById("isat-superscript")
    if(isat_superscript){
isat_superscript.addEventListener("click", function(){
    
    
    
    isat.focus();
    
    document.execCommand('styleWithCSS',false,true);
      // document.execCommand("superscript",false,null);
    
    var isat_command="superscript";
    isat_Command_engine(isat_command);
    
    isat.focus();
    get_final_html();
    });
    
}
    
    }
    
    
    
    
    
    
    
    
        }

     
   function  get_final_html(){
    // alert(document.getElementById("main-input").innerHTML)
console.log("code")



     }
        function  getClosest(elem,selector){
            //////////////////////////new task for pollyfill--------------------------------------------------
            //    var getClosest = function (elem, selector) {
            
                // Element.matches() polyfill
                if (!Element.prototype.matches) {
                    Element.prototype.matches =
                        Element.prototype.matchesSelector ||
                        Element.prototype.mozMatchesSelector ||
                        Element.prototype.msMatchesSelector ||
                        Element.prototype.oMatchesSelector ||
                        Element.prototype.webkitMatchesSelector ||
                        function(s) {
                            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                                i = matches.length;
                            while (--i >= 0 && matches.item(i) !== this) {console.log("")}
                            return i > -1;
                        };
                }
            
                // Get the closest matching element
                for ( ; elem && elem !== document; elem = elem.parentNode ) {
                    if ( elem.matches( selector ) ) return elem;
                }
                return null;
            
            }
        