console.log("app")
import {rstate}  from './lib/reactive_state'
// import { createPopper } from '@popperjs/core';

import {wygsiwyg} from './lib/iframe_wygsiwyg';

import {dnd} from './lib/dnd_'
import * as core from './lib/core'
//input form reactive 
// let angalware_data_store = {},
// //input reactive check
// element_checked = false,
// //input reactive setup
//   element_name = '',
// 	obj_check_list = [],
// 	ready_check_list = {};


//iframe init
let iframeWindow;
let components=[
{
type:'text',
value:'something ${name} ${age}'


},
{
  type:'canvas',
  value:'something ${name} '
    
    }

]

let replace_array=[
  {
name:'balaji'
},
{name:'icegirl'}
]
iframe.onload = function() {
    // we can get the reference to the inner window

    


    try {

      iframeWindow = iframe.contentDocument || iframe.contentWindow.document;
     
    } catch(e) {
      alert(e); // Security Error (another origin)
    }
   
//creating ghostpahne





core.dnd(iframeWindow,iframeWindow.getElementById('pane'),(x)=>{

  
  console.log(x)
});


core.dnd_transfer(document.getElementById('bing'),iframeWindow.getElementById('pane'))

let count_loop=0;



components.forEach(element => {
    

    // if(element.type=="text")


    // string replace here
var $obj={
  // name:'balaji',
  // age:'25',
}
element.value=core.replaceString(element.value,replace_array[count_loop]);

         create_element("div",element.value,[
             {
               attr:'class',value:'move '
             },
             {
              attr:'style',value:'font-size:40pt;cursor:move;padding:inherit'
            },

            // {
            //   attr:'isat_editable_content',value:'isat_editable_content'
            // },

            
            // {
            //   attr:'contenteditable',value:'true'
            // }

         ],
         iframeWindow.getElementById("components")
         
         )

         count_loop+=1;
});

//data watch
rstate((state,data)=>{
  if(state){
//console.log(default state)
//defualt state
iframeWindow.getElementById("components").addEventListener('mousedown',(e)=>{
        
  if(e.target.getAttribute("angalware_sheet")==null)
          // dnd_listen(e.target);
        console.log(e.target)  
        dnd(e.target,iframeWindow)
 
          })
  


// isat_wygsiwyg_();
  }

 //state change while input
 
 const button = document.querySelector('#button');
 const tooltip = document.querySelector('#tooltip');

//  popper(button,tooltip);


    if(data["paper_size"]=="legal")
    {
    
     data["paper_width"]="216";
     data["paper_height"]="356";
    }
    


if(data["paper_size"]=="letter")
{

  data["paper_width"]="216";
  data["paper_height"]="279";
}




if(data["paper_size"]=="a5")
{

  data["paper_width"]="148";
  data["paper_height"]="209";

}


if(data["paper_size"]=="a4")
{

  data["paper_width"]="210";
  data["paper_height"]="296";

}



if(data["paper_size"]=="a3")
{


  data["paper_width"]="297";
  data["paper_height"]="419";


}



css(iframeWindow.getElementById("style_editor"),data)

//dnd 
console.log(iframeWindow.getElementById("components"));


})

// var iframe = document.getElementById("iframe");
// iframe.contentWindow.editor_call("print");

wygsiwyg(iframeWindow);

// iframeWindow.onkeydown=(event)=>{
//   window.designMode = "on";
// console.log("shit")
//   if (event.keyCode == 16) {
//     // Execute command if user presses the SHIFT button:
//     iframeWindow.execCommand("bold");
//   }
// }



    iframe.onload = null; // clear the handler, not to run it after the location change
  };

  document.getElementById("print").onclick=function(){

    var iframe = document.getElementById("iframe");
    iframe.contentWindow.editor_call("print");
  
  }

  // component create
function create_element(element,inner="",attribute_array,append){

    var textfield = document.createElement(element);
   
    attribute_array.forEach(element => {
// alert(element.attr)        
    textfield.setAttribute(element.attr,element.value);

    });
    // if(inner!="")
      textfield.innerHTML=inner;
    if(append)
    append.appendChild(textfield);
 else
 alert("create append dom")   
   
}


// function popper(palce_element,tooltip){

//   createPopper(palce_element, tooltip);


// }


// function myFunction(event) {
//   if (event.keyCode == 16) {
//     // Execute command if user presses the SHIFT button:
//     document.execCommand("bold");
//   }
// }



function css(iframe,data){

  // body.receipt .sheet{ width:auto;height: auto;} 
  // 
  let css_paper_width_and_height="@page { margin: 0 } body { margin: 0 } .sheet { margin: 0; overflow: hidden; position: relative; box-sizing: border-box; page-break-after: always; } /** Paper sizes **/ body.receipt               .sheet { width: "+parseFloat(data.paper_width||0)+"mm; height: "+parseFloat(data.paper_height||0)+"mm } /** Padding area **/ .sheet.padding { padding: 10mm } /** For screen preview **/ @media screen { body { background: #e0e0e0 } .sheet { background: white; box-shadow: 0 .5mm 2mm rgba(0,0,0,.3); margin: 5mm auto; } } /** Fix for Chrome issue #273306 **/ @page { size: "+parseFloat(data.paper_width||0)+"mm "+parseFloat(data.paper_height||0)+"mm   }   @media print { body.receipt { width: "+parseFloat(data.paper_width||0)+"mm } }",

  // let css_paper_width_and_height=".sheet.padding {box-sizing: border-box;   padding-top: "+parseFloat(data.paper_padding_top||0)+"mm;padding-right: "+parseFloat(data.paper_padding_right||0)+"mm;padding-bottom: "+parseFloat(data.paper_padding_bottom||0)+"mm;padding-left: "+parseFloat(data.paper_padding_left||0)+"mm  }   @page { margin: 0 }  body { margin: 0 }.sheet {   margin: 0;overflow: hidden;  position: relative; box-sizing: border-box; page-break-after: always;  } @media screen {    body { background: #e0e0e0 } .sheet {   background: white;      box-shadow: 0 .5mm 2mm rgba(0,0,0,.3);  margin: 5mm auto; }}   @page { margin: 0; padding:0; } body { margin: 0;padding:0; } .sheet {  margin: 0;overflow: hidden;position: relative; box-sizing: border-box; page-break-after: always; } .sheet{ background: white;position: relative;  }  @page { size: "+parseFloat(data.paper_width||0)+"mm "+parseFloat(data.paper_height||0)+"mm  } /* output size */ body.receipt .sheet { width: "+parseFloat(data.paper_width||0)+"mm; height: "+parseFloat(data.paper_height||0)+"mm } /* sheet size */ @media print { body.receipt { width: "+parseFloat(data.paper_width||0)+"mm }  } /* fix for Chrome */ ",

  css_margin="",
   css_padding="";

  //  console.log(css_paper_width_and_height)
  //  console.log(css_paper_width_and_height)


  iframe.innerHTML=css_paper_width_and_height;
  // for (var i=0; i<sheetRef.sheet.cssRules.length; i++){
  
  
  // var sheet = sheetRef.sheet ? sheetRef.sheet : sheetRef.styleSheet;
  
  
  // if (sheet.cssRules.length > 0) {
  // //console.log(sheet.cssRules[i]);
  //   console.log(sheet.cssRules[i].selectorText);
  //   console.log(sheet.cssRules[i].cssText);
  
  //                 }}

//applying width and height


//paddings



//margins





//append





}