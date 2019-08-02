var Shades = /** @class */ (function () {
    function Shades(dom) {
        this.renderDom = dom;
        dom.style.position = "relative";
        this.appendChildren(this.getChildern(30, 20), this.setFrontStyle.bind(this));
        this.appendChildren(this.getChildern(30, 20), this.setOtherSideStyle.bind(this));
    }
    Shades.prototype.createChildItem = function (sc, sr, c, r) {
        var div = document.createElement("div");
        div.setAttribute("sc", sc.toString());
        div.setAttribute("sr", sr.toString());
        div.setAttribute("posColumn", (sc / c * 100) + "%");
        div.setAttribute("posRow", (sr / r * 100) + "%");
        return div;
    };
    Shades.prototype.setOtherSideStyle = function (div, i) {
        var div = this.setFrontStyle(div, i);
        div.style.animation = "rotateOtherPos 1.5s forwards " + (div.getAttribute('sc') / 10 + div.getAttribute('sr') / 10) + "s";
        div.style.transform = 'rotateY(180deg)';
        div.style['background-image'] = "url('./images/r1.jpg')";
    };
    Shades.prototype.setFrontStyle = function (div, i) {
        var styleString = "\n            background-position:" + div.getAttribute('posColumn') + " " + div.getAttribute('posRow') + ";\n            background-image:url('./images/fei.jpg');\n            background-size:" + this.renderDom.offsetWidth + "px " + this.renderDom.offsetHeight + "px;\n            background-repeat:no-repeat;\n            position:absolute;\n            backface-visibility:hidden;\n            top:" + div.getAttribute('posRow') + ";\n            left:" + div.getAttribute('posColumn') + ";\n            width:" + this.childWidth + "px;\n            height:" + this.childHeight + "px;\n            animation: rotatePos 1.5s forwards " + (div.getAttribute('sc') / 10 + div.getAttribute('sr') / 10) + "s;\n            transform:rotateY(0deg);\n        ";
        div.setAttribute("style", styleString);
        return div;
    };
    Shades.prototype.getChildern = function (c, r) {
        var items = [];
        this.childWidth = this.renderDom.offsetWidth / c;
        this.childHeight = this.renderDom.offsetHeight / r;
        for (var sc = 0; sc < c; sc++) {
            for (var sr = 0; sr < r; sr++) {
                items.push(this.createChildItem(sc, sr, c, r));
            }
        }
        return items;
    };
    Shades.prototype.appendChildren = function (list, fn) {
        var _this = this;
        list.forEach(function (it, i) {
            _this.renderDom.appendChild(it);
            fn(it, i);
        });
    };
    return Shades;
}());
//# sourceMappingURL=Shades.js.map