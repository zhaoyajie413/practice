import Delta from "quill-delta";

var container = document.querySelector("#editor");
container.setAttribute("contenteditable",true);

const delta = new Delta([
    { insert: 'Gandalf', attributes: { bold: true } },
    { insert: ' the ' },
    { insert: 'Grey', attributes: { color: '#ccc' } }
]);

//获取当前光标位置
const getCursortPosition = function (element) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {//谷歌、火狐
        sel = win.getSelection();
        if (sel.rangeCount > 0) {//选中的区域
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();//克隆一个选中区域
            preCaretRange.selectNodeContents(element);//设置选中区域的节点内容为当前节点
            preCaretRange.setEnd(range.endContainer, range.endOffset);  //重置选中区域的结束位置
            caretOffset = preCaretRange.toString().length;
        }
    } else if ((sel = doc.selection) && sel.type != "Control") {//IE
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}

console.log(container.selectionStart)
container.addEventListener("input",function (e) {
    var index = getCursortPosition(this);
    console.log(index)
    console.log(e.target)

})
