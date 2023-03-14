var form=document.getElementById('addForm');

var itemlist = document.getElementById('items');

var filter= document.getElementById('filter');

filter.addEventListener('keyup', filteritem);

itemlist.addEventListener('click', removeitem);

form.addEventListener('submit', addevent);

// var discription = document.createElement('input')
// discription.type='text';
// discription.className="form-control mr-2" 
// discription.id="discription"
// var input= document.getElementById('item');
// var fm=document.querySelector('addForm')
// //.insertBefore(discription, input)
// fm.appendChild(discription, input)

function addevent(e) {
    e.preventDefault();

var newitem=document.getElementById('item').value ;

var newdiscription=document.getElementById('discription').value;

var li=document.createElement('li');

li.className='list-group-item';

li.appendChild(document.createTextNode(newitem)); 

li.appendChild(document.createTextNode(' ' + newdiscription)); 


var edit= document.createElement('button')
edit.className='btn btn-success btn-sm float-right edit';

var dlt = document.createElement('button');
dlt.className = 'btn btn-danger btn-sm float-right delete';

dlt.appendChild(document.createTextNode('X'));
li.appendChild(dlt);

edit.appendChild(document.createTextNode('edit'));
li.appendChild(edit);

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
function filteritem(e){
    var text=e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemname=item.firstChild.textContent;
        var discription=item.childNodes[1].textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1 || discription.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }
        else  {
            item.style.display = 'none';

        }
    });

}
