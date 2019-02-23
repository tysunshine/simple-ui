(function (window, document) {

	/**
	 * 延迟执行函数
	 * 可以用来链式执行动画
	 * 参数
	 * time -> 可选 默认的延迟时间，默认设置为30毫秒，因为页面重绘需要一点时间
	 * fn -> 可选 第一个处理函数，这个函数延迟时间是0
	 */
	function Delay () {
		var arg1 = arguments[0];
		var arg2 = arguments[1];
		var ty1 = typeof arg1;
		var ty2 = typeof arg2;
		var fn = ty2 === 'function' ? arg2 : ty1 === 'function' ? arg1 : null;

		this._time = ty1 === 'number' && arg1 >= 0 ? arg1 : 30;
		this._do = [];

		if ( fn ) {
			this.then(0, fn);
		}
	}

	Delay.prototype._resolve = function () {
		if ( this._do.length > 0 ) {
			this._do[0]();
			this._do.shift();
		}
	}

	/**
	 * 向延迟函数列表中加入函数
	 * 参数1，可选，这一次函数多久后执行
	 * 参数2，必须，这一次的函数名
	 */
	Delay.prototype.then = function () {
		var _this = this;
		var arg1 = arguments[0];
		var arg2 = arguments[1];
		var ty1 = typeof arg1;
		var ty2 = typeof arg2;
		var time = ty1 === 'number' && arg1 >= 0 ? arg1 : this._time;
		var fn = ty2 === 'function' ? arg2 : ty1 === 'function' ? arg1 : null;

		if ( !fn ) {
			return false;
		}

		function doFn () {
			setTimeout(function () {
				fn();
				_this._resolve();
			}, time);
		}
		
		this._do.push(doFn);
		return this;
	}

	/**
	 * 开始执行事件列表中的事件
	 */
	Delay.prototype.do = function () {
		if ( this._do.length > 0 ) {
			this._resolve();
		}
	}

	window.Delay = Delay;
})(window, document);