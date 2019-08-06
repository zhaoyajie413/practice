import MiniQuill from "./quill";

if ( typeof module === "object" && module && typeof module.exports === "object" ) {
    module.exports = MiniQuill;
} else {
    if ( typeof define === "function" && define.amd ) {
        define( "MiniQuill", [], function () { return jQuery; } );
    }
}

if ( typeof window === "object" && typeof window.document === "object" ) {
    window.MiniQuill = window.MiniQuill = MiniQuill;
}
