(function (window, document) {
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

			onelresize(this.oWrapper, function () {
				_this._setAxisShow(true);
			});

			// 滚动层高度改变时，更新尺寸，更新滚动距离
			onelresize(this.oScroll, function () {
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

	window.SpScrollBar = SpScrollBar;
})(window, document);