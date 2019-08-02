/**
 * 方法Array.filter(function(item,index,array){})
 * 功能：迭代数组.
 * 参数：判断方法function(item,index,array),{item：元素,index：元素索引,array：数组自身}.
 * 返回：为每一个元素运行参数函数，保存所有返回true的元素组成的数组并返回.
 */
Array.prototype.filter = function(param){
    try{
        console.log(param)
        var arrLength = this.length;
        var resultArr = new Array();
        for(var i = 0; i < arrLength; i++){
            var item = this[i];
            if(param(item,i,this)){
                resultArr.push(this[i]);
            }
        }
        return resultArr;
    }catch(err){
        throw  err;
    }

}
/*
* 方法:Array.removeAt(Index)
* 功能:删除数组元素.
* 参数:Index删除元素的下标.
* 返回:在原数组上修改数组
*/

Array.prototype.removeAt=function(Index)
{
    if(isNaN(Index)||Index>this.length){return false;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=this[Index])
        {
            this[n++]=this[i];
        }
    }
    this.length-=1;
}

/*
* 方法:Array.remove(obj)
* 功能:删除数组元素.
* 参数:要删除的对象.
* 返回:在原数组上修改数组
*/

Array.prototype.remove=function(obj)
{
    if(null==obj){return;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]!=obj)
        {
            this[n++]=this[i];
        }
    }
    this.length-=1
}

/*
* 方法:Array.Contains(obj)
* 功能:确定某个元素是否在数组中.
* 参数:要查找的Object对象
* 返回:找到返回true,否则返回false;
*/
Array.prototype.Contains=function(obj)
{
    if(null==obj){return;}
    for(var i=0,n=0;i<this.length;i++)
    {
        if(this[i]==obj)
        {
            return true;
        }
    }

    return false;
}

/*
* 方法:Array.IndexOf(obj)
* 功能:搜索指定的Object,并返回第一个匹配项从零开始的索引
* 参数:要查找的Object对象
* 返回:找到返回该元素在数组中的索引,否则返回-1
*/
Array.prototype.indexOf=function(obj)
{
    if(null==obj){return;}
    {
        for(var i=0,n=0;i<this.length;i++)
        {
            if(this[i]==obj)
            {
                return i;
            }
        }
    }

    return -1;
}

/*
* 方法:Array.Clear()
* 功能:消空数组元素.
* 参数:无.
* 返回:空数组
*/
Array.prototype.Clear=function()
{
    this.length=0;
}

/**
 * 方法：Array.removeVoidElement()
 * 功能：删除无效的元素(null/"")
 * 参数：无。
 * 返回：在原数组上修改数组
 */
Array.prototype.removeVoidElement=function(){
    for(var i = 0; i < this.length; i++){
        if("" == this[i] || null == this[i] || "null" == this[i]){
            this.remove(this[i]);
        }
    }
}

Array.prototype.find = Array.prototype.find || function (callback) {
    for(var i = 0, length = this.length; i < length; i++) {
        var item = this[i];
        if(callback(item)) {
            return item;
        }
    }
    return null;
};


