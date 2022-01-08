/*--------------------1--------------------*/
let fields = document.getElementsByTagName('h5');
const field0_content = fields[0].innerHTML;
const field1_content = fields[1].innerHTML;

fields[0].innerHTML = field1_content;
fields[1].innerHTML = field0_content;
/*-------------------------------------------------*/
/*--------------------2--------------------*/
function square(v1, v2){
	return v1*v2;
}
let a1 = 3;
let a2 = 4;

let fourthP = document.getElementsByTagName('article')[0];
const fourthPContent = fourthP.innerHTML;
let newContent = 'Square of ' + a1 + ' x ' + a2 + ' = ' + square(a1, a2) + '\n';
fourthP.innerHTML = fourthPContent + newContent;
/*-------------------------------------------------*/