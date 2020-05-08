


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
