var form=document.getElementById('addForm');

var itemlist = document.getElementById('items');

itemlist.addEventListener('click', removeitem);

form.addEventListener('submit', addevent);

function addevent(e) {
    e.preventDefault();

var newitem=document.getElementById('item').value ;

var li=document.createElement('li');

li.className='list-group-item';

li.appendChild(document.createTextNode(newitem)); 

var dlt = document.createElement('button');
dlt.className = 'btn btn-danger btn-sm float-right delete';

var edit= document.createElement('button')
edit.className='btn btn-success btn-sm float-right edit';

edit.appendChild(document.createTextNode('edit'));
li.appendChild(edit);

dlt.appendChild(document.createTextNode('X'));
li.appendChild(dlt);

itemlist.appendChild(li);
}

function removeitem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('are you sure')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
   // e.preventDefault();
   //console.log(2);
    
}