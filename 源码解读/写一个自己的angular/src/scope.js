var isEqual = require('deep-equal');
var clone = require('clone');

class Scope {
    constructor() {
        this.$$watchers = [];
        this.$$lastDirtyWatch = null;
        //异步队列
        this.$$asyncQueue = [];
        this.$$applyAsyncQueue = [];
        this.$$applyAsyncId = null;
        this.$$postDigestQueue = [];
        this.$$phase = null;
    }

    /*
    * 定义监听函数，并将监听对象添加到监听数组；
    * */
    $watch(watchFn, listenerFn, valueEq) {
        var self = this;
        let watcher = {
            watchFn: watchFn,
            listenerFn: listenerFn || function () {
            },
            valueEq: !!valueEq,
            last: initWatchVal
        };
        this.$$watchers.unshift(watcher);
        this.$$lastDirtyWatch = null;
        return function() {
            var index = self.$$watchers.indexOf(watcher);
            if (index >= 0) {
                self.$$watchers.splice(index, 1);
            }
        };
    }

    /*
    * 迭代并执行监听函数。广播
    * */
    $$digestOnce() {
        var self = this;
        var newValue, oldValue, dirty;
        this.$$watchers.reverse().forEach(function (watcher) {
            try {
              if(watcher){
                  newValue = watcher.watchFn(self);
                  oldValue = watcher.last;
                  if (!self.$$areEqual(newValue, oldValue, watcher.valueEq)) {
                      self.$$lastDirtyWatch = watcher;
                      watcher.last = watcher.valueEq ? clone(newValue) : newValue;
                      //console.log(watcher.last.toString())
                      watcher.listenerFn(newValue, (oldValue === initWatchVal ? newValue : oldValue), self);
                      dirty = true;
                  } else if (self.$$lastDirtyWatch === watcher) {
                      return false;
                  }
              }
            }catch (e) {
                console.error(e);
            }
        })
        return dirty;
    }

    $digest() {
        var dirty, ttl = 10;
        this.$$lastDirtyWatch = null;
        this.$beginPhase("$digest");

        if (this.$$applyAsyncId) {
            clearTimeout(this.$$applyAsyncId);
            this.$$flushApplyAsync();
        }

        do {
            while (this.$$asyncQueue.length) {
               try{
                   var asyncTask = this.$$asyncQueue.shift();
                   asyncTask.scope.$eval(asyncTask.expression);
               }catch (e) {
                   console.log(e);
               }
            }
            dirty = this.$$digestOnce();
            if ((dirty || this.$$asyncQueue.length) && !(ttl--)) {
                this.$clearPhase();
                throw "10 digest iterations reached";
            }
        } while (dirty || this.$$asyncQueue.length);
        this.$clearPhase();

        while (this.$$postDigestQueue.length) {
            try{
                this.$$postDigestQueue.shift()();
            }catch (e) {
                console.error(e)
            }
        }
    }

    /*
    * 递归检查复杂类型
    * */
    $$areEqual(newValue, oldValue, valueEq) {
        if (valueEq) {
            return isEqual(newValue, oldValue);
        } else {
            return newValue === oldValue ||
                (typeof newValue === 'number' && typeof oldValue === 'number' && isNaN(newValue) && isNaN(oldValue))
        }
    }

    $eval(expr, locals) {
        return expr(this, locals);
    }

    $apply(expr) {
        try {
            this.$beginPhase("$apply");
            return this.$eval(expr);
        } finally {
            this.$clearPhase();
            this.$digest();
        }
    };

    $evalAsync(expr) {
        var self = this;
        if (!self.$$phase && !self.$$asyncQueue.length) {
            setTimeout(function () {
                if (self.$$asyncQueue.length) {
                    self.$digest();
                }
            }, 0);
        }
        this.$$asyncQueue.push({scope: this, expression: expr});
    };

    $beginPhase(phase) {
        if (this.$$phase) {
            throw this.$$phase + ' already in progress.';
        }
        this.$$phase = phase;
    };

    $clearPhase() {
        this.$$phase = null;
    };

    $applyAsync(expr) {
        var self = this;
        self.$$applyAsyncQueue.push(function() {
            self.$eval(expr);
        });
        if (self.$$applyAsyncId === null) {
            self.$$applyAsyncId = setTimeout(function() {
                self.$apply(function () {
                    this.$$flushApplyAsync
                }.bind(self));
            }, 0);
        }
    };
    $$flushApplyAsync() {
        while (this.$$applyAsyncQueue.length) {
            try {
                this.$$applyAsyncQueue.shift()();
            } catch (e) {
                console.error(e);
            }
        }
        this.$$applyAsyncId = null;
    };
    $$postDigest(fn) {
        this.$$postDigestQueue.push(fn);
    };
    $watchGroup(watchFns, listenerFn) {
        var self = this;
        var oldValues = new Array(watchFns.length);
        var newValues = new Array(watchFns.length);
        var changeReactionScheduled = false;
        function watchGroupListener() {
            listenerFn(newValues, oldValues, self);
            changeReactionScheduled = false;
        }
        watchFns.forEach(function(watchFn, i) {
            self.$watch(watchFn, function(newValue, oldValue) {
                newValues[i] = newValue;
                oldValues[i] = oldValue;
                if (!changeReactionScheduled) {
                    changeReactionScheduled = true;
                    self.$evalAsync(watchGroupListener);
                }
            });
        });
    };

}

/*
* 初始化参数
* */
function initWatchVal() {
}

export default Scope;
