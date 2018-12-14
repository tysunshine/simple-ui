(function (win, doc) {

	// 栅格系统
	var Layout = {
		init: function () {
			this.oSpRow = Lib.getByClass('sp-row');
			
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
			this.oSpRadio = Lib.getByClass('sp-radio');

			this.initState();
		},

		initState: function () {
			var _this = this;

			this.oSpRadio.forEach(function (item, index) {
				_this.changeHtml(item);
			})
		},

		initEvent: function () {
		},

		// 更换html代码
		changeHtml: function (oRadio) {
			console.log(oRadio);
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

		// 获取class节点
		getByClass: function (className) {
			var arr = [];
			if ( doc.querySelectorAll ) {
				var aElm = doc.querySelectorAll('.' + className);
				for(var i=0; i<arr.length; i++) {
					arr.push(aElm[i]);
				}
			} else {
				var aElm = doc.getElementsByTagName("*");
				
				for(var i=0; i<aElm.length; i++) {
					if(this.hasClass(aElm[i], className)) {
						arr.push(aElm[i]);
					}
				}
			}
			return arr;
		},

		// 获取节点的class列表
		getClassList: function (obj) {
			var sClass = obj.className;
			var aClass = sClass.split(' ');
			var list = [];
			aClass.forEach(function (item, index) {
				if ( item ) {
					list.push(item);
				}
			})
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
			var hasName = hasClass(obj, name);

			if ( !hasName ) {
				var aClass = getClassList(obj);
				var sClass = '';
				aClass.push(name);

				aClass.forEach(function (item, index, arr) {
					sClass += item;
					if ( index < arr.length - 1) {
						sClass += ' ';
					}
				})

				obj.className = sClass;
			}
		},

		// 删除样式名
		delClass: function (obj, name) {
			var hasName = hasClass(obj, name);

			if ( hasName ) {
				var sClass = obj.className;
				var arr = sClass.split(name);
				sClass = '';
				arr.forEach(function (item) {
					sClass += item;
				})
				obj.className = sClass;
			}
		},
	}

	win.SimpleUi = SimpleUi;
	win.addEventListener('load', function () {
		SimpleUi.init();
	})
})(window, document)


	