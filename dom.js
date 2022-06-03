// Examine the document object

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.querySelectorAll);

// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.textContent); 
// difference between textcontent and inner text is one of them pays attention to styling, for example when we use span  to add 123 and  an attrubute display = none then
// text content shows the 123 in the console but innerText will pay attention to the styling and not show 123   
// headerTitle.innerHTML = '<h3>Hello</h3>';

//header.style.borderBottom = 'solid 3px #000'
//  var items = document.getElementsByClassName('list-group-item');

// console.log(items[1]);
// //items[1].textContent = 'Hello 2';
// items[2].style.color = 'green';

// var additems = document.getElementsByClassName('title');
// //console.log(additems);
// // additems[0].textContent = 'DaaloIdhar'
// additems[0].style.fontWeight = 'bold';
// additems[0].style.color = 'green';

// for(let i =0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

// Get element by tag name

var items = document.getElementsByClassName('list-group-item');

console.log(items[1]);
//items[1].textContent = 'Hello 2';
items[2].style.color = 'green';

var li = document.getElementsByTagName('li');
//console.log(additems);
li[2].textContent = 'manoyanamano'
li[2].style.fontWeight = 'bold';
li[2].style.color = 'red';

for(let i =0; i<li.length; i++){
    li[i].style.backgroundColor = 'lightblue';
}
