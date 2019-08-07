vue -- 使用sass并引入公共sass文件
========================

sass可以提高我们的开发效率，怎么在vue的项目中使用sass并且可以设置一些公共的文件呢？

使用sass
--------------

### 1、安装sass的依赖包

```
npm install --save-dev sass-loader
//sass-loader依赖于node-sass
npm install --save-dev node-sass
```

### 2、在build文件夹下的webpack.base.conf.js的rules里面添加配置

```
module: {
    rules: [
      //...默认及其他
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
}
```
### 3、在.vue文件中修改style标签
```
<style lang="scss">
```
配置公共sass文件
-----------

目前没有靠谱的方案，这里有一个方案（如果.vue的结构相对规律是完全可以使用）

在build文件夹下的utils.js的exports.cssLoaders里面的return中添加配置
```
//默认
sass: generateLoaders('sass', { indentedSyntax: true }),  
//.vue文件相对于base.scss文件，所以结构相对统一时用处更大喽~
scss: generateLoaders('sass',{data:'@import "../assets/scss/base";'}), 
```

官方推荐的方式（亲测有效-但需要其他依赖）
------------------------

### 1、下载依赖
```
cnpm install  --save-dev  sass-resources-loader 
```
### 2、在build/utils.js中修改配置：
```
scss: generateLoaders('sass').concat(
  {
    loader: 'sass-resources-loader',
    options: {
      	resources:[
						path.resolve(__dirname, '../src/assets/scss/color.scss',),
						path.resolve(__dirname, '../src/assets/scss/reset.scss',)
					]  
    }
  }
),
```