vuex2中使用mapMutations/mapActions报错解决方法
===========================================
```
$ npm install babel-preset-stage-2
```
```
{
"presets": [
["es2015", { "modules": false }],"stage-2"

]
}
```

>重启webpack，就不会再有报错了。