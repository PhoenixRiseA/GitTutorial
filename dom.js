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

// var items = document.getElementsByClassName('list-group-item');

// console.log(items[1]);
// //items[1].textContent = 'Hello 2';
// items[2].style.color = 'green';

// var li = document.getElementsByTagName('li');
// //console.log(additems);
// li[2].textContent = 'manoyanamano'
// li[2].style.fontWeight = 'bold';
// li[2].style.color = 'red';

// for(let i =0; i<li.length; i++){
//     li[i].style.backgroundColor = 'lightblue';
// }

// Query Selector//

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'white';

//querySelectorAll
var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';
var Items = document.querySelectorAll('.list-group-item');
Items[1].style.backgroundColor = 'green';
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
    even[i].style.backgroundColor = '#ccc';
}