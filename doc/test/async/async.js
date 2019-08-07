function f(num) {
    return new Promise((rev,rej)=>{
        setTimeout(()=>{
            rev(num)
        },300)
    })
}
const list=[1,23,23,12,32,43,45,65,4,5,76,34,23,12];
/*list.forEach(async(it)=>{
   var num = await f(it);
   console.log(num)
})*/
const print = async(it)=>{
    var num = await f(it);
    console.log(num)
}

const test = async ()=>{
   await print(122)
    await print(123)
    await print(124)
    console.log("mayuyu")
}

test()
