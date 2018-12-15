var manual = {
	init: function () {
		// 节点
		this.oLeftCont = document.getElementsByClassName('left-cont')[0];			// 左侧按钮盒子
		this.oRightCont = document.getElementsByClassName('right-cont')[0];			// 合成内容盒子
		this.oLinkBtns = document.getElementsByClassName('link-btn');				// 所有左侧按钮

		// 页面显示代码块
		this.oCodeBox = document.getElementsByClassName('code-box');				// 代码盒子
		this.oTagCodeBtn = document.getElementsByClassName('tag-code-btn');			// 显示、隐藏代码按钮

		this.initState();
		this.initEvent();
	},

	// 初始化状态
	initState: function () {
		// 1、设置left-cont与right-cont最大高度
		this.setMaxHeight(this.oLeftCont);
		this.setMaxHeight(this.oRightCont);

		// 2、设置默认显示数据
		// this.setShowCont('basicColor');
	},

	// 初始化事件
	initEvent: function () {
		var _this = this;

		// 左侧按钮点击事件
		this.oLeftCont.onclick = function (evt) {
			var e = evt || window.event;
			var tag = e.target || e.srcElement;

			if ( !tools.hasClass(tag, 'link-btn') ) {
				return;
			}

			// 按钮样式
			for ( var i = 0; i < _this.oLinkBtns.length; i++ ) {
				if ( tag === _this.oLinkBtns[i] ) {
					tools.addClass(_this.oLinkBtns[i], 'is-checked');
				} else {
					tools.delClass(_this.oLinkBtns[i], 'is-checked');
				}
			}

			// 更换内容
			var strContName = tag.getAttribute('contname');
			_this.setShowCont(strContName);
		}

		// 右侧内容点击-事件委托
		this.oRightCont.onclick = function (evt) {
			var e = evt || window.event;
			var tag = e.target || e.srcElement;
			var classname = tag.className;

			switch(classname) {
				// 点击显示代码
				case 'tag-code-btn':
					var oPre = tag.previousElementSibling;
					var show = tools.getStyle(oPre, 'display') == 'none' ? 'block' : 'none';
					var text = show == 'none' ? '显示代码' : '隐藏代码';
					tag.innerHTML = text;
					tools.setStyle(oPre, {
						display: show
					});
					break;
			}
			return;
		}
	},

	// 设置最大高度
	setMaxHeight: function (obj) {
		var iClientH = tools.getViewPort().height;
		var iDistanceTop = tools.getDistanceBody(obj).top;

		tools.setStyle(obj, {
			maxHeight: iClientH - iDistanceTop + 'px'
		})
	},

	// 设置显示数据
	setShowCont: function (name) {
		var _this = this;
		var oScriptCont = document.getElementById('scriptCont');
		var timer = null;

		oScriptCont = document.createElement('script');
		oScriptCont.id = 'scriptCont';
		oScriptCont.setAttribute('contname', name);
		document.body.appendChild(oScriptCont);
		oScriptCont.src = './js/cont/' + name + '.js';
		
		timer = setInterval(function () {
			if ( window.contTmp ) {
				clearInterval(timer);
				_this.oRightCont.innerHTML = contTmp;
				document.body.removeChild(oScriptCont);
				
				// 初始化代码块
				lightCode.init();

				// 初始化栅格系统
				switch (name) {
					case 'basicLayout': SimpleUi.layout.init(); break;
				}
			}
		}, 30);
	}
}


window.onload = function () {
	manual.init();

	// 测试单项内容时需使用的配置
	lightCode.init();
}
