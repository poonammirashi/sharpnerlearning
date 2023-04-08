const posts = [{ title: 'post one', body: 'this is post one' }, { title: 'post two', body: 'this is post two' }];
user={
    lastupdatetime : new Date()
}


const promice1= function getposts() {
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.forEach((post)=>{
                console.log(post.title);
            })
            resolve();
        }, 1000);
    })
}

const promice2= function createpost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve(post);
        }, 2000);
    });
}

 const promice3 = function deletepost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedpost = posts.pop();
                resolve(deletedpost)
            } else {
                reject('ERROR');
            }
        }, 1000);
    });
}

const promice4= function updatelastuseractivity() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             user.lastupdatetime = new Date().getTime();
            resolve(user.lastupdatetime);
        },1000)
    })
}
// promice2().then(p1=> console.log(p1));
// createpost({ title:'post three'}).then(p2=> console.log(p2));
 const userupdate = async () => {
    console.log(`before updating time : ${user.lastupdatetime}`);
 let [post,update]= await  Promise.all([promice2({ title:'post three', body:'this is post three'}),promice4()])
    console.log(` after updating time: ${update}`);
    await promice1();
    // console.log(posts);
    let deletepost= await promice3();
    console.log(deletepost)
     await promice1();
    // console.log(posts2);
    
    }
    userupdate().then(()=> console.log('done'));
