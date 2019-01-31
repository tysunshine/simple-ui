
var oLayout = {
	init: function () {
		this.oLayoutBox = document.querySelector('.layout-box');
		if ( !this.oLayoutBox ) {
			return false;
		}
		this.oSpaceRow = this.oLayoutBox.querySelector('.space-row');
		this.oSpaceIpt = this.oLayoutBox.querySelector('.space-ipt');
		this.oSpaceBtn = this.oLayoutBox.querySelector('.space-btn');

		this.initEvent();
	},

	initEvent: function () {
		var _this = this;
		
		// 设置间隔
		this.oSpaceBtn.onclick = function () {
			var iNum = _this.oSpaceIpt.value;

			if ( !(iNum > 0) ) {
				_this.oSpaceIpt.value = 0;
				return false;
			}

			SimpleUi.layout.setSpace(_this.oSpaceRow, iNum);
		}
	}
}

var oRadio = {
	init: function () {
		this.oRadioBox = document.querySelector('.radio-box');
		if ( !this.oRadioBox ) {
			return false;
		}
		this.oShowBtn = this.oRadioBox.querySelector('.show-btn');
		this.oInitHideRadio = this.oRadioBox.querySelector('.init-hide-radio');
		this.oAddBtn = this.oRadioBox.querySelector('.add-btn');
		this.oAddRadioBox = this.oRadioBox.querySelector('.add-radio-box');
		this.oSingerBtn = this.oRadioBox.querySelector('.show-singer-btn');
		this.oSingerText = this.oRadioBox.querySelector('.show-singer-text');

		this.initEvent();
	},

	initEvent: function () {
		var _this = this;

		// 显示
		this.oShowBtn.onclick = function () {
			_this.oInitHideRadio.style.display = 'inline-block';
		}

		// 添加
		this.oAddBtn.onclick = function () {
			if ( _this.oAddRadioBox.children.length >= 3 ) {
				return false;
			}

			var oLabel = document.createElement('label');
			oLabel.className = 'sp-radio';
			oLabel.innerHTML = '<input type="radio" name="hobby4"/>按钮一个';

			_this.oAddRadioBox.appendChild(oLabel);
			SimpleUi.radio.init();
		}

		// 获取选中的按钮值
		this.oSingerBtn.onclick = function () {
			var oSinger = _this.oRadioBox.querySelectorAll('[type=radio][name=singer]');
			for ( var i = 0; i < oSinger.length; i++ ) {
				if ( oSinger[i].checked ) {
					_this.oSingerText.innerHTML = oSinger[i].value;
					break;
				}
			}
		}
	}
}


var manual = {
	init: function () {
		// 节点
		this.oLogo = document.querySelector('.header .logo');						// logo
		this.oLeftCont = document.getElementsByClassName('left-cont')[0];			// 左侧按钮盒子
		this.oRightCont = document.getElementsByClassName('right-cont')[0];			// 合成内容盒子
		this.oLinkBtns = document.getElementsByClassName('link-btn');				// 所有左侧按钮

		// 页面显示代码块
		this.oCodeBox = document.getElementsByClassName('code-box');				// 代码盒子
		this.oTagCodeBtn = document.getElementsByClassName('tag-code-btn');			// 显示、隐藏代码按钮

		this.home = 'basicColor';

		this.initState();
		this.initEvent();
	},

	// 初始化状态
	initState: function () {
		var hash = (location.hash || '#' + this.home).slice(1);
		// 1、根据hash显示数据
		this.setShowCont(hash);
	},

	// 初始化事件
	initEvent: function () {
		var _this = this;

		// 点击logo调到首页
		this.oLogo.onclick = function () {
			_this.setShowCont(_this.home);
		}

		// 左侧禁止滚动冒泡
		this.oLeftCont.onscroll = function (event) {
			event ? event.stopPropagation() : window.event.cancelBubble = true;
		}

		// 左侧按钮点击事件
		this.oLeftCont.onclick = function (evt) {
			var e = evt || window.event;
			var tag = e.target || e.srcElement;

			if ( !tools.hasClass(tag, 'link-btn') ) {
				return;
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

	// 设置显示数据
	setShowCont: function (name) {

		// 设置hash
		location.hash = name;
		
		// 设置右边主要内容
		this.oRightCont.innerHTML = window[name];

		// 设置滚动高度
		document.documentElement.scrollTop = document.body.scrollTop = 0;

		// 初始化内容
		switch (name) {
			case 'basicLayout': oLayout.init(); SimpleUi.layout.init(); break;
			case 'formRadio': oRadio.init(); SimpleUi.radio.init(); break;
			case 'formCheckbox': SimpleUi.checkbox.init(); break;
		}

		// 初始化代码块
		hljs.initHighlighting();

		// 设置按钮选中状态
		for ( var i = 0; i < this.oLinkBtns.length; i++ ) {
			if ( this.oLinkBtns[i].getAttribute('contname') == name ) {
				tools.addClass(this.oLinkBtns[i], 'is-checked');
			} else {
				tools.delClass(this.oLinkBtns[i], 'is-checked');
			}
		}
	}
}


window.onload = function () {
	manual.init();

	// 测试单项内容时需使用的配置
	// hljs.initHighlighting();
}
