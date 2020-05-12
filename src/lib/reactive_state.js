let angalware_data_store = {},
	element_checked = false,
	element_name = '',
	obj_check_list = [],
	ready_check_list = {},
	angfor_temp={},
	angalfor_index,
	angalfor_item,
	angalfor_data;


export  function rstate(fn) {
	let myNode = document.querySelectorAll('*[angalware]');

	//set default value
	myNode.forEach(element => {

		let custom_attribute = element.getAttribute("angalware");
		obj_check_list.push(custom_attribute);
		obj_check_list.forEach(x => ready_check_list[x] = (ready_check_list[x] || 0) + 1);
		// console.log(ready_check_list)
		if (ready_check_list[custom_attribute] == 1)
			watching(angalware_data_store, element.getAttribute("angalware"), element.value, (obj, set_val) => {
				data_bind(obj, set_val);
			});

		if (element.type != "radio" && element.type != "checkbox")
			angalware_data_store[element.getAttribute("angalware")] = element.value;
		else
		if (element.checked) {
			element_checked = true;
			element_name = element.getAttribute("angalware");
			angalware_data_store[element.getAttribute("angalware")] = element.value;
		} else
		if (!element_checked && element_name != element.getAttribute("angalware"))
			if (ready_check_list[custom_attribute] == 1)
				angalware_data_store[element.getAttribute("angalware")] = "";
			else
				element_name = "",
				element_checked = false;
	}); //end loop

	fn(true, angalware_data_store);
	angfor();
	

	document.addEventListener('input', (e) => {

		angalware_data_store[e.target.getAttribute('angalware')] = e.target.value;
		fn(false, angalware_data_store)
		angfor();


	})
}
//data bind to input by watchin while set the value
function data_bind(angalware, value) {
	
	validation();
	let options = [];
	let myNode = document.querySelectorAll('*[angalware]');
	myNode.forEach(element => {
		if (element.getAttribute("angalware") == angalware) {
			if (element.getAttribute("type") != "radio" && element.getAttribute("type") != "checkbox" && element.tagName != "SELECT")
				element.value = value;
			if (element.getAttribute("type") == "radio" && element.getAttribute("value") == value)
				element.checked = true;
			if (element.getAttribute("type") == "checkbox" && element.getAttribute("value") == value)
				element.checked = true;
			if (element.tagName == "SELECT")
				options = element.childNodes,
				options.forEach(el => {
					if (el.value == value)
						el.selected = true;

				});
		}

	})
	
}

//watch data changes
function watching(obj_parent, inside_obj, arg, watcher_set) {

	Object.defineProperty(obj_parent, inside_obj, {
		get: function () {


			return arg;
		},

		set: function (val) {
			arg = val;
			watcher_set(inside_obj, val)


		}
	})


}

// working-------------------------not added
function validation(){

	let myNode = document.querySelectorAll('*[validate]');

	//set default value
	myNode.forEach(element => {
// console.log(element)

	})

}

function angfor(){

	let myNode = document.querySelectorAll('*[angfor]');

	//set default value
	myNode.forEach(element => {

//get element read value from angfor
var for_string=element.getAttribute("angfor");
var for_value=element.innerText;
// console.log(for_value)

for_string.match(/\([ ]*([a-zA-Z]+)[ ]*,+[ ]*([a-zA-Z]+)[ ]*\)[ ]+in[ ]+([a-z-A-Z]+)[ ]*/gmi);
  //i used only one group in above example so RegExp.$1

angalfor_index=RegExp.$1;//for index
angalfor_item=RegExp.$2 //for item
angalfor_data=angalware_data_store[RegExp.$3]; //total data

// var for_data=angalware_data_store[RegExp.$3]; //total data

//set items data


let iterate=0;
//validate mydata
angalfor_data.forEach((x)=>{
	iterate+=1

	console.log(x)
	angfor_temp[angalfor_item]=x;

let kit=findValueInsideDom(iterate,angfor_temp,element);
console.log(kit)


})


iterate=0;

	})






}

function findValueInsideDom(index,eachdata,myNode){
  

	//finding chinld nodes by parent node
	let insideNodes=myNode.childNodes;
	let replace_html="";
	let replace_data;
	let actual_html;
	var actual_element;
	let obj_regex=/{{[ ]*(([a-zA-Z0-9]+(\[([\'\"])?[a-zA-Z0-9]+([\'\"])?\])?)+([.][a-zA-Z0-9]+(\[([\'\"])?[a-zA-Z0-9]+([\'\"])?\])?)*)[ ]*}}/gmi;
	//set default value
	insideNodes.forEach(element => {
//    console.log(insideNodes)
//regex for check object like obj.obj.om obj[3].obj

// {{[ ]*(([a-zA-Z0-9]+(\[(['"])?[a-zA-Z0-9]+(['"])?\])?)+([.][a-zA-Z0-9]+(\[(['"])?[a-zA-Z0-9]+(['"])?\])?)*)[ ]*}}

let the_dom_hold="";
let temp_data={};
if(obj_regex.test(element.textContent)){
element.textContent.match(obj_regex);
the_dom_hold=RegExp.$1;

//find replace data
replace_data =(_get(eachdata,the_dom_hold)||"");
replace_html+=String(element.outerHTML).replace(obj_regex,replace_data);
}





	})
	console.log(replace_html)
	create_replace_attribute(myNode.parentNode,replace_html);


}

function create_replace_attribute(element,replace_html){
//
var create_element = document.createElement(element.tagName.toUpperCase());
console.log(create_element);
[].slice.call(element.attributes).map((attr) => {
	//   console.log(attr.name)
	//cleaning unncessary attribute
	// if(attr.name!="angafor"){
	  create_element.setAttribute(attr.name,attr.value);
// }
});
console.log(replace_html)
create_element.innerHTML=replace_html.trim();
console.log(create_element)
console.log(replace_html)
// element.childNodes[0].insertAdjacentHTML('afterend',replace_html)
element.appendChild(create_element);

console.log(element.childNodes[0])
}

function escapeRegExp(str) {
	return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }



function _get(object, path) {
    return path.
        replace(/\[/g, '.').
        replace(/\]/g, '').
        split('.').
        reduce((o, k) => (o || {})[k], object);
}



