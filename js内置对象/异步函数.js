//异步函数。使用node运行。

var catchStrig=function(){
	return new Promise(function(rev,rej){
		setTimeout(function(){
			console.log("i prmise")
			rev();
		},2000);
	})
}

 async function print(){
	 await catchStrig().then(function(){
		 console.log(" i will ")
	 })
	 console.log("mayuyu");
 }
 
 print()