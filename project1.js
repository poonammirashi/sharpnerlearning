
var form = document.querySelector('#my-form');

form.addEventListener('submit', addevent);

var itemlist = document.querySelector('.items')
//itemlist.addEventListener('click', removeitem);
//itemlist.addEventListener('click', edititem);



function addevent(e) {
    e.preventDefault();
    var amount = document.getElementById('amount').value;
    var description = document.querySelector('#description').value;
    var category = document.querySelector('#category').value;
    
    var obj = {
        amounts: amount,
        descriptions: description,
        categorys: category
    }
    var obj_serialized = JSON.stringify(obj);
    //localStorage.setItem(obj.categorys, obj_serialized);

    axios.post("https://crudcrud.com/api/ac18ab4d6b3f4863a691448ff9641b16/appointmentdata", obj)
        .then(responce => {
            // showNewUserOnScren(responce.data)
            console.log(responce);
        })
        .catch(err => {
            console.log(err);
            document.body.innerHTML=document.body.innerHTML + "<h4>something went wrong</h4>"
        })

    var li = document.createElement('li');

    li.className = 'item';
    li.appendChild(document.createTextNode(amount + '-' +description + '-' + category));
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('delete'));

    // email = '';
    // name = '';
    btn.onclick = () => {
        // e.preventDefault();
        //var li = e.target.parentElement;
        //var email = document.getElementById('email').value;
        itemlist.removeChild(li);
        localStorage.removeItem(obj.categorys);
    }

    var edit = document.createElement('button');
    //edit.ClassName='item';
    //edit.value='edit';
    edit.appendChild(document.createTextNode('edit'));
    edit.onclick = (e) => {
        e.preventDefault();
        //   var li = e.target.parentElement;
        //     let editobjkey = li.className;
            // let obj = JSON.parse(localStorage.getItem(category))
            // console.log(obj)
            // document.getElementById('amount').value = obj.amounts;
      const obj = axios.get("https://crudcrud.com/api/ac18ab4d6b3f4863a691448ff9641b16/appointmentdata/6436db916246ac03e85325b1")
            console.log(obj.id)
            document.getElementById('description').value = obj.descriptions;
            document.getElementById('category').value = obj.categorys;
            itemlist.removeChild(li);
            localStorage.removeItem(obj.categorys);
        
    }
    li.appendChild(btn);
    li.appendChild(edit);
    itemlist.appendChild(li);
}
    // axios.delete("https://crudcrud.com/api/ac18ab4d6b3f4863a691448ff9641b16/appointmentdata/6436db916246ac03e85325b1")

    const obj = axios.get("https://crudcrud.com/api/ac18ab4d6b3f4863a691448ff9641b16/appointmentdata/6436d9c86246ac03e85325ad")
    .then(result => console.log(result.data._id))
    