(function (window, document) {

	// 栅格系统
	var SpLayout = {
		init: function () {
			this.oSpRowSpace = document.querySelectorAll('.sp-row[space]');
			this.oSpColOffset = document.querySelectorAll('.sp-row [class*=sp-col-][offset]');
			this.oSpColPush = document.querySelectorAll('.sp-row [class*=sp-col-][push]');
			this.oSpColPull = document.querySelectorAll('.sp-row [class*=sp-col-][pull]');

			this.initState();
		},

		initState: function () {
			this.setDistance();
		},

		// 设置所有sp-col的间隔
		setDistance: function () {
			// 所有有space的sp-row
			for ( var i = 0; i < this.oSpRowSpace.length; i++ ) {
				this.setSpace(this.oSpRowSpace[i], this.oSpRowSpace[i].getAttribute('space'));
			}

			// 所有有offset的sp-col
			for ( var i = 0; i < this.oSpColOffset.length; i++ ) {
				this.setOffset(this.oSpColOffset[i], this.oSpColOffset[i].getAttribute('offset'));
			}

			// 所有有push的sp-col
			for ( var i = 0; i < this.oSpColPush.length; i++ ) {
				this.setPush(this.oSpColPush[i], this.oSpColPush[i].getAttribute('push'));
			}

			// 所有有pull的sp-col
			for ( var i = 0; i < this.oSpColPull.length; i++ ) {
				this.setPull(this.oSpColPull[i], this.oSpColPull[i].getAttribute('pull'));
			}
		},

		// 设置单个sp-col间隔
		setSpace: function (oRow, iSpace) {
			var oCol = oRow.querySelectorAll('[class*=sp-col-]');

			if ( !(iSpace > 0) ) {
				return false;
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
		},

		// 设置sp-col的margin-left
		setOffset: function (oCol, iNum) {
			if ( !(iNum > 0) ) {
				return false;
			}

			oCol.setAttribute('offset', iNum);
			Lib.setStyle(oCol, {
				marginLeft: iNum + 'px'
			})
		},

		// 设置sp-col的left
		setPush: function (oCol, iNum) {
			if ( !(iNum > 0) ) {
				return false;
			}

			oCol.setAttribute('push', iNum);
			Lib.setStyle(oCol, {
				position: 'relative',
				left: iNum + 'px',
				right: 'auto'
			})
		},

		// 设置sp-col的right
		setPull: function (oCol, iNum) {
			if ( !(iNum > 0) ) {
				return false;
			}

			oCol.setAttribute('pull', iNum);
			Lib.setStyle(oCol, {
				position: 'relative',
				right: iNum + 'px',
				left: 'auto'
			})
		}
	}

	// 单选按钮
	var SpRadio = {
		init: function () {
			this.oLabelList = document.querySelectorAll('.sp-radio');
			this.oRadioList = document.querySelectorAll('.sp-radio input[type=radio]');

			if ( this.oLabelList.length != this.oRadioList.length ) {
				return false;
			}

			this.initEvent();
		},

		initEvent: function () {
			// 给每一个单选按钮绑定点击事件
			for (var i = 0; i < this.oLabelList.length; i++) {
				
				// 保证事件只绑定一次
				if ( !this.oLabelList[i].hasEvent ) {
					this.oLabelList[i].hasEvent = true;
					// 绑定事件
					this.oRadioList[i].onclick = this.bindClick;
					this.oRadioList[i].setChecked = this.bindChecked;
					this.oRadioList[i].setDisabled = this.bindDisabled;
				}
			}
		},

		/**
		 * 所有单选按钮的点击事件指向同一个click处理函数
		 */
		bindClick: function () {
			var _this = SpRadio;
			var oLabel = this.parentNode;
			var sName = this.name;

			// 已经选中的状态就不执行了
			if ( Lib.hasClass(oLabel, 'is-checked') ) {
				return false;
			}

			for ( var i = 0; i < _this.oRadioList.length; i++ ) {
				var oR = _this.oRadioList[i];

				if ( oR.name == sName ) {
					var oL = _this.oLabelList[i];
					
					if ( oL == oLabel ) {
						Lib.addClass(oL, 'is-checked');
					} else {
						Lib.delClass(oL, 'is-checked');
					}
				}
			}
		},

		/**
		 * 设置单选按钮的选中状态
		 * bl true为选中，false为未选中
		 */
		bindChecked: function (bl) {
			if ( bl ) {
				this.click();
			} else {
				this.checked = false;
				Lib.delClass(this.parentNode, 'is-checked');
			}
		},

		/**
		 * 设置单选按钮的可选状态
		 * bl true为可选择，false为不可选择
		 */
		bindDisabled: function (bl) {
			var oLabel = this.parentNode;
			if ( bl ) {
				this.disabled = true;
				Lib.addClass(oLabel, 'is-disabled');
			} else {
				this.disabled = false;
				Lib.delClass(oLabel, 'is-disabled');
			}
		}
	}

	// 复选按钮
	var SpCheckbox = {
		init: function () {
			this.oLabelList = document.querySelectorAll('.sp-checkbox');
			this.oCheckList = document.querySelectorAll('.sp-checkbox input[type=checkbox]');

			if ( this.oLabelList.length != this.oCheckList.length ) {
				return false;
			}
			this.initEvent();
		},

		initEvent: function () {
			// 给每一个单选按钮绑定点击事件
			for ( var i = 0; i < this.oLabelList.length; i++ ) {
				if ( !this.oLabelList[i].hasEvent ) {
					this.oLabelList[i].hasEvent = true;
					// 绑定事件
					this.oCheckList[i].onclick = this.bindClick;
					this.oCheckList[i].setDisabled = this.bindDisabled;
				}
			}
		},

		/**
		 * 给复选框绑定点击事件
		 */
		bindClick: function () {
			var _this = SpCheckbox;
			var oLabel = this.parentNode;

			if ( this.checked ) {
				Lib.addClass(oLabel, 'is-checked');
			} else {
				Lib.delClass(oLabel, 'is-checked');
			}
		},

		/**
		 * 绑定不可选择
		 * bl true为可选
		 */
		bindDisabled: function (bl) {
			var oLabel = this.parentNode;
			if ( bl ) {
				this.disabled = true;
				Lib.addClass(oLabel, 'is-disabled');
			} else {
				this.disabled = false;
				Lib.delClass(oLabel, 'is-disabled');
			}
		}
	}
	
	// 简单的UI
	var SimpleUi = {
		init: function () {
			this.layout = SpLayout;
			this.radio = SpRadio;
			this.checkbox = SpCheckbox;

			this.initState();
			this.initEvent();
		},

		initState: function () {
			this.layout.init();
			this.radio.init();
			this.checkbox.init();
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


	