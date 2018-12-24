(function (win, doc) {

	// 栅格系统
	var Layout = {
		init: function () {
			this.oSpRow = doc.querySelectorAll('.sp-row');
			
			this.initState();
		},

		initState: function () {
			this.setColSpace();
		},

		// 设置所有sp-col的间隔
		setColSpace: function () {
			for ( var i = 0; i < this.oSpRow.length; i++ ) {
				this.setSpace(this.oSpRow[i], this.oSpRow[i].getAttribute('space'));
			}
		},

		// 设置单个sp-col间隔
		setSpace: function (oRow, iSpace) {
			var oCol = oRow.children;

			if ( !(iSpace > 0) ) {
				return;
			}

			oRow.setAttribute('space', iSpace);

			for ( var j = 0; j < oCol.length; j++ ) {
				if ( j != 0 ) {
					Lib.setStyle(oCol[j], {
						paddingLeft: iSpace / 2 + 'px'
					})
				}

				if ( j != oCol.length - 1 ) {
					Lib.setStyle(oCol[j], {
						paddingRight: iSpace / 2 + 'px'
					})
				}
			}
		}
	}

	// 单选按钮
	var Radio = {
		init: function () {
			this.oSpRadio = doc.querySelectorAll('.sp-radio');
			
			this.initState();
		},

		initState: function () {
			var _this = this;

			for ( var i = 0 ; i < this.oSpRadio.length; i++ ) {
				// 判断是否已经初始化过了
				var oRadio = this.oSpRadio[i];
				if ( !(Lib.hasClass(oRadio.parentNode, 'sp-radio-input') && Lib.hasClass(oRadio.parentNode.parentNode, 'sp-radio-label')) ) {
					this.setLabelHtml(oRadio);
				}
			}
		},

		// 更换html代码
		setLabelHtml: function (oRadio) {
			var oP = oRadio.parentNode;
			var oLabel = document.createElement('label');
			var oInput = document.createElement('span');
			var oText = document.createElement('span');
			var oFragment = document.createDocumentFragment();

			oLabel.className = 'sp-radio-label';
			oP.replaceChild(oLabel, oRadio);
			if ( oRadio.checked ) {
				Lib.addClass(oLabel, 'is-checked');
			}
			if ( oRadio.disabled ) {
				Lib.addClass(oLabel, 'is-disabled');
			}

			oInput.className = 'sp-radio-input';
			oInput.appendChild(oRadio);

			oText.className = 'sp-radio-text';
			oText.innerHTML = oRadio.getAttribute('data-text') || '';

			oFragment.appendChild(oInput);
			oFragment.appendChild(oText);
			oLabel.appendChild(oFragment);

			// 给radio绑定事件
			this.bindRadioClick(oRadio);
		},

		// 给radio绑定事件
		bindRadioClick: function (oRadio) {
			var _this = this;

			oRadio.onclick = function () {
				var sName = this.name;

				for ( var i = 0; i < _this.oSpRadio.length; i++ ) {
					var oR = _this.oSpRadio[i];
					if ( oR.name == sName ) {
						if ( oR.checked ) {
							Lib.addClass(oR.parentNode.parentNode, 'is-checked');
						} else {
							Lib.delClass(oR.parentNode.parentNode, 'is-checked');
						}
					}
				}
			}
		}
	}
	
	// 简单的UI
	var SimpleUi = {
		init: function () {
			this.layout = Layout;
			this.radio = Radio;

			this.initState();
			this.initEvent();
		},

		initState: function () {
			this.layout.init();
			this.radio.init();
		},

		initEvent: function () {
		}
	}

	var Lib = {
		//兼容版事件监听函数
		addEvent: function (target,type,fn) {
			if(target.addEventListener) {
				//寻常浏览器
				target.addEventListener(type,fn);
			} else if(target.attachEvent) {
				//ie低版本兼容
				target.attachEvent("on"+type,fn);
			} else {
				//ie5兼容
				target["on"+type] = fn;
			}
		},
		//兼容版移除事件监听函数
		removeEvent: function (target,type,fn) {
			if(target.removeEventListener) {
				target.removeEventListener(type,fn);
			} else if(target.detachEvent) {
				target.detachEvent("on"+type,fn);
			} else {
				target["on"+type] = null;
			}
		},
		// 获取样式
		getStyle: function (obj, name) {
		    if(win.getComputedStyle) {
		        return getComputedStyle(obj, null)[name];
		    } else {
		        return obj.currentStyle[name];
		    }
		},
		// 设置样式
		setStyle: function (obj, oStyle) {
		    for(var i in oStyle) {
		        obj.style[i] = oStyle[i];
		    }
		},

		// 获取节点的class列表
		getClassList: function (obj) {
			var sClass = obj.className;
			var aClass = sClass.split(' ');
			var list = [];
			for ( var i = 0; i < aClass.length; i++ ) {
				var item = aClass[i];
				if ( item ) {
					list.push(item);
				}
			}
			return list;
		},

		// 判断是否存在class
		hasClass: function (obj, name) {
			var sClass = obj.className;
			var reg = new RegExp('\\b' + name + '\\b');
			if ( reg.test(sClass) ) {
				return true;
			}
			return false;
		},

		// 添加样式名
		addClass: function (obj, name) {
			var hasName = this.hasClass(obj, name);

			if ( !hasName ) {
				var aClass = this.getClassList(obj);
				var sClass = '';
				aClass.push(name);

				for ( var i = 0; i < aClass.length; i++ ) {
					var item = aClass[i];
					sClass += item;
					if ( i < aClass.length - 1) {
						sClass += ' ';
					}
				}

				obj.className = sClass;
			}
		},

		// 删除样式名
		delClass: function (obj, name) {
			var hasName = this.hasClass(obj, name);

			if ( hasName ) {
				var sClass = obj.className;
				var arr = sClass.split(name);
				sClass = '';

				for ( var i = 0; i < arr.length; i++ ) {
					var item = arr[i];
					sClass += item;
				}
				obj.className = sClass;
			}
		},
	}

	win.SimpleUi = SimpleUi;
	Lib.addEvent(win, 'load', function () {
		SimpleUi.init();
	})
})(window, document)


	