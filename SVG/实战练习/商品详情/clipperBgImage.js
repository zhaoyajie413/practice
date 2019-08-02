class clipperBgImage {
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
                <defs >
                    <g>
                        <filter id="blurFilter" y="-10" height="40" x="-10" width="150">
                            <feOffset in="SourceAlpha" dx="3" dy="-3" result="offset" />
                            <feGaussianBlur in="offset" stdDeviation="4"  result="blur"/>
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <pattern id="imageSource" width="100%" height="${height}" patternUnits="userSpaceOnUse">
                            <image   x="0" y="0"  height="${height}"  xlink:href="${src}"></image>
                        </pattern>

                    </g>
                </defs>

                <path x="0" y="0" fill="white" style="stroke: none;filter: url(#blurFilter);" d="M0 0 L${width} 0 L${width} ${height-bottom}  C${width} ${height-bottom} ${width/2} ${height} 0 ${height-bottom} Z" stroke="red"  ></path>
                <g style="clip-path:url(#bg);" >
                <path fill="url(#imageSource)" style="stroke: none;filter: url(#blurFilter);" d="M0 0 L${width} 0 L${width} ${height-bottom}  C${width} ${height-bottom} ${width/2} ${height} 0 ${height-bottom} Z" stroke="red"  ></path>
                    
                </g>
            </svg>
            `
    }
    getScreenWidth(){
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
}
