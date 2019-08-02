class CanvasStage {
    canvasDom : HTMLCanvasElement;
    context:Object;
    strokeColor:string;
    constructor(canvasDom:HTMLCanvasElement,width:number=600,height:number=600){
        this.canvasDom = canvasDom;
        this.canvasDom.width = width;
        this.canvasDom.height = height;
        this.strokeColor = this.randomColor();
        this.context = this.canvasDom.getContext('2d');
        setInterval(function () {
            this.strokeColor = this.randomColor();
        }.bind(this),300)
    }
    randomColor(){
        var rand = Math.floor(Math.random( ) * 0xFFFFFF).toString(16);
        if(rand.length == 6){
            return "#"+rand;
        }else{
            return this.randomColor();
        }
    }
    translateCircle(a:number,x0:number,y0:number,r:number,d:number):any{
        var rad = a * Math.PI/180;
       var x  = x0+(r+d/2)*Math.cos(rad);
        var y = y0+(r+d/2)*Math.sin(rad);
        return {x,y};
    }
    getCirclePoints(x,y,r,array){
        var points:any = [];
        for(var i=0;i<360;i++){
            points.push(this.translateCircle(i,x,y,r,array[i]))
        }
        return points;
    }
    getLinePoints(array){
        var list:Array<number>=array.slice(0,600);
        var points = []
            list.map(function (num,i) {
            points.push({
                x:i,
                y:num
            })
        });
        console.log(points)
        return points;
    }
   drawLine(list:Array<any>){
        var ctx:any = this.context;
       ctx.fillStyle="rgba(255,255,255,0.2)";
       ctx.fillRect(0,0,this.canvasDom.width,this.canvasDom.height);
       //ctx.clearRect(0,0,this.canvasDom.width,this.canvasDom.height);
       ctx.beginPath();

       let x0:number = 0;
       let y0:number = 0;

       for(var i=0;i<list.length;i++){

           let x:number = list[i].x;
           let y:number =list[i].y;

           ctx.strokeStyle ='hsl(' + Math.floor(Math.random()*360)+ ', 100%, 65%)';
           i==0?ctx.moveTo(x,y):ctx.lineTo(x,y);
           //ctx.quadraticCurveTo(x+5,y>y0?y+5:y-5,x,y);
           x0=x;
           y0=y

       }
       //ctx.lineTo(list[0].x,list[0].y)
       ctx.stroke();
      /* ctx.closePath();*/
   }
}
