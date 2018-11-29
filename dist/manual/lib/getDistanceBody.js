// 获取节点到body的高度
function getDistanceBody (obj) {
	var oBody = document.body;
    var oHtml = document.documentElement;
    var oParent = null;
    var oDistance = {
        top: 0,
        left: 0
    }

    do {
        oDistance.top += obj.offsetTop;
        oDistance.left += obj.offsetLeft;

        oParent = obj.offsetParent;
        obj = oParent;
    } while(oParent && oParent != oBody && oParent != oHtml)

    return oDistance;
}