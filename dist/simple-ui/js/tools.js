(function (window, document) {

var tools = {
	/**
	 * ------------------------------------------
	 * 事件监听与移除
	 * ------------------------------------------
	 */
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

	/**
	 * ------------------------------------------
	 * 样式名增、删、判断、获取列表
	 * ------------------------------------------
	 */
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
		var hasName = this.hasClass(obj, name);

		if ( !hasName ) {
			var aClass = this.getClassList(obj);
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
		var hasName = this.hasClass(obj, name);

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


	/**
	 * ------------------------------------------
	 * 样式的获取与设置
	 * ------------------------------------------
	 */
	getStyle: function (obj, name) {
	    if(window.getComputedStyle) {
	        return getComputedStyle(obj, null)[name];
	    } else {
	        return obj.currentStyle[name];
	    }
	},
	setStyle: function (obj, oStyle) {
	    for(var i in oStyle) {
	        obj.style[i] = oStyle[i];
	    }
	},

	/**
	 * ------------------------------------------
	 * 获取可视窗口的大小
	 * ------------------------------------------
	 */
	getViewPort: function () {
	    if(document.compatMode == "BackCompat") {   //浏览器嗅探，混杂模式
	        return {
	            width: document.body.clientWidth,
	            height: document.body.clientHeight
	        };
	    } else {
	        return {
	            width: document.documentElement.clientWidth,
	            height: document.documentElement.clientHeight
	        };
	    }
	},

	/**
	 * ------------------------------------------
	 * 获取节点距离body的距离
	 * ------------------------------------------
	 */
	getDistanceBody: function (obj) {
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
}

window.tools = tools;
})(window, document);