"use strict";function fixHeaderHeight(i){console.log("1");var t=navigator.userAgent||navigator.vendor||window.opera;if(t.match(/Android/i)||t.match(/iPad/i)||t.match(/iPhone/i)||t.match(/iPod/i)){var a=$(i),e=a.outerHeight();a.css("height",e),a.css("min-height","auto")}}