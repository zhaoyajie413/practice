/*
* @method add
* 实现如下例子：add(6)(5)(8)
*  我的实现:
* */
const add = (num) => {
    var stack={
        tamp:0,
        add:(num)=>{
            stack.tamp+=num;
            console.log( stack.tamp)
            return  stack.add
         }
    }
    stack.tamp+=num;
    return stack.add
}
console.log(add(6)(5)(8));
console.log(add(10)(10));
