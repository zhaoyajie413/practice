const moudles=require.context('./', true, /\.js$/);
console.log(moudles)
/*
let api = {};

moudles.keys().forEach(fileName => {
    const  moudle= moudles(fileName)
    const moudleConfig =  moudle.default ||  moudle
    api[moudleConfig.name]=moudleConfig;
})

export {api}*/
