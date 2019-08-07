var fs = require('fs'); // 引入fs模块
var entries = [];
var marked = require('marked');
var header = require("./lib/header_home");
var index = require("./lib/index_home");
var headerIframe = require("./lib/header_iframe");
var rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});//基本设置
const DirPath = './doc'
var filesTree = {children: []};
var menuHtml = "";
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
            data.replace(/###(\S|\\t)*(\\r|\\n)?/g, function (world) {
                return world;
            })
            // 读取文件失败/错误
            if (err) {
                throw err;
            }
            // 读取文件成功
            data = marked(data);
            let html = headerIframe + "<body style='padding:100px 30px'>" + data + "</body>";
            let index = title.lastIndexOf(".");
            title = title.slice(0, index)
            fs.writeFile('./html/' + title + ".html", html, function (err) {
                if (err) throw err;
                rev();
            });
        });
    })
}

const iteration = async (path, tree) => {
    console.log(path)
    let files = await readfiles(path);
    for (var it of files) {
        console.log(it.title)
        if (it.isDirectory()) {
            it = {
                title: it.name,
                children: [],
                isFile: false
            }
            await iteration(path + "/" + it.title, it)
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
    console.log(filesTree)
    var treeStr = JSON.stringify(filesTree.children);
    var jsStr = `
			$('#tree').tree({
			'data':${treeStr}, 
			 itemCreator: function($li, item) {
			 console.log(item)
			       var title=item.title.replace('.md','');
			       var attr=item.path?{href:'./html/'+title+'.html',target:'content'}:{}
                    $li.append($('<a/>',attr ).text(title));
                }
    });
	`;
    index = index.replace('<headerCode></headerCode>', header);
    index = index.replace('<scriptCode></scriptCode>', jsStr);
    fs.writeFile("index.html", index, function (err) {
        if (err) throw err;
    });

}

start()


