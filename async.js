console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premovie = async ()=> {
    const wifeBringingTickect = new Promise ( (resolve, reject) => {
        setTimeout(()=> {resolve('tics')}, 3000);
    });

    const getPopcorn = new Promise ( (resolve,reject) => {resolve('popcorn')});

    const getButter = new Promise ( (resolve, reject) => {resolve('butter')});

    const getcoldrinks = new Promise ( (resolve, reject,) => {resolve('cold drinks') });
    

    let tics = await  wifeBringingTickect;

    let [popcorn,butter,drinks]= await Promise.all([getPopcorn,getButter,getcoldrinks])

    // console.log(`wife: i have the ${tics}`);
    // console.log('husbund: lets go in');
    // console.log(`wife: no i am hungry`);

    // let popcorn = await getPopcorn;

    // console.log(`husbund: i have ${popcorn}`);
    // console.log('husbund: lets go in');
    // console.log(`wife: no  i want butter on my popcorn`);

    // let butter = await getButter;
    // console.log(`husbund: i have ${butter}`);
    // console.log('husbund: anything else');
    // console.log(`wife: yha cold drinks`);

    // let drinks = await getcoldrinks;
    // console.log(`husbund: i have ${drinks}`);
    // console.log('husbund: anything else');
    // console.log(`wife: nothing lets go we are getting late`);

    console.log(`${popcorn}, ${butter}, ${drinks}`);
    return tics;

}
 premovie().then((m)=>{console.log(`person3: shows ${m}`)});
 
 console.log('person4: shows ticket');
 console.log('person5: shows ticket');