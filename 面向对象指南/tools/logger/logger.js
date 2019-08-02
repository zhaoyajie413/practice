(function (root) {
    var Logger = {
        holder:null
    };

    Logger.setHolder = function (el) {
        Logger.holder = typeof  el === 'string'?document.querySelector(el):el;
    }
    Logger.getCode = function(el){
        var dom = typeof  el === 'string'?document.querySelector(el):el;
        return dom.innerText;
    }
    Logger.setLog = function(){
        for(var k in window.console){
            Logger[k] = window.console[k];
        }
        window.console.log=function (str) {
            if(Logger.holder){
                Logger.holder.innerText= Logger.holder.innerText+str+"\n";
            }else{
                Logger.log(str);
            }

        }
    }

    Logger.setEval = function(){
        Logger.eval = window.eval;
        window.eval = function (target, el) {
            Logger.holder = null;
            Logger.setHolder(el);
            Logger.holder.innerText = "";
            Logger.eval(Logger.getCode(target));
        }
    }

    Logger.init = function(){
        Logger.setLog();
        Logger.setEval();
        root.Logger=Logger
    }

    Logger.init();
})(window)
