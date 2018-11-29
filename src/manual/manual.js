window.onload = function () {

	var oLeftCont = document.getElementsByClassName('left-cont')[0];
	var oRightCont = document.getElementsByClassName('right-cont')[0];

	var oLinkBtns = document.getElementsByClassName('link-btn');
	var oLinkConts = document.getElementsByClassName('link-cont');

	// 设置最大高度
	setMaxHeight(oLeftCont);
	setMaxHeight(oRightCont);

	// 左侧点击更换右侧信息
	oLeftCont.onclick = function (evt) {
		var e = evt || window.event;
		evt ? e.stopPropagation() : e.cancelBubble = true;
		evt ? e.preventDefault() : e.returnVlaue = false;

		var tag = e.target || e.srcElement;

		if ( !hasClass(tag, 'link-btn') ) {
			return;
		}

		// 按钮样式
		for ( var i = 0; i < oLinkBtns.length; i++ ) {
			if ( tag === oLinkBtns[i] ) {
				addClass(oLinkBtns[i], 'is-checked');
			} else {
				delClass(oLinkBtns[i], 'is-checked');
			}
		}

		// 内容样式
		var sContname = tag.getAttribute('contname');
		for ( var i = 0; i < oLinkConts.length; i++ ) {
			var oCont = oLinkConts[i];

			if ( sContname == oCont.getAttribute('contname') ) {
				addClass(oCont, 'is-checked');
			} else {
				delClass(oCont, 'is-checked');
			}
		}
	}
}


// 设置最大高度
function setMaxHeight (obj) {
	var iClientH = getViewPort().height;
	var iDistanceTop = getDistanceBody(obj).top;

	setStyle(obj, {
		maxHeight: iClientH - iDistanceTop + 'px'
	})
}