var num1Element = document.getElementById("num1") as HTMLInputElement;
var num2Element = document.getElementById("num2") as HTMLInputElement;
var buttonElement = document.querySelector("button")!;

const arrnum : Array<number> = [];
const arrstr : Array<string> = [];

type numOrString = number | string ; 

interface objinterface {
    val : number ;
    timestamp : Date;
}

function addNumber(n1:numOrString, n2:numOrString) {
    if(typeof n1=== 'number' && typeof n2 === 'number') {
        return n1 + ' ' + n2 ;
    } else if(typeof n1=== 'string' && typeof n2 === 'string') {
        return +n1 + +n2 ;
    }
}
function obj(object: objinterface) {
    return object ;
}

buttonElement.addEventListener("click", () => {
    const n1 =num1Element.value;
    const n2 = num2Element.value ;
    const str  = addNumber(n1, n2);
    const res = addNumber(+n1, +n2);
    arrstr.push(str as string);
    const newobj = obj({val:res as number, timestamp : new Date})
    console.log(arrstr);
    console.log(newobj);

})

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("it worked");
    }, 1000);
})

promise.then(res => {
    console.log(res.split(" "))
})