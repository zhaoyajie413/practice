import Quill from "./quill";

const toolOptions = [
    ['sourceEditor']     //新添加的工具
];
const handlers = {
    shadeBox: null,
    sourceEditor: function () {     //添加工具方法
        let quill = this.quill;
        let range = quill.getSelection(true);
        //quill.insertText(range.index, '\n', Quill.sources.USER);
       /* quill.insertEmbed(range.index + 1, 'image', {
            alt: 'Kitten',
            url: 'https://placekitten.com/'+200+ '/' +200
        });*/
        quill.clipboard.dangerouslyPasteHTML(range, '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567084731543&di=6befd9ebbf8a967684a77f012bd03144&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FQm9rauhN7Ej2ToxLFUzwMUFhJeU6yFmR4nheoC6ZluPBZ8ibFwICkh5oCdZkickQbicyXK3eymcwJq2jMvQ3tf7ibQ%2F640%3Fwx_fmt%3Djpeg"/>');
      /*  quill.insertEmbed(10, 'image', 'https://quilljs.com/images/cloud.png');*/
        //quill.setSelection(range.index + 2, Quill.sources.SILENT);
    }
};

const BlockEmbed = Quill.import('blots/embed');

// Extending a class with our new functionality
class ImageBlot extends BlockEmbed {
    static create(value) {
        let node = super.create();
        node.style.width='50px';
        node.style.height="50px";
        node.style.display = 'inline-block';
        node.setAttribute('alt', value.alt);
        node.setAttribute('src', value.url);
        return node;
    }

    static value(node) {
        return {
            alt: node.getAttribute('alt'),
            url: node.getAttribute('src')
        };
    }
}

ImageBlot.blotName = 'image';
ImageBlot.tagName = 'img';

Quill.register(ImageBlot);

const options = {
    placeholder: '',
    theme: 'snow',  // 主题
    modules: {
        toolbar: {
            container: toolOptions,  // 工具栏选项
            handlers: handlers  // 事件重写
        }

    }

};

const  initButton = function (e) {      //在使用的页面中初始化按钮样式
    const sourceEditorButton = document.querySelector('.ql-sourceEditor');
    sourceEditorButton.style.cssText = "width:80px; border:1px solid #ccc; border-radius:5px;";
    sourceEditorButton.innerText = "源码编辑";
}

var quill = new Quill("#editor", options);
initButton();
