(function (window, document) {

	// 栅格系统
	var Layout = {
		init: function () {
			this.oSpRow = document.querySelectorAll('.sp-row');
			
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
			this.oLabelsList = document.querySelectorAll('.sp-radio');
			this.oRadiosList = document.querySelectorAll('.sp-radio input[type=radio]');

			this.initEvent();
		},

		initEvent: function () {
			var _this = this;

			// 给每一个单选按钮绑定点击事件
			for (var i = 0; i < this.oLabelsList.length; i++) {
				
				// 保证事件只绑定一次
				if ( !this.oLabelsList[i].hasEvent ) {
					this.oLabelsList[i].hasEvent = true;
					this.bindRadioClick(i);
				}
			}
		},

		// 给radio绑定事件
		bindRadioClick: function (idx) {
			var _this = this;
			var oLabel = this.oLabelsList[idx];
			var oRadio = this.oRadiosList[idx];

			oRadio.onclick = function () {
				var sName = this.name;

				// 已经选中的状态就不执行了
				if ( Lib.hasClass(oLabel, 'is-checked') ) {
					return false;
				}

				for ( var i = 0; i < _this.oRadiosList.length; i++ ) {
					var oR = _this.oRadiosList[i];

					if ( oR.name == sName ) {
						var oL = _this.oLabelsList[i];
						
						if ( oL == oLabel ) {
							Lib.addClass(oL, 'is-checked');
						} else {
							Lib.delClass(oL, 'is-checked');
						}
					}
				}
			}
		},
		bindSetChecked: function (idx) {
			var _this = this;
			var oRadio = this.oRadiosList[idx];

			

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
		    if(window.getComputedStyle) {
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

	window.SimpleUi = SimpleUi;
	Lib.addEvent(window, 'load', function () {
		SimpleUi.init();
	})
})(window, document)


	