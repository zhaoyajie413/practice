interface Interface {

}

class AudioPlayer {
    duration : number;
    current : number;
    context:any;
    audioDom : HTMLAudioElement;
    eventMap : object = new Object();
    constructor(audio:HTMLAudioElement){
        this.audioDom = audio;
        //this.bindEvent("play");
    }
    bindEvent(eventType:string,callback:Function){
        this.eventMap[eventType]=function () {
            this.catchTrack(this.audioDom,callback);
        }.bind(this);
        this.audioDom.addEventListener(eventType,this.eventMap[eventType]);
    }
    setDuration(duration:number) : void{

    }

    getDuration() : number{
        return 0;
    }
    catchTrack(audioDom:any,fn?:Function){
            var audioContext:any = this.getContext();
            var analyser:any = this.connect(audioContext, audioDom);
            this.ticker(analyser,fn);
    }
    ticker(analyser:any,fn:Function):void{
        var _this=this;
        function requestAnimationFrame(){
            var array:Uint8Array = _this.parseContext(analyser);
            fn(array)
            setTimeout( function () {
                requestAnimationFrame()
            },15)
        }
        setTimeout( function () {
            requestAnimationFrame()
        },15)
    }
    getContext():any{
        /*兼容*/
        window.AudioContext= window.AudioContext || window.webkitAudioContext
            || window.mozAudioContext || window.msAudioContext;

        return new window.AudioContext();
    }
    connect(audioContext:any,audioDom:any):any{
        // 创建解析对象
        var analyser = audioContext.createAnalyser();
        // 拿到播放器去解析你音乐文件
        var audioBufferSouceNode = audioContext.createMediaElementSource(audioDom);
        // 将source与分析器连接
        audioBufferSouceNode.connect(analyser);
        // 将分析器与destination连接，这样才能形成到达扬声器的通路
        analyser.connect(audioContext.destination);
        return analyser;
    }
    parseContext(analyser:any):Uint8Array{
        // 将音频转换一个数组
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        return array;
    }
    start(){


    }
}

