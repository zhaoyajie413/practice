import mayu from "./mayu.txt";

const modules = require.context("./js",true,/\.js$/);

console.log(mayu)
console.log(modules);
