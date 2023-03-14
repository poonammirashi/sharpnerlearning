var itemlist = document.querySelector('#items');

var itemlist=document.querySelector('#items');

console.log(itemlist.parentElement.parentElement.parentElement);//2
itemlist.parentElement.style.backgroundColor = '#f4f4f4'

console.log(itemlist.childNodes);
console.log(itemlist.children)
console.log(itemlist.children[1])
itemlist.children[1].style.backgroundColor='yellow'
console.log(itemlist.lastChild); //3
itemlist.firstElementChild.textContent='first child'; //9
console.log(itemlist.lastElementChild) //1
itemlist.lastElementChild.textContent='hello 1';
itemlist.firstElementChild.textContent='hello 1'; //8
console.log(itemlist.nextSibling); //4
console.log(itemlist.nextElementSibling); //5
console.log(itemlist.previousSibling) //6
console.log(itemlist.previousElementSibling); //7 
var newdiv=document.createElement('div'); //10
newdiv.className = 'hello';
newdiv.id = 'hello1';
newdiv.setAttribute('title', 'hello div'); //11
var newdivtext = document.createTextNode('HEllo'); //12

newdiv.appendChild(newdivtext); //13
var container=document.querySelector('header .container');
var h1 =document.querySelector('header h1');
container.insertBefore(newdiv, h1);
newdiv.style.fontSize= '30px';
console.log(newdiv)


parentnode=document.getElementById('items')
//parentnode.appendChild(document.createTextNode('hello world'))
parentnode.innerHTML="<li class='list-group-item'>hello world</li>" + parentnode.innerHTML;