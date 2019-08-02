(function(root){
    var colorPicker = function(el){
        if(!(this instanceof colorPicker)){
            return new colorPicker(el);
        }
        this._el = typeof el === 'string'?document.querySelector(el):el;
    };
    colorPicker.render=function(list,action){
        var _this=this;
        console.log(_this)
        list.forEach(function (it) {

            action(_this._el,it);
        })
    }
    colorPicker.functions=function(obj){
        var key, result = [];
        for(key in obj){
            result.push(key);
        }
        return result;
    }

    colorPicker.each=function(list,callback){
        for(var i=0;i<list.length;i++){
            callback.call(list,list[i],i)
        }
    }
    colorPicker.mixin = function(obj){
        colorPicker.each(colorPicker.functions(obj),
            function (key,i) {
                var func=colorPicker[key];
                colorPicker.prototype[key]=function () {
                    return func.apply(this,arguments)
                }
            }
        )
    }
    colorPicker.mixin(colorPicker);
    root.colorPicker = colorPicker;
})(window)
