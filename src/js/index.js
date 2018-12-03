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


	// 简单的UI
	var SimpleUi = {

		init: function () {
			this.layout = Layout;
			
			this.initState();
			this.initEvent();
		},

		initState: function () {
			this.layout.init();
		},

		initEvent: function () {
		}
	}

	var Lib = {
		// 获取class节点
		getByClass: function (className) {
			var aElm = doc.getElementsByTagName("*");
			var arr = [];
			for(var i=0; i<aElm.length; i++) {
				if(aElm[i].className == className) {
					arr.push(aElm[i]);
				}
			}
			return arr;
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
	}

	win.SimpleUi = SimpleUi;
	win.addEventListener('load', function () {
		SimpleUi.init();
	})
})(window, document)


	