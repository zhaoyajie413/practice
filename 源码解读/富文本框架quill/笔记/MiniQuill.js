class MiniQuill {
   constructor(container){
       //实例化quill,this指向qull对象
       var _this2 = this;
        //有第二个参数则为options
       var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
       this.options = expandConfig(container,options);
      this.container = this.options.container;
      this.container.classList.add('ql-container');
   }
}

function expandConfig(container,userConfig) {
    var options =  {
        container: container,
        modules: {
            clipboard: true,
            keyboard: true,
            history: true
        }
    }
    userConfig = {...options,userConfig};

    ['bounds', 'container', 'scrollingContainer'].forEach(key => {
        if (typeof userConfig[key] === 'string') {
            userConfig[key] = document.querySelector(userConfig[key]);
        }
    });

    userConfig.modules = Object.keys(userConfig.modules).reduce(
        (config, name) => {
            if (userConfig.modules[name]) {
                config[name] = userConfig.modules[name];
            }
            return config;
        },
        {},
    );
    return userConfig;
}
