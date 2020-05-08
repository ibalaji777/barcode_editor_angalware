

let data={

 sheet_format  : [{

value:'a4',
title:'A4'
    },{

        value:'a3',
        title:'A3'
    }]


}


function create_element(element,attribute_array,append){

    var textfield = document.createElement(element);
   
    attribute_array.forEach(element => {
        
    textfield.setAttribute(element.title,element.value);

    });
    if(append)
    append.appendChild(textfield);
 else
 alert("create append dom")   
   
}


// function create_element_tag(element,attribute_array,value,append){

//     var textfield = document.createElement(element);
   
//     attribute_array.forEach(element => {
        
//     textfield.setAttribute(element.title,element.value);

//     });
//     textfield.innerHTML=value;

//     if(append)
//     append.appendChild(textfield);
//  else
//  alert("create append dom")   
   
// }





function option(attribute,title,append){

    var textfield = document.createElement("option");
    textfield.innerHTML = title;

    
    attribute.forEach(element => {
        
        textfield.setAttribute(element.title,element.value);
    
        });
if(append)
    append.appendChild(textfield);
 else
 alert("create append dom")   

}




function select(arr,data_array,append,callback){

    // input('select',"",name,val,clas,id,append,arr);
create_element("select",arr,append)
data_array.forEach(element => {
        
        callback(element);


    });
    }

function html(string,append){

    append.appendChild(string);


}
    


//row

html('<div class="row" id="sheets_container"></div>',document.getElementById("toolbar_widgets"))


html('<div class="row" id="sheets_container"></div>',document.getElementById("toolbar_widgets"))

// row

create_element('div',[
    {title:'class',value:'row'},
    {title:'id',value:'parent_options'}
    ],document.getElementById("toolbar_widgets"));
   
     
    select([
        { title:'id',value:'sheet'},
        { title:'name',value:'create'},
        { title:'me',value:'cate'}
       ],[
          { title:'aaa',value:'aaa'},
        { title:'bbb',value:'bbb'},
        { title:'ccc',value:'ccc'}
       ],document.getElementById("sheets_container")
       ,(element)=>{
       
           option([
           {
               title:element.title,value:element.title
           }
           ],
           element.title,
       
           document.getElementById("sheet")
           )
       }
       )


//row

html('<div class="row" id="sheets_container"><div class="col-6 sheet_width"></div><div class="col-6 sheet_height"></div></div>',document.getElementById("toolbar_widgets"))
                create_element('input',[

                    {title:'type',value:'text'},
                    {title:'value',value:'width'},
                    {title:'id',value:'sheet_width'}
                
                ],
                document.querySelector(".sheet_width"))
        

                create_element('input',[

                    {title:'type',value:'text'},
                    {title:'value',value:'height'},
                    {title:'id',value:'sheet_height'}
                
                ],
                document.querySelector(".sheet_height"))
 //row       
    
// create_element('input',[

//     {title:'type',value:'text'},
//     {title:'value',value:'demo'},
//     {title:'id',value:'demo'}

// ],
// document.getElementById("toolbar_widgets"))


html('<div class="row" class="page_orientation"></div>',document.getElementById("toolbar_widgets"))


create_element('input',[

    {title:'type',value:'radio'},
    {title:'value',value:'demo'},
    {title:'id',value:'demo'},
    {title:'name',value:'demo'}


],
document.querySelector("page_orientation"))
create_element('input',[

    {title:'type',value:'radio'},
    {title:'value',value:'demo'},
    {title:'id',value:'demo'},
    {title:'name',value:'demo'}


],
document.querySelector(".page_orientation"))
create_element('input',[

    {title:'type',value:'radio'},
    {title:'value',value:'demo'},
    {title:'id',value:'demo'},
    {title:'name',value:'demo'}


],
document.getElementById("toolbar_widgets"))





