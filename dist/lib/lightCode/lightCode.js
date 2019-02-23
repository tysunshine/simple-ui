(function (win, doc) {

var lightCode = {
	init: function () {
		this.oPre = doc.getElementsByTagName('pre');

		this.initState();
	},

	initState: function () {
		for ( var i = 0; i < this.oPre.length; i++ ) {
			var oCode = this.oPre[i].children[0];
			var innerHtml = oCode.innerHTML;
			oCode.innerHTML = this.replaceHtml(innerHtml);
		}
	},

	// 替换
	replaceHtml: function (html) {
		var nameReg = /&lt;([a-zA-Z-_]+)\b/g;			// 元素名正则
		var attrnameReg = /\b([0-9a-zA-Z-_]+)=/g;		// 属性名正则
		var attrvalueReg = /(".+")/g;					// 属性值正则
		var textReg = /&gt;(.+)&lt;/g;					// 文本正则
		var endReg = /&lt;\/([a-zA-Z-_]+)&gt;/g;		// 元素结尾正则


		// 使用小于号(&lt;)分割
		var arr = html.split('&lt;');
		arr = arr.map(function (item, index) {
			return index == 0 ? item : '&lt;' + item;
		})

		// 按=将属性与属性值切出来
		var brr = [];
		for ( var i = 0; i < arr.length; i++ ) {
			var res = arr[i].split(/(\b[a-zA-Z]+[a-zA-Z0-9-_]*="[a-zA-Z0-9-_\s]+")/);
			brr = brr.concat(res);
		}

		// 使用=分割
		var crr = [];
		for ( var i = 0; i < brr.length; i++ ) {
			var res = brr[i];
			if ( /="/.test(brr[i]) ) {
				res = brr[i].split('=');

				for ( var j = 0; j < res.length; j++ ) {
					if ( j < res.length-1 ) {
						res[j]+='=';
					}
				}
			}
			crr = crr.concat(res);
		}

		// 替换
		var drr = [];
		for ( var i = 0; i < crr.length; i++ ) {
			if ( nameReg.test(crr[i]) ) {
				drr.push(crr[i].replace(nameReg, '&lt;<span class="lc-name">$1</span>'));
			} else if ( attrnameReg.test(crr[i]) ) {
				drr.push(crr[i].replace(attrnameReg, '<span class="lc-attrname">$1</span>='));
			} else if ( attrvalueReg.test(crr[i]) ) {
				drr.push(crr[i].replace(attrvalueReg, '<span class="lc-attrvalue">$1</span>'));
			} else if (endReg.test(crr[i]) ) {
				drr.push(crr[i].replace(endReg, '&lt;/<span class="lc-name">$1</span>&gt;'));
			} else {
				drr.push(crr[i]);
			}
		}

		var res = drr.join('');
		res = res.replace(textReg, '&gt;<span class="lc-text">$1</span>&lt;');
		return res;
	}
}

win.lightCode = lightCode;
})(window, document)