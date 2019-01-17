


var oRadio = {
	init: function () {
		this.oHobyRadio = document.getElementsByName('hoby');
		this.oHobyRadioBox = document.querySelector('.hoby-radio-box');
		this.oHobyIpt = document.querySelector('.hoby-ipt');
		this.oAddHobyBtn = document.querySelector('.add-hoby-btn');
		this.oShowHobyBtn = document.querySelector('.show-hoby-btn');
		this.oShowHobyBox = document.querySelector('.show-hoby-box');

		this.initState();
		this.initEvent();
	},

	initState: function () {
		
	},

	initEvent: function () {
		var _this = this;

		// 添加爱好
		if ( this.oAddHobyBtn.onclick != this.addRadio ) {
			this.oAddHobyBtn.onclick = this.addRadio.bind(this);
		}
		

		// 显示爱好
		if ( this.oShowHobyBtn.onclick != this.showValue ) {
			this.oShowHobyBtn.onclick = this.showValue.bind(this);
		}
	},

	// 添加
	addRadio: function () {
		if ( this.oHobyIpt.value.trim() == '' ) {
			return;
		}
		var oIpt = document.createElement('input');
		oIpt.className = 'sp-radio';
		oIpt.type = 'radio';
		oIpt.name = 'hoby';
		oIpt.setAttribute('data-text', this.oHobyIpt.value);
		this.oHobyRadioBox.appendChild(oIpt);
		SimpleUi.radio.init();

		this.oHobyIpt.value = '';
	},
	// 显示
	showValue: function () {
		for ( var i = 0; i < this.oHobyRadio.length; i++ ) {
			var item = this.oHobyRadio[i];
			if ( item.checked ) {
				this.oShowHobyBox.innerHTML = item.getAttribute('data-text');
				break;
			}
		}
	}
}


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
		this.setShowCont('basicColor');
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
					var oCodeBox = tag.parentNode;
					var oPre = oCodeBox.getElementsByTagName('pre');
					var show = tools.getStyle(oPre[0], 'display') == 'none' ? 'block' : 'none';
					var text = show == 'none' ? '显示代码' : '隐藏代码';
					tag.innerHTML = text;
					for ( var i = 0; i < oPre.length; i++ ) {
						var item = oPre[i];
						tools.setStyle(item, {
							display: show
						});
					}
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
				hljs.initHighlighting();

				// 初始化栅格系统
				switch (name) {
					case 'basicLayout': SimpleUi.layout.init(); break;
					case 'formRadio': oRadio.init(); SimpleUi.radio.init(); break;
				}
			}
		}, 30);
	}
}


window.onload = function () {
	manual.init();

	// 测试单项内容时需使用的配置
	// hljs.initHighlighting();
}
