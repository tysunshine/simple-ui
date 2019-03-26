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

			// other

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



	/**
	 * *************************************
	 * 滚动条构造函数
	 * *************************************
	 */
	function SpScrollBar (o) {
		this._init(o);
	}

	SpScrollBar.prototype = {
		// 初始化
		_init: function (o) {
			if ( typeof o != 'object' || (typeof o.el != 'string' && !(o.el instanceof HTMLElement)) ) {
				return false;
			}

			if (o.el instanceof HTMLElement) {
				this.oWrapper = o.el;
			} else {
				this.oWrapper = document.querySelector(o.el);
			}
			if ( !this.oWrapper ) {
				return false;
			}

			this.oScroll = this.oWrapper.children[0];
			if ( !this.oScroll ) {
				return false;
			}

			this._initParam(o);
			this._initStructure();

			this._initState(o);
			this._initEvent();
		},

		// 初始化状态
		_initState: function (o) {
			var pos = tools.getStyle(this.oWrapper, 'position');

			if (pos == 'static') {
				tools.setStyle(this.oWrapper, {
					position: 'relative'
				})
			}
			tools.setStyle(this.oScroll, {
				position: 'relative',
				transition: 'transform ' + this.iTime + 'ms linear'
			})

			if (this.XExist) {
				tools.setStyle(this.oXAxis, {
					position: 'absolute',
					opacity: this.enterShow ? 0 : 1,
					transition: 'opacity 200ms',
					top: this.XAxis.top,
					bottom: this.XAxis.bottom,
					left: this.XAxis.left,
					right: this.XAxis.right,
					height: this.XAxis.height,
					borderRadius: this.XAxis.borderRadius,
					backgroundColor: this.XAxis.bgColor
				})

				tools.setStyle(this.oXBar, {
					position: 'absolute',
					cursor: 'pointer',
					height: '100%',
					transition: 'left ' + this.iTime + 'ms linear',
					borderRadius: this.XBar.borderRadius,
					backgroundColor: this.XBar.bgColor
				})
			}

			if (this.YExist) {
				tools.setStyle(this.oYAxis, {
					position: 'absolute',
					opacity: this.enterShow ? 0 : 1,
					transition: 'opacity 200ms',
					top: this.YAxis.top,
					bottom: this.YAxis.bottom,
					left: this.YAxis.left,
					right: this.YAxis.right,
					width: this.YAxis.width,
					borderRadius: this.YAxis.borderRadius,
					backgroundColor: this.YAxis.bgColor
				})

				tools.setStyle(this.oYBar, {
					position: 'absolute',
					cursor: 'pointer',
					width: '100%',
					transition: 'top ' + this.iTime + 'ms linear',
					borderRadius: this.YBar.borderRadius,
					backgroundColor: this.YBar.bgColor
				})
			}

			this._setBarSize();
			this._setInitScroll();
		},

		// 初始化事件
		_initEvent: function () {
			var _this = this;

			tools.onelresize(this.oWrapper, function () {
				_this._setAxisShow(true);
			});

			// 滚动层高度改变时，更新尺寸，更新滚动距离
			tools.onelresize(this.oScroll, function () {
				_this._setBarSize();
				if (_this.XExist) {
					var iLeft = _this.iScrollLeft;
					_this.scrollLeft(iLeft);
				} else if (_this.YExist) {
					var iTop = _this.iScrollTop;
					_this.scrollTop(iTop);
				}
			})

			// 滚动*******************************************
			var sUserAgent = window.navigator.userAgent.toLowerCase();
			if ( sUserAgent.indexOf('firefox') != -1 ) {
				// 火狐浏览器滚轴滚动
				this.oWrapper.addEventListener('DOMMouseScroll', function (e) {
					e.preventDefault();

					var iMove = e.detail > 0 ? 60 : -60;
					if (_this.YExist) {
						iMove += _this.iScrollTop;
						_this.scrollTop(iMove);

					} else if (_this.XExist) {
						iMove += _this.iScrollLeft;
						_this.scrollLeft(iMove);
					}
				})

			} else {
				// 谷歌、ie滚轴滚动
				this.oWrapper.onmousewheel = function (evt) {
					var e = evt || window.event;
					evt ? e.preventDefault() : e.returnValue = false;

					var iMove = e.wheelDelta < 0 ? 60 : -60;
					if (_this.YExist) {
						iMove += _this.iScrollTop;
						_this.scrollTop(iMove);

					} else if (_this.XExist) {
						iMove += _this.iScrollLeft;
						_this.scrollLeft(iMove);
					}
				}
			}

			// 拖动*******************************************
			var bYDown = false, bXDown = false;
			var iStartY = 0, iStartX = 0;
			var iStartTop = 0, iStartLeft = 0;
			if (this.XExist) {
				this.oXBar.onmousedown = function (evt) {
					var e = evt || window.event;
					evt ? e.preventDefault() : e.returnValue = false;

					bXDown = true;
					iStartX = e.clientX;
					_this._setTransX(0);
					_this._setTransS(0);
					iStartLeft = parseInt(tools.getStyle(this, 'left'));
					iStartLeft = iStartLeft > 0 ? iStartLeft : 0;
				}
			}
			if (this.YExist) {
				this.oYBar.onmousedown = function (evt) {
					var e = evt || window.event;
					evt ? e.preventDefault() : e.returnValue = false;

					bYDown = true;
					iStartY = e.clientY;
					_this._setTransY(0);
					_this._setTransS(0);
					iStartTop = parseInt(tools.getStyle(this, 'top'));
					iStartTop = iStartTop > 0 ? iStartTop : 0;
				}
			}
			document.addEventListener('mousemove', function (evt) {
				var e = evt || window.event;
				if (bYDown) {
					evt ? e.preventDefault() : e.returnValue = false;
					var iMove = e.clientY - iStartY;
					var iTop = 0;
					iMove += iStartTop;
					iTop = _this._calcScrollTop(iMove);
					_this._setYBarTop(iMove);
					_this._scrollTop(iTop);

				} else if (bXDown) {
					evt ? e.preventDefault() : e.returnValue = false;
					var iMove = e.clientX - iStartX;
					var iLeft = 0;
					iMove += iStartLeft;
					iLeft = _this._calcScrollLeft(iMove);
					_this._setXBarLeft(iMove);
					_this._scrollLeft(iLeft);
				}
			})
			document.addEventListener('mouseup', function () {
				if (bYDown) {
					bYDown = false;
					_this._setTransY(_this.iTime);
					_this._setTransS(_this.iTime);
					if (!bEnter) {
						_this._setAxisShow(false);
					}
				}
				if (bXDown) {
					bXDown =false;
					_this._setTransX(_this.iTime);
					_this._setTransS(_this.iTime);
					if (!bEnter) {
						_this._setAxisShow(false);
					}
				}
			})

			// 进出*******************************************
			var bEnter = false;
			this.oWrapper.onmouseenter = function () {
				bEnter = true;
				_this._setAxisShow(true);

			}
			this.oWrapper.onmouseleave = function () {
				bEnter = false;
				if (!bXDown && !bYDown) {
					_this._setAxisShow(false);
				}
			}
		},

		// 初始参数
		_initParam: function (o) {
			var overflowX = tools.getStyle(this.oWrapper, 'overflow-x');
			this.iMaxW = parseInt(tools.getStyle(this.oWrapper, 'maxWidth'));
			if (overflowX == 'hidden' && this.iMaxW > 0) {
				this.XExist = true;
				this.XAxis = o.XAxis || {};
				this.XAxis.top = this.XAxis.top ? parseInt(this.XAxis.top) + 'px' : 'auto';
				this.XAxis.bottom = this.XAxis.bottom ? parseInt(this.XAxis.bottom) + 'px' : 0;
				this.XAxis.left = this.XAxis.left ? parseInt(this.XAxis.left) + 'px' : 0;
				this.XAxis.right = this.XAxis.right ? parseInt(this.XAxis.right) + 'px' : 0;
				this.XAxis.height = this.XAxis.height ? parseInt(this.XAxis.height) + 'px' : '10px';
				this.XAxis.borderRadius = this.XAxis.borderRadius ? parseInt(this.XAxis.borderRadius) + 'px' : 0;
				this.XAxis.bgColor = this.XAxis.bgColor || 'rgba(255, 255, 255, 0)';
				this.XAxis.enterShow = this.XAxis.enterShow || true;

				this.XBar = o.XBar || {};
				this.XBar.borderRadius = this.XBar.borderRadius ? parseInt(this.XBar.borderRadius) + 'px' : 0;
				this.XBar.bgColor = this.XBar.bgColor || 'rgba(144,147,153,.3)';
				this.XBar.enterColor = this.XBar.enterColor || 'rgba(144,147,153,.3)';
			}

			var overflowY = tools.getStyle(this.oWrapper, 'overflow-y');
			this.iMaxH = parseInt(tools.getStyle(this.oWrapper, 'maxHeight'));
			if (overflowY && this.iMaxH > 0) {
				this.YExist = true;
				this.YAxis = o.YAxis || {};
				this.YAxis.top = this.YAxis.top ? parseInt(this.YAxis.top) + 'px' : 0;
				this.YAxis.bottom = this.YAxis.bottom ? parseInt(this.YAxis.bottom) + 'px' : 0;
				this.YAxis.left = this.YAxis.left ? parseInt(this.YAxis.left) + 'px' : 'auto';
				this.YAxis.right = this.YAxis.right ? parseInt(this.YAxis.right) + 'px' : 0;
				this.YAxis.width = this.YAxis.width ? parseInt(this.YAxis.width) + 'px' : '10px';
				this.YAxis.borderRadius = this.YAxis.borderRadius ? parseInt(this.YAxis.borderRadius) + 'px' : 0;
				this.YAxis.bgColor = this.YAxis.bgColor || 'rgba(255, 255, 255, 0)';
				this.YAxis.enterShow = this.YAxis.enterShow || true;

				this.YBar = o.YBar || {};
				this.YBar.borderRadius = this.YBar.borderRadius ? parseInt(this.YBar.borderRadius) + 'px' : 0;
				this.YBar.bgColor = this.YBar.bgColor || 'rgba(144,147,153,.3)';
				this.YBar.enterColor = this.YBar.enterColor || 'rgba(144,147,153,.3)';
			}

			this.iTime = parseInt(o.time) > 0 ? parseInt(o.time) : 100;		// 过渡时间
			this.iScrollTop = o.scrollTop || 0;								// Y滚动距离
			this.iScrollLeft = o.scrollLeft || 0;							// X滚动距离
			this.enterShow = o.enterShow === false ? false : true;			// 是否进入才显示滚动条
		},

		// 初始化结构
		_initStructure: function () {
			if (this.XExist) {
				this.oXAxis = document.createElement('div');
				this.oXBar = document.createElement('div');
				this.oXAxis.appendChild(this.oXBar);
				this.oWrapper.appendChild(this.oXAxis);
			}

			if (this.YExist) {
				this.oYAxis = document.createElement('div');
				this.oYBar = document.createElement('div');
				this.oYAxis.appendChild(this.oYBar);
				this.oWrapper.appendChild(this.oYAxis);
			}
		},

		// 获取包裹层、滚动层各种尺寸
		_getSize: function () {
			this.iWW = this.oWrapper.clientWidth;
			this.iWH = this.oWrapper.clientHeight;

			this.iSW = this.oScroll.clientWidth;
			this.iSH = this.oScroll.clientHeight;

			if (this.XExist) {
				this.iSXMin = 0;
				this.iSXMax = this.iSW > this.iWW ? this.iSW - this.iWW : 0;

				this.iXAW = this.oXAxis.clientWidth;
				this.iXBW = this.iWW / this.iSW * this.iXAW;

				this.iXMin = 0;
				this.iXMax = this.iXAW - this.iXBW;
			}
			if (this.YExist) {
				this.iSYMin = 0;
				this.iSYMax = this.iSH > this.iWH ? this.iSH - this.iWH : 0;

				this.iYAH = this.oYAxis.clientHeight;
				this.iYBH = this.iWH / this.iSH * this.iYAH;
				
				this.iYMin = 0;
				this.iYMax = this.iYAH - this.iYBH;
			}
		},

		// 设置初始滚动尺寸
		_setInitScroll: function () {
			if (this.iScrollTop != 0 || this.iScrollLeft != 0) {
				var _this = this;
				this._setTransS(0);
				this.scrollTop(this.iScrollTop);
				this._scrollLeft(this.iScrollLeft);
				setTimeout(function () {
					_this._setTransS(_this.iTime);
				}, 50);
			}
		},

		// 设置滚动条尺寸
		_setBarSize: function () {
			this._getSize();
			if (this.XExist) {
				tools.setStyle(this.oXBar, {
					width: this.iXBW + 'px'
				})
			}

			if (this.YExist) {
				tools.setStyle(this.oYBar, {
					height: this.iYBH +'px'
				})
			}
		},

		// X轴滚动时间
		_setTransX: function (time) {
			tools.setStyle(this.oXBar, {
				transition: "left " + (time <= 0 ? 0 : time) + "ms linear"
			})
		},

		// Y轴滚动时间
		_setTransY: function (time) {
			tools.setStyle(this.oYBar, {
				transition: "top " + (time <= 0 ? 0 : time) + "ms linear"
			})
		},

		// 内容滚动时间
		_setTransS: function (time) {
			tools.setStyle(this.oScroll, {
				transition: 'transform ' + (time <= 0 ? 0 : time) + 'ms linear'
			})
		},

		// 设置滚动轴显隐
		_setAxisShow: function (bl) {
			if (this.XExist) {
				var bMaxW = this.oXAxis.clientWidth == this.oXBar.clientWidth ? true : false;
				tools.setStyle(this.oXAxis, {
					opacity: bMaxW ? 0 : !this.enterShow ? 1 : bl ? 1 : 0
				})
			}
			if (this.YExist) {
				var bMaxH = this.oYAxis.clientHeight == this.oYBar.clientHeight ? true : false;
				tools.setStyle(this.oYAxis, {
					opacity: bMaxH ? 0 : !this.enterShow ? 1 : bl ? 1 : 0
				})
			}
		},

		// 设置X滚动条滚动距离
		_setXBarLeft: function (num) {
			var result = this._limitXRange(num);
			tools.setStyle(this.oXBar, {
				left: result + 'px'
			})
		},

		// 设置Y滚动条滚动距离
		_setYBarTop: function (num) {
			var result = this._limitYRange(num);
			tools.setStyle(this.oYBar, {
				top: (num <= this.iYMin ? this.iYMin : num >= this.iYMax ? this.iYMax : num) + 'px'
			})
		},

		// 获取（不传参）/设置顶部滚动距离
		_scrollTop: function (num) {
			if (!tools.isNull(num)) {
				var result = this._limitSRange(num, this.iScrollLeft);
				this.iScrollTop = result.top;
				this.iScrollLeft = result.left;
				tools.setStyle(this.oScroll, {
					transform: "translate(" + (-1 * this.iScrollLeft) + "px, " + (-1 * this.iScrollTop) + "px)"
				})
			}
		},

		// 获取（不传参）/设置左边滚动距离
		_scrollLeft: function (num) {
			if (!tools.isNull(num)) {
				var result = this._limitSRange(this.iScrollTop, num);
				this.iScrollTop = result.top;
				this.iScrollLeft = result.left;
				tools.setStyle(this.oScroll, {
					transform: "translate(" + (-1 * this.iScrollLeft) + "px, " + (-1 * this.iScrollTop) + "px)"
				})
			}
		},

		// 滚动到固定位置
		scrollTop: function (num) {
			if (!tools.isNull(num)) {
				var iYTop = this._calcYTop(num);
				this._scrollTop(num);
				this._setYBarTop(iYTop);
			} else {
				return this.iScrollTop;
			}
		},

		// 滚动到固定位置
		scrollLeft: function (num) {
			if (!tools.isNull(num)) {
				var iXLeft = this._calcXLeft(num);
				this._scrollLeft(num);
				this._setXBarLeft(iXLeft);
			} else {
				return this.iScrollLeft;
			}
		},

		// 限制X滚动条滚动高度
		_limitXRange: function (num) {
			return num <= this.iXMin ? this.iXMin : num >= this.iXMax ? this.iXMax : num;
		},

		// 限制Y滚动条滚动高度
		_limitYRange: function (num) {
			return num <= this.iYMin ? this.iYMin : num >= this.iYMax ? this.iYMax : num;
		},

		// 限制滚动层滚动高度
		_limitSRange: function (top, left) {
			return {
				top: top <= this.iSYMin ? this.iSYMin : top >= this.iSYMax ? this.iSYMax : top,
				left: left <= this.iSXMin ? this.iSXMin : left >= this.iSXMax ? this.iSXMax : left
			}
		},

		// 滚动内容，计算X轴滚动距离
		_calcXLeft: function (num) {
			return num / this.iSW * this.iXAW;
		},

		// 滚动内容，计算Y轴滚动距离
		_calcYTop: function (num) {
			return num / this.iSH * this.iYAH;
		},

		// 拖动X轴，计算内容滚动距离
		_calcScrollLeft: function (num) {
			return num / this.iXAW * this.iSW;
		},

		// 拖动Y轴，计算内容滚动距离
		_calcScrollTop: function (num) {
			return num / this.iYAH * this.iSH;
		}
	}




	window.SimpleUi = SimpleUi;
	window.SpScrollBar = SpScrollBar;
	tools.addEvent(window, 'load', function () {
		SimpleUi.init();
	})

})(window, document)
	