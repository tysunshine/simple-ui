function getStyle (obj, name) {
    if(window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    } else {
        return obj.currentStyle[name];
    }
}
function setStyle (obj, oStyle) {
    for(var i in oStyle) {
        obj.style[i] = oStyle[i];
    }
}