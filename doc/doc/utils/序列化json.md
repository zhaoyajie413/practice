 序列化json对象
===============
>code:

```$xslt
export const serialize=(data)=>{
	 var keys=Object.keys(data);
        keys.sort(function(left,right){
            return left.toLowerCase().localeCompare(right.toLowerCase());
        })
        var dataString='';
        keys.map(function(k,i){
            dataString+=k+"="+data[k]+(i<keys.length-1?"&":"");
        })
		return dataString;
}
```
