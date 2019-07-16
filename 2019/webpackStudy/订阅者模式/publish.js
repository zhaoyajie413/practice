function Public(){
    //存放订阅者信息
    this.subscribers = [];

    //添加订阅者
    this.addSubscriber = function(subscriber){

        //保证一个订阅者只能订阅一次
        let isExist = this.subscribers.some(function(item){
            return item == subscriber;
        })

        if(!isExist){
            this.subscribers.push(subscriber);
        }

        return this;
    }

    //发布消息
    this.deliver = function(data){
        this.subscribers.forEach(function(fn){
            fn(data)
        })

        return this;
    }
}
