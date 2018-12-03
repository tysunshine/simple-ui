var manual = {
	init: function () {
		// 节点
		this.oLeftCont = document.getElementsByClassName('left-cont')[0];			// 左侧按钮盒子
		this.oRightCont = document.getElementsByClassName('right-cont')[0];			// 合成内容盒子
		this.oLinkBtns = document.getElementsByClassName('link-btn');				// 所有左侧按钮

		this.initState();
		this.initEvent();
	},

	// 初始化状态
	initState: function () {
		// 1、设置left-cont与right-cont最大高度
		this.setMaxHeight(this.oLeftCont);
		this.setMaxHeight(this.oRightCont);

		// 2、设置默认显示数据
		this.setShowCont('basicColor');
	},

	// 初始化事件
	initEvent: function () {
		var _this = this;

		// 左侧按钮点击事件
		this.oLeftCont.onclick = function (evt) {
			var e = evt || window.event;
			var tag = e.target || e.srcElement;

			if ( !hasClass(tag, 'link-btn') ) {
				return;
			}

			// 按钮样式
			for ( var i = 0; i < _this.oLinkBtns.length; i++ ) {
				if ( tag === _this.oLinkBtns[i] ) {
					addClass(_this.oLinkBtns[i], 'is-checked');
				} else {
					delClass(_this.oLinkBtns[i], 'is-checked');
				}
			}

			// 更换内容
			var strContName = tag.getAttribute('contname');
			_this.setShowCont(strContName);
		}
	},

	// 设置最大高度
	setMaxHeight: function (obj) {
		var iClientH = getViewPort().height;
		var iDistanceTop = getDistanceBody(obj).top;

		setStyle(obj, {
			maxHeight: iClientH - iDistanceTop + 'px'
		})
	},

	// 设置显示数据
	setShowCont: function (name) {
		var _this = this;
		var oScriptCont = document.getElementById('scriptCont');
		var timer = null;

		if ( oScriptCont ) {
			if ( oScriptCont.getAttribute('contname') == name ) {
				return;
			}
			document.body.removeChild(oScriptCont);
		}

		oScriptCont = document.createElement('script');
		oScriptCont.id = 'scriptCont';
		oScriptCont.setAttribute('contname', name);
		document.body.appendChild(oScriptCont);
		oScriptCont.src = './cont/' + name + '.js';
		
		timer = setInterval(function () {
			if ( window.contTmp ) {
				clearInterval(timer);
				_this.oRightCont.innerHTML = contTmp;
			}
		}, 30);
	}
}

window.onload = function () {
	// manual.init();
	SimpleUi.layout.init();
}