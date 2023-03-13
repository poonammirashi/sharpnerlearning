var Items=document.getElementsByClassName("list-group-item");
console.log(Items[2]);
Items[2].style.backgroundColor='green';
Items[1].style.fontWeight='bold';
for(var i=0;i<Items.length;i++) {
    Items[i].style.fontWeight='bold'
}