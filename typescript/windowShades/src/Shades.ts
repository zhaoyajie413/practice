class Shades {
    renderDom:HTMLDivElement;
    childWidth:number;
    childHeight:number;
    constructor(dom){
        this.renderDom = dom;
        dom.style.position = "relative"
        this.appendChildren(this.getChildern(30,20),this.setFrontStyle.bind(this));
        this.appendChildren(this.getChildern(30,20),this.setOtherSideStyle.bind(this));
    }
    createChildItem(sc:number,sr:number,c:number,r:number):any{
        var div:HTMLDivElement = document.createElement("div");
        div.setAttribute("sc",sc.toString());
        div.setAttribute("sr",sr.toString());
        div.setAttribute("posColumn",(sc/c*100)+"%");
        div.setAttribute("posRow",(sr/r*100)+"%");
        return div;
    }
    setOtherSideStyle(div:HTMLDivElement,i:number){
        var div = this.setFrontStyle(div,i);
        div.style.animation=`rotateOtherPos 1.5s forwards ${div.getAttribute('sc')/10+div.getAttribute('sr')/10}s`;
        div.style.transform='rotateY(180deg)'
        div.style['background-image']="url('./images/r1.jpg')";
    }
    setFrontStyle(div:HTMLDivElement,i:number):HTMLDivElement{
        var styleString =`
            background-position:${div.getAttribute('posColumn')} ${div.getAttribute('posRow')};
            background-image:url('./images/fei.jpg');
            background-size:${this.renderDom.offsetWidth}px ${this.renderDom.offsetHeight}px;
            background-repeat:no-repeat;
            position:absolute;
            backface-visibility:hidden;
            top:${div.getAttribute('posRow')};
            left:${div.getAttribute('posColumn')};
            width:${this.childWidth}px;
            height:${this.childHeight}px;
            animation: rotatePos 1.5s forwards ${div.getAttribute('sc')/10+div.getAttribute('sr')/10}s;
            transform:rotateY(0deg);
        `
        div.setAttribute("style",styleString);
        return div;
    }
    getChildern(c:number,r:number):Array<any>{
        var items:Array<HTMLDivElement> = [];
        this.childWidth =this.renderDom.offsetWidth / c;
        this.childHeight =this.renderDom.offsetHeight / r ;
        for(var sc=0;sc<c;sc++){
            for(var sr=0;sr<r;sr++){
                items.push(this.createChildItem(sc,sr,c,r));
            }
        }
        return items;
    }
    appendChildren(list:Array<HTMLDivElement>,fn){
        var _this=this;
        list.forEach(function (it,i) {
            _this.renderDom.appendChild(it);
            fn(it,i);
        })
    }

}
