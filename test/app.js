var fs = require('fs'); // 引入fs模块
var entries = [];
const DirPath = 'C:\\study\\常用框架\\angular框架\\angular-confirm-master';
var filesTree = {children: []};
/*
* 读取目录下的文件或文件目录
* @return {Array}
* */
const readfiles = (pathName) => {
    return new Promise((rev, rej) => {
        fs.readdir(pathName, {"withFileTypes": true}, async function (err, files) {
            if (err) {
                throw err;
            }
            // files是一个数组
            rev(files);
        })
    })
}
/*
*
* */
const output = (path, title) => {
    return new Promise((rev, rej) => {
        fs.readFile(path, 'utf-8', function (err, data) {
            // 读取文件失败/错误
            if (err) {
                throw err;
            }
            if(/\w*.html$/.test(title))console.log(title);
            fs.writeFile("./files/"+title, data, function (err) {
                if (err) throw err;
                rev();
            });
        });
    })
}

const iteration = async (path, tree) => {
    let files = await readfiles(path);
    for (var it of files) {
        if (it.isDirectory()) {
            it = {
                title: it.name,
                children: [],
                isFile: false
            }
            await iteration(path + "/" + it.title, it);
        } else {
            it = {
                path: path + "/" + it.name,
                title: it.name,
                isFile: true
            }
            await output(it.path, it.title)
        }
        tree.children.push(it)
    }
}

const start = async () => {
    await iteration(DirPath, filesTree);
    console.log("完成了");


}

start()


