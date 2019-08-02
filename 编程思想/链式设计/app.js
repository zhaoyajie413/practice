(function(root){
    var stream = function(wrap){
        console.log(wrap)
        console.log(this instanceof stream)
        if(!(this instanceof stream)){
            return new stream(wrap);
        }
        console.log(wrap)
        this.wrap=wrap;
    }

    stream.unique=function(list,callback){
        var result = [];
        list=list.map(callback);
        for(var i=0;i<=list.length;i++){
            if(result.indexOf(list[i])==-1){
                result.push(list[i])
            }
        }
        return   result;
    }

    stream.functions=function(obj){
        var key, result = [];
        for(key in obj){
            result.push(key);
        }
        return result;
    }

    stream.each=function(list,callback){
        for(var i=0;i<list.length;i++){
            callback.call(list,list[i],i)
        }
    }

    stream.mixin=function(obj){
        stream.each(stream.functions(obj),
        function (key,i) {
            var func=stream[key];
            stream.prototype[key]=function () {
                console.log(this)
                var args=[].slice.call(this.wrap)
                args=args.concat(arguments);
                return func(args);
            }
        }
        )
    }

    stream.mixin(stream)
    root.stream=stream;
})(this)
