console.log("app")

//input form reactive 
let angalware_data_store={

};
//input reactive check
let element_checked=false;
//input reactive setup
let element_name='';
//iframe init
let iframeWindow;
let components=[
{
type:'text',
value:'something'


},
{
  type:'canvas',
  value:'something'
    
    }

]

iframe.onload = function() {
    // we can get the reference to the inner window
 
    try {

      iframeWindow = iframe.contentDocument || iframe.contentWindow.document;
     
    } catch(e) {
      alert(e); // Security Error (another origin)
    }
   

components.forEach(element => {
    
    // if(element.type=="text")
         create_element("div",element.value,[
             {
               attr:'class',value:'move'
             },
             {
              attr:'style',value:'cursor:move;padding:inherit'
            }

         ],
         iframeWindow.getElementById("components")
         
         )
});

//data watch
rstate((data)=>{
  console.log(JSON.stringify(data));
  console.log(iframeWindow)
css(iframeWindow.getElementById("style_editor"),data)
})






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




// defautl_value()

// function defautl_value(){

// // console.log(document.querySelectorAll('*[angalware]'))

// let myNode=document.querySelectorAll('*[angalware]');

// myNode.forEach(element => {
//   // console.log(element.getAttribute("angalware"))

//   data[element.getAttribute("angalware")]=element.value;

// });


// document.getElementById("result").innerText= JSON.stringify(data);  
// console.log(data)
// }



// input_changes();
// function input_changes(){


// document.addEventListener('input',(e)=>{

// // console.log(e.target.value)

// data[e.target.getAttribute('angalware')]=e.target.value;
// document.getElementById("result").innerText= JSON.stringify(data);
// console.log(data)
//   })


// }






function rstate(fn){



let myNode=document.querySelectorAll('*[angalware]');




myNode.forEach(element => {
 

 if(element.type!="radio"&&element.type!="checkbox")
    angalware_data_store[element.getAttribute("angalware")]=element.value,
    watching(angalware_data_store,element.getAttribute("angalware"),()=>{    },(obj,set_val)=>{   data_bind(obj,set_val) });
 else
   if(element.checked)
   element_checked=true,
   element_name=element.getAttribute("angalware"),
   angalware_data_store[element.getAttribute("angalware")]=element.value,
   watching(angalware_data_store,element.getAttribute("angalware"),()=>{    },(obj,set_val)=>{   data_bind(obj,set_val) });

   else
    if(!element_checked&&element_name!=element.getAttribute("angalware"))
    angalware_data_store[element.getAttribute("angalware")]="",
    watching(angalware_data_store,element.getAttribute("angalware"),()=>{    },(obj,set_val)=>{   data_bind(obj,set_val) });
    else
       element_name="",
       element_checked=false;

      

      });//end loop

      angalware_data_store.paper_size="letter";
      // angalware_data_store.paper_height=937;
      console.log(angalware_data_store.paper_width);
      console.log("changed data")


fn(angalware_data_store);
document.addEventListener('input',(e)=>{

    
    angalware_data_store[e.target.getAttribute('angalware')]=e.target.value;
    fn(angalware_data_store)


    // if(angalware_data_store[]=="")

  })
    
    


}

//data bind to input by watchin while set the value
function data_bind(angalware,value){
let options=[];
  let myNode=document.querySelectorAll('*[angalware]');
console.log(myNode)
  myNode.forEach(element => {


    if(element.getAttribute("angalware")==angalware){
// console.log(element.tagName)
      if(element.getAttribute("type")=="input")
      element.value=value;
       if(element.getAttribute("type")=="radio"&&element.getAttribute("value")==value) 
       element.checked=true;
       if(element.getAttribute("type")=="checkbox"&&element.getAttribute("value")==value)
       element.checked=true; 
       if(element.tagName=="SELECT")
       options=element.childNodes,
       console.log(options),    
       options.forEach(el => {
            if(el.value==value)
              el.selected=true;

          });
    }




  })




}




function watching(obj_parent,inside_obj,watcher_get,watcher_set){
// console.log("exewath")
Object.defineProperty(obj_parent, inside_obj, {
  get: function (val){
    watcher_get(inside_obj,val);
      //some code to watch the getter function
  },

  set: function (val) {

   watcher_set(inside_obj,val)
    //some code to watch the setter function
  }
})


}

function css(iframe,data){


  let css_paper_width_and_height=" .sheet{ background: white;position: relative;  } .sheet.padding {box-sizing: border-box; margin:"+parseFloat(data.paper_margin_top||0)+"mm;   padding-top: "+parseFloat(data.paper_padding_top||0)+"mm;padding-right: "+parseFloat(data.paper_padding_right||0)+"mm;padding-bottom: "+parseFloat(data.paper_padding_bottom||0)+"mm;padding-left: "+parseFloat(data.paper_padding_left||0)+"mm  }  @page { size: "+parseFloat(data.paper_width||0)+"mm "+parseFloat(data.paper_height||0)+"mm } /* output size */ body.receipt .sheet { width: "+parseFloat(data.paper_width||0)+"mm; height: "+parseFloat(data.paper_height||0)+"mm } /* sheet size */ @media print { body.receipt { width: "+parseFloat(data.paper_width||0)+"mm } body.receipt .sheet{ width:auto;height: auto;} } /* fix for Chrome */",
   css_margin="",
   css_padding="";

   console.log(css_paper_width_and_height)
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