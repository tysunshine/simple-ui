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
		bindChecked: function (bl) {
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
		bindDisabled: function (bl) {
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
				tools.addClass(oLabel, 'is-checked');
			} else {
				tools.delClass(oLabel, 'is-checked');
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
			this.oIpnumberList = document.querySelectorAll('.sp-inputnumber');

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

		initEvent: function (oNumber) {
			var _this = this;
			var oDecrease = oNumber.querySelector('.decrease');
			var oIncrease = oNumber.querySelector('.increase');
			var oIpt = oNumber.querySelector('.sp-input');

			// 计数器盒子设置disabled状态
			oNumber.setDisabled = this.bindDisabled;
			// 获取文本框的value值
			oNumber.getValue = this.bindGetValue;

			// 减号移上移出时变色
			oDecrease.onmouseenter = function () {
				if ( oNumber.isDisabled ) {
					return false;
				}
				tools.addClass(oNumber, 'is-hover');
			}
			oDecrease.onmouseleave = function () {
				tools.delClass(oNumber, 'is-hover');
			}

			// 加号移上移出时变色
			oIncrease.onmouseenter = function () {
				if ( oNumber.isDisabled ) {
					return false;
				}
				tools.addClass(oNumber, 'is-hover');
			}
			oIncrease.onmouseleave = function () {
				tools.delClass(oNumber, 'is-hover');
			}

			// 减号 点击
			oDecrease.onclick = function () {
				if ( tools.hasClass(this, 'is-disabled') ) {
					return false;
				}
				var iValue = oIpt.value;
				if ( oNumber.params.min != 'null' && oNumber.params.min >= iValue - oNumber.params.step ) {
					iValue = oNumber.params.min;
					tools.addClass(this, 'is-disabled');
				} else {
					iValue--;
					tools.delClass(oIncrease, 'is-disabled');
				}
				oIpt.value = iValue.toFixed(oNumber.params.precision);
			}

			// 加号 点击
			oIncrease.onclick = function () {
				if ( tools.hasClass(this, 'is-disabled') ) {
					return false;
				}
				var iValue = oIpt.value;
				if ( oNumber.params.max != 'null' && oNumber.params.max <= iValue - oNumber.params.step ) {
					iValue = oNumber.params.max;
					tools.addClass(this, 'is-disabled');
				} else {
					iValue++;
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
			iStep = regs.number.test(iMax) ? Number(iStep) : 1;
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

			// 尺寸
			var size = tools.hasClass(oNumber, 'mini') ? ' mini' : tools.hasClass(oNumber, 'small') ? ' small' : tools.hasClass(oNumber, 'medium') ? ' medium' : '';

			var html = '';
			// 减号
			html += '<span class="decrease' + (oNumber.params.min != 'null' && oNumber.params.min >= oNumber.params.value ? ' is-disabled' : '') + '"><i class="sp-icon-minus"></i></span>';
			// 加号
			html += '<span class="increase' + (oNumber.params.max != 'null' && oNumber.params.max <= oNumber.params.value ? ' is-disabled' : '') + '"><i class="sp-icon-plus"></i></span>';
			// 文本框
			html += '<input class="sp-input' + size + '" type="text"';
			html += ' value="' + oNumber.params.value + '"';
			html += '>';

			oNumber.innerHTML = html;

			this.initEvent(oNumber);
		},

		/**
		 * 设置整个sp-inputnumber的disabled状态处理函数
		 */
		bindDisabled: function (bl) {
			var oDecrease = this.querySelector('.decrease');
			var oIncrease = this.querySelector('.increase');
			var oIpt = this.querySelector('.sp-input');

			if ( bl ) {
				this.isDisabled = true;
				tools.addClass(oDecrease, 'is-disabled');
				tools.addClass(oIncrease, 'is-disabled');
				oIpt.setAttribute('disabled', true);

			} else {
				this.isDisabled = false;
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
		 * 获取sp-inputnumber的value的处理函数
		 */
		bindGetValue: function () {
			var oIpt = this.querySelector('.sp-input');
			return oIpt.value;
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
			this.layout = SpLayout;
			this.radio = SpRadio;
			this.checkbox = SpCheckbox;
			this.inputnumber = SpInputnumber;

			this.initState();
			this.initEvent();
		},

		initState: function () {
			this.layout.init();
			this.radio.init();
			this.checkbox.init();
			this.inputnumber.init();
		},

		initEvent: function () {
		}
	}

	window.SimpleUi = SimpleUi;
	tools.addEvent(window, 'load', function () {
		SimpleUi.init();
	})
})(window, document)


	