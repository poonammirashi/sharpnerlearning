// var header=document.querySelector('#main-header')
// header.style.borderBottom='solid 4px #ccc'
// var input=document.querySelector('input')
// input.value='hello'
// var submit=document.querySelector('input[type="submit"]');
// submit.value='send'
// var item=document.querySelector(".list-group-item:nth-child(2)");
// item.style.color='coral';
var titles=document.querySelector('.list-group-item:nth-child(3)')
console.log(titles)
var title=document.querySelector('.list-group-item:nth-child(2)')
title.style.backgroundColor='yellow'
// titles.style="display:none"
var odd=document.querySelectorAll('li:nth-child(odd)');
var second=document.querySelectorAll('li');
second[1].style.color='green'
for(var i=0;i<odd.length;i++) {
    odd[i].style.backgroundColor='green'
}  

