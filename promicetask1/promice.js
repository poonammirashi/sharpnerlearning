const posts = [{ title: 'post one', body: 'this is post one' }, { title: 'post two', body: 'this is post two' }];
user={
    lastupdatetime : new Date()
}
console.log(`before updating time : ${user.lastupdatetime}`);

 function getposts() {
     return new Promise((resolve,reject)=>{
        setTimeout(() => {
            posts.forEach((post)=>{
                console.log(post.title);
            })
            resolve();
        }, 1000);
    })
}

const promice1= function createpost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve(post);
        }, 2000);
    });
}

 function deletepost() {
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

let promice2= function updatelastuseractivity() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             user.lastupdatetime = new Date().getTime();
            resolve(user.lastupdatetime);
        },1000)
    })
}
// promice2().then(p1=> console.log(p1));
// createpost({ title:'post three'}).then(p2=> console.log(p2));
Promise.all([promice1({ title:'post three', body:'this is post three'}),promice2()]).then(([p1,p2])=>{
    getposts().then(()=>{
        const time=p2/1000;
    console.log(` after updating time: ${time}`);
    deletepost().then(()=>{
        getposts();
    })
    })
})