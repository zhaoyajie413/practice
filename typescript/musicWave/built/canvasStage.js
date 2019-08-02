var CanvasStage = /** @class */ (function () {
    function CanvasStage(canvasDom, width, height) {
        if (width === void 0) { width = 600; }
        if (height === void 0) { height = 600; }
        this.canvasDom = canvasDom;
        this.canvasDom.width = width;
        this.canvasDom.height = height;
        this.strokeColor = this.randomColor();
        this.context = this.canvasDom.getContext('2d');
        setInterval(function () {
            this.strokeColor = this.randomColor();
        }.bind(this), 300);
    }
    CanvasStage.prototype.randomColor = function () {
        var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        if (rand.length == 6) {
            return "#" + rand;
        }
        else {
            return this.randomColor();
        }
    };
    CanvasStage.prototype.translateCircle = function (a, x0, y0, r, d) {
        var rad = a * Math.PI / 180;
        var x = x0 + (r + d / 2) * Math.cos(rad);
        var y = y0 + (r + d / 2) * Math.sin(rad);
        return { x: x, y: y };
    };
    CanvasStage.prototype.getCirclePoints = function (x, y, r, array) {
        var points = [];
        for (var i = 0; i < 360; i++) {
            points.push(this.translateCircle(i, x, y, r, array[i]));
        }
        return points;
    };
    CanvasStage.prototype.getLinePoints = function (array) {
        var list = array.slice(0, 600);
        var points = [];
        list.map(function (num, i) {
            points.push({
                x: i,
                y: num
            });
        });
        console.log(points);
        return points;
    };
    CanvasStage.prototype.drawLine = function (list) {
        var ctx = this.context;
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.fillRect(0, 0, this.canvasDom.width, this.canvasDom.height);
        //ctx.clearRect(0,0,this.canvasDom.width,this.canvasDom.height);
        ctx.beginPath();
        ctx.strokeStyle = this.strokeColor;
        var x0 = 0;
        var y0 = 0;
        for (var i = 0; i < list.length; i++) {
            var x = list[i].x;
            var y = list[i].y;
            i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            //ctx.quadraticCurveTo(x+5,y>y0?y+5:y-5,x,y);
            x0 = x;
            y0 = y;
        }
        //ctx.lineTo(list[0].x,list[0].y)
        ctx.stroke();
        /* ctx.closePath();*/
    };
    return CanvasStage;
}());
//# sourceMappingURL=canvasStage.js.map