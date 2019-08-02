class clipperBgBevelAngle {
    constructor({dom,src,height,offsetBottom}) {
        dom.innerHTML=this.teplate(src,this.getScreenWidth(),height,offsetBottom);
    }
    teplate(src,width,height,bottom) {
        return `
               <svg version="1.1"
                 width="${width}"
                 height="${height}"
                 viewBox="0 0 ${width} ${height}"
                 xmlns="http://www.w3.org/2000/svg">
                 <defs>
                    <linearGradient id="orange_red" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#fead6c;
                    stop-opacity:1"/>
                    <stop offset="100%" style="stop-color:#ff6184;
                    stop-opacity:1"/>
                    </linearGradient>
                 </defs>
                <defs >
                    <g>
                        <filter id="blurFilter" y="-10" height="40" x="-10" width="150">
                            <feOffset in="SourceAlpha" dx="2" dy="-2" result="offset" />
                            <feGaussianBlur in="offset" stdDeviation="4"  result="blur"/>
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </g>
                </defs>
                <g style="clip-path:url(#bg);" >
                    <path fill="url('#orange_red')" style="stroke: none;filter: url(#blurFilter);" d="M0 0 L${width} 0 L${width} ${height-bottom}  L${width} ${height-bottom}  L0 ${height-6} Z" stroke="red"  ></path>
                </g>
            </svg>
            `
    }
    getScreenWidth(){
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
}
