var li=document.getElementsByTagName("li");
console.log(li);
li[4].style.backgroundColor='red'
// var Items=document.getElementsByClassName("link-group-item");
// Items[3].style.backgroundColor='green';
// Items[1].style.fontWeight='bold';
for(var i=0;i<li.length;i++) {
    li[i].style.fontWeight='bold';
}

