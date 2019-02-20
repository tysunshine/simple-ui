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
					tools.setStyle(oCol[j], {
						paddingLeft: iSpace / 2 + 'px'
					})
				}

				if ( j != oCol.length - 1 ) {
					tools.setStyle(oCol[j], {
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
			tools.setStyle(oCol, {
				marginLeft: iNum + 'px'
			})
		},

		// 设置sp-col的left
		setPush: function (oCol, iNum) {
			if ( !(iNum > 0) ) {
				return false;
			}

			oCol.setAttribute('push', iNum);
			tools.setStyle(oCol, {
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
			tools.setStyle(oCol, {
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
					this.oRadioList[i].getChecked = this.bindGetChecked;
					this.oRadioList[i].setChecked = this.bindSetChecked;
					this.oRadioList[i].getDisabled = this.bindGetDisabled;
					this.oRadioList[i].setDisabled = this.bindSetDisabled;
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
			if ( tools.hasClass(oLabel, 'is-checked') ) {
				return false;
			}

			for ( var i = 0; i < _this.oRadioList.length; i++ ) {
				var oR = _this.oRadioList[i];

				if ( oR.name == sName ) {
					var oL = _this.oLabelList[i];
					
					if ( oL == oLabel ) {
						tools.addClass(oL, 'is-checked');
					} else {
						tools.delClass(oL, 'is-checked');
					}
				}
			}
		},

		/**
		 * 设置单选按钮的选中状态
		 * bl true为选中，false为未选中
		 */
		bindGetChecked: function () {
			return this.checked;
		},
		bindSetChecked: function (bl) {
			if ( bl ) {
				this.click();
			} else {
				this.checked = false;
				tools.delClass(this.parentNode, 'is-checked');
			}
		},

		/**
		 * 设置单选按钮的可选状态
		 * bl true为可选择，false为不可选择
		 */
		bindGetDisabled: function () {
			return this.disabled;
		},
		bindSetDisabled: function (bl) {
			var oLabel = this.parentNode;
			if ( bl ) {
				this.disabled = true;
				tools.addClass(oLabel, 'is-disabled');
			} else {
				this.disabled = false;
				tools.delClass(oLabel, 'is-disabled');
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
					this.oCheckList[i].getDisabled = this.bindGetDisabled;
					this.oCheckList[i].setDisabled = this.bindSetDisabled;
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
				tools.addClass(oLabel, 'is-checked');
			} else {
				tools.delClass(oLabel, 'is-checked');
			}
		},

		/**
		 * 绑定不可选择
		 * bl true为可选
		 */
		bindGetDisabled: function () {
			return this.disabled;
		},
		bindSetDisabled: function (bl) {
			var oLabel = this.parentNode;
			if ( bl ) {
				this.disabled = true;
				tools.addClass(oLabel, 'is-disabled');
			} else {
				this.disabled = false;
				tools.delClass(oLabel, 'is-disabled');
			}
		}
	}

	// 计数器
	var SpInputnumber = {
		init: function () {
			this.oIpnumberList = document.querySelectorAll('.sp-input-number');
			
			this.initState();
		},

		initState: function () {
			for ( var i = 0 ; i < this.oIpnumberList.length; i++ ) {
				var oNumber = this.oIpnumberList[i];
				
				// 判断该节点是否已经初始化完成
				if ( !oNumber.isInited ) {
					this.initParams(oNumber);
					this.initHtml(oNumber);
				}
			}
		},

		initEvent: function (oNumber, oDecrease, oIncrease, oIpt) {
			var _this = this;

			// 计数器盒子设置disabled状态
			oNumber.getDisabled = this.bindGetDisabled;
			oNumber.setDisabled = this.bindSetDisabled;
			// 获取文本框的value值
			oNumber.getValue = this.bindGetValue;
			oNumber.setValue = this.bindSetValue;

			// 减号 点击
			oDecrease.onclick = function () {
				if ( tools.hasClass(this, 'is-disabled') ) {
					return false;
				}
				var iValue = oIpt.value - oNumber.params.step;
				if ( oNumber.params.min != 'null' && oNumber.params.min >= iValue ) {
					iValue = oNumber.params.min;
					tools.addClass(this, 'is-disabled');
				} else {
					tools.delClass(oIncrease, 'is-disabled');
				}
				oIpt.value = iValue.toFixed(oNumber.params.precision);
			}

			// 加号 点击
			oIncrease.onclick = function () {
				if ( tools.hasClass(this, 'is-disabled') ) {
					return false;
				}
				var iValue = Number(oIpt.value) + oNumber.params.step;
				if ( oNumber.params.max != 'null' && oNumber.params.max <= iValue ) {
					iValue = oNumber.params.max;
					tools.addClass(this, 'is-disabled');

				} else {
					tools.delClass(oDecrease, 'is-disabled');
				}
				oIpt.value = iValue.toFixed(oNumber.params.precision);
			}

			// 文本框失去焦点 验证数据
			oIpt.onblur = function () {
				var iValue = this.value;

				// 验证数字类型
				iValue = regs.number.test(iValue) ? Number(iValue) : oNumber.params.value;

				// 验证大小
				iValue = iValue <= oNumber.params.min ? oNumber.params.min : iValue >= oNumber.params.max ? oNumber.params.max : iValue;

				// 验证小数及赋值
				this.value = iValue.toFixed(oNumber.params.precision);
			}
		},

		/**
		 * 初始化参数
		 */
		initParams: function (oNumber) {
			oNumber.params = {};

			// 精度
			var iPrecision = oNumber.getAttribute('precision');
			iPrecision = (iPrecision >= 0 && iPrecision <= 20) ? iPrecision : 0;
			oNumber.params.precision = iPrecision;

			// 最小值
			var iMin = oNumber.getAttribute('min');
			iMin = regs.number.test(iMin) ? Number(iMin) : 'null';
			oNumber.params.min = iMin;

			// 最小值
			var iMax = oNumber.getAttribute('max');
			iMax = regs.number.test(iMax) ? Number(iMax) : 'null';
			iMax = (iMin != 'null' && iMax < iMin) ? iMin : iMax;
			oNumber.params.max = iMax;

			// 步数
			var iStep = oNumber.getAttribute('step');
			iStep = regs.number.test(iStep) ? Number(iStep) : 1;
			oNumber.params.step = iStep;

			// 默认值
			var iValue = oNumber.getAttribute('value');
			iValue = regs.number.test(iValue) ? Number(iValue) : 1;
			iValue = (iMin != 'null' && iValue <= iMin) ? iMin : (iMax != 'null' && iValue >= iMax) ? iMax : iValue;
			iValue = Number(iValue.toFixed(iPrecision));
			oNumber.params.value = iValue;

			// 使用使用控件
			var blControls = oNumber.getAttribute('controls');
			if ( blControls === false || blControls == 'false' ) {
				tools.addClass(oNumber, 'is-no-controls');

			} else {
				var sPosition = oNumber.getAttribute('controls-position');
				if ( sPosition == 'right' ) {
					tools.addClass(oNumber, 'is-controls-right');
					oNumber.params.controlsPosition = 'right';
				}
			}
		},

		/**
		 * 初始化html代码
		 */
		initHtml: function (oNumber) {
			var _this = this;
			// 设置节点已经初始化的标志，不会再重新初始化
			oNumber.isInited = true;

			// 文档碎片
			var oFragment = document.createDocumentFragment();
			// 减号
			var oDecrease = document.createElement('span');
			oDecrease.className = 'decrease' + (oNumber.params.min != 'null' && oNumber.params.min >= oNumber.params.value ? ' is-disabled' : '');
			oDecrease.innerHTML = '<i class="' + (oNumber.params.controlsPosition == 'right' ? 'sp-icon-arrow-down' : 'sp-icon-minus' ) + '"></i>';

			// 加号
			var oIncrease = document.createElement('span');
			oIncrease.className = 'increase' + (oNumber.params.max != 'null' && oNumber.params.max <= oNumber.params.value ? ' is-disabled' : '');
			oIncrease.innerHTML = '<i class="' + (oNumber.params.controlsPosition == 'right' ? 'sp-icon-arrow-up' : 'sp-icon-plus' ) + '"></i>';

			// 文本框
			var oIpt = document.createElement('input');
			oIpt.type = 'text';
			oIpt.className = 'sp-input' + (tools.hasClass(oNumber, 'mini') ? ' mini' : tools.hasClass(oNumber, 'small') ? ' small' : tools.hasClass(oNumber, 'medium') ? ' medium' : '');
			oIpt.value = oNumber.params.value;

			oFragment.appendChild(oDecrease);
			oFragment.appendChild(oIncrease);
			oFragment.appendChild(oIpt);
			oNumber.appendChild(oFragment);

			this.initEvent(oNumber, oDecrease, oIncrease, oIpt);
		},

		/**
		 * 设置获取disabled状态
		 */
		bindGetDisabled: function () {
			var oIpt = this.querySelector('.sp-input');
			return oIpt.getAttribute('disabled');
		},

		/**
		 * 设置整个sp-input-number的disabled状态处理函数
		 */
		bindSetDisabled: function (bl) {
			var oDecrease = this.querySelector('.decrease');
			var oIncrease = this.querySelector('.increase');
			var oIpt = this.querySelector('.sp-input');

			if ( bl ) {
				tools.addClass(oDecrease, 'is-disabled');
				tools.addClass(oIncrease, 'is-disabled');
				oIpt.setAttribute('disabled', true);

			} else {
				var iValue = oIpt.value;
				if ( this.params.min == 'null' || iValue > this.params.min ) {
					tools.delClass(oDecrease, 'is-disabled');
				}
				if ( this.params.max == 'null' || iValue < this.params.max ) {
					tools.delClass(oIncrease, 'is-disabled');
				}
				oIpt.removeAttribute('disabled');
			}
		},

		/**
		 * 获取sp-input-number的value的处理函数
		 */
		bindGetValue: function () {
			var oIpt = this.querySelector('.sp-input');
			return oIpt.value;
		},

		/**
		 * 设置value值
		 */
		bindSetValue: function (val) {
			var oIpt = this.querySelector('.sp-input');
			val = (this.params.min != 'null' && val <= this.params.min) ? this.params.min : (this.params.max != 'null' && val >= this.params.max) ? this.params.max : val;
			oIpt.value = val;
		}
	}

	// 滚动条
	var SpScrollbar = {
		init: function () {
			this.oScrollbar = document.querySelectorAll('.sp-scrollbar');

			this.initState();
		},

		initState: function () {
			for ( var i = 0; i < this.oScrollbar.length; i++ ) {
				var oScrollbar = this.oScrollbar[i];
				// 判断该节点是否已经初始化完成
				if ( !oScrollbar.isInited ) {

					if ( tools.getStyle(oScrollbar, 'position') == 'static' ) {
						tools.setStyle(oScrollbar, {
							position: 'relative'
						});
					}
					this.initParams(oScrollbar);
					if ( oScrollbar.params.maxh > 0 ) {
						this.initHtml(oScrollbar);
					}
				}
			}
		},

		initEvent: function (oScrollbar, oWrap, oView, oHidden, oHView) {
			oHidden.onscroll = function () {
				console.log(1);
				// 设置初始滚动为最大值
				oHidden.scrollLeft = oScrollbar.params.hvW;
				oHidden.scrollTop = oScrollbar.params.hvH;
			}
		},

		// 初始化参数
		initParams: function (oScrollbar) {
			oScrollbar.params = {};

			// 最大高度
			var iMaxH = tools.getStyle(oScrollbar, 'max-height');
			iMaxH = iMaxH ? parseInt(iMaxH) : '';
			oScrollbar.params.maxh = iMaxH;

			// 隐藏内容的宽高
			oScrollbar.params.hvW = 10000;
			oScrollbar.params.hvH = 10000;
		},

		// 初始化html代码
		initHtml: function (oScrollbar) {
			oScrollbar.isInited = true;
			var html = oScrollbar.innerHTML;

			var oWrap = oScrollbar.children[0];
			tools.addClass(oWrap, 'scrollbar_wrap');
			
			var oView = oWrap.children[0];
			tools.addClass(oView, 'scrollbar_view');
			this.setScrollSize(oScrollbar, oView);

			// 主要作用是，在oView的高度改变小于或大于maxh的时候打报告
			var oHidden = document.createElement('div');
			oHidden.className = 'scrollbar_hidden';

			var oHView = document.createElement('div');
			oHView.className = 'scrollbar_hidden_view';
			tools.setStyle(oHView, {
				width: oScrollbar.params.hvW + 'px',
				height: oScrollbar.params.hvH + 'px'
			})

			oHidden.appendChild(oHView);
			oWrap.appendChild(oHidden);
			// 设置初始滚动为最大值
			oHidden.scrollLeft = oScrollbar.params.hvW;
			oHidden.scrollTop = oScrollbar.params.hvH;

			this.initEvent(oScrollbar, oWrap, oView, oHidden, oHView);
		},

		// 根据view的高度设置scrollbar的高度
		setScrollSize: function (oScrollbar, oView) {
			var iW = parseInt(tools.getStyle(oView, 'width'));
			var iH = parseInt(tools.getStyle(oView, 'height'));

			if ( iH > oScrollbar.params.maxh ) {
				tools.setStyle(oScrollbar, {
					height: oScrollbar.params.maxh + 'px'
				})
			} else {
				tools.setStyle(oScrollbar, {
					height: 'auto'
				})
			}
		}
	}
	

	// 需要使用到的正则表达式
	var regs = {
		// 数值类型
		number:  /^(\-|\+)?\d+(\.\d+)?$/
	}

	// 简单的UI
	var SimpleUi = {
		init: function () {
			// basic
			this.layout = SpLayout;

			// form
			this.radio = SpRadio;
			this.checkbox = SpCheckbox;
			this.inputnumber = SpInputnumber;

			// others
			this.scrollbar = SpScrollbar;

			this.initState();
			this.initEvent();
		},

		initState: function () {
			this.layout.init();

			this.radio.init();
			this.checkbox.init();
			this.inputnumber.init();

			this.scrollbar.init();
		},

		initEvent: function () {
		}
	}

	window.SimpleUi = SimpleUi;
	tools.addEvent(window, 'load', function () {
		SimpleUi.init();
	})
})(window, document)


	