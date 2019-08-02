var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(audio) {
        this.eventMap = new Object();
        this.audioDom = audio;
        //this.bindEvent("play");
    }
    AudioPlayer.prototype.bindEvent = function (eventType, callback) {
        this.eventMap[eventType] = function () {
            this.catchTrack(this.audioDom, callback);
        }.bind(this);
        this.audioDom.addEventListener(eventType, this.eventMap[eventType]);
    };
    AudioPlayer.prototype.setDuration = function (duration) {
    };
    AudioPlayer.prototype.getDuration = function () {
        return 0;
    };
    AudioPlayer.prototype.catchTrack = function (audioDom, fn) {
        var audioContext = this.getContext();
        var analyser = this.connect(audioContext, audioDom);
        this.ticker(analyser, fn);
    };
    AudioPlayer.prototype.ticker = function (analyser, fn) {
        var _this = this;
        function requestAnimationFrame() {
            var array = _this.parseContext(analyser);
            fn(array);
            setTimeout(function () {
                requestAnimationFrame();
            }, 15);
        }
        setTimeout(function () {
            requestAnimationFrame();
        }, 15);
    };
    AudioPlayer.prototype.getContext = function () {
        /*兼容*/
        window.AudioContext = window.AudioContext || window.webkitAudioContext
            || window.mozAudioContext || window.msAudioContext;
        return new window.AudioContext();
    };
    AudioPlayer.prototype.connect = function (audioContext, audioDom) {
        // 创建解析对象
        var analyser = audioContext.createAnalyser();
        // 拿到播放器去解析你音乐文件
        var audioBufferSouceNode = audioContext.createMediaElementSource(audioDom);
        // 将source与分析器连接
        audioBufferSouceNode.connect(analyser);
        // 将分析器与destination连接，这样才能形成到达扬声器的通路
        analyser.connect(audioContext.destination);
        return analyser;
    };
    AudioPlayer.prototype.parseContext = function (analyser) {
        // 将音频转换一个数组
        var array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(array);
        return array;
    };
    AudioPlayer.prototype.start = function () {
    };
    return AudioPlayer;
}());
//# sourceMappingURL=audioPlayer.js.map