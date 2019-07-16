const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.plugin("compile", function(params) {
            console.log("编译开始")
        })
    }
}

module.exports=ConsoleLogOnBuildWebpackPlugin;
