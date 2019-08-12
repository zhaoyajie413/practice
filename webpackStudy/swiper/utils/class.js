import Utils from "./utils"

class SwiperClass {
    constructor(params = {}) {
        const self = this;
        self.params = params;

        // 事件
        self.eventsListeners = {};
        //事件绑定
        if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach((eventName) => {
                self.on(eventName, self.params.on[eventName]);
            });
        }
    }
    on(events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event) => {
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    }
    emit(...args) {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event) => {
            if (self.eventsListeners && self.eventsListeners[event]) {
                const handlers = [];
                self.eventsListeners[event].forEach((eventHandler) => {
                    handlers.push(eventHandler);
                });
                handlers.forEach((eventHandler) => {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    }
    useModulesParams(instanceParams) {
        var instance = this;
        if (!instance.modules) { return; }
        Object.keys(instance.modules).forEach(function (moduleName) {
            var module = instance.modules[moduleName];
            // Extend params
            if (module.params) {
                Utils.extend(instanceParams, module.params);
            }
        });
    }
    useModules(modulesParams = {}) {
        const instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach((moduleName) => {
            const module = instance.modules[moduleName];
            const moduleParams = modulesParams[moduleName] || {};
            // Extend instance methods and props
            if (module.instance) {
                Object.keys(module.instance).forEach((modulePropName) => {
                    const moduleProp = module.instance[modulePropName];
                    if (typeof moduleProp === 'function') {
                        instance[modulePropName] = moduleProp.bind(instance);
                    } else {
                        instance[modulePropName] = moduleProp;
                    }
                });
            }
            // Add event listeners
            if (module.on && instance.on) {
                Object.keys(module.on).forEach((moduleEventName) => {
                    instance.on(moduleEventName, module.on[moduleEventName]);
                });
            }

            // Module create callback
            if (module.create) {
                module.create.bind(instance)(moduleParams);
            }
        });
    }
    static use(module, ...params) {
        const Class = this;
        if (Array.isArray(module)) {
            module.forEach(m => Class.installModule(m));
            return Class;
        }
        return Class.installModule(module, ...params);
    }
}

export default SwiperClass;
