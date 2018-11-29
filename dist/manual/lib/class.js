
// 获取节点的class列表
function getClassList (obj) {
	var sClass = obj.className;
	var aClass = sClass.split(' ');
	var list = [];
	aClass.forEach(function (item, index) {
		if ( item ) {
			list.push(item);
		}
	})
	return list;
}

// 判断是否存在class
function hasClass (obj, name) {
	var sClass = obj.className;
	var reg = new RegExp('\\b' + name + '\\b');
	if ( reg.test(sClass) ) {
		return true;
	}
	return false;
}

// 添加样式名
function addClass (obj, name) {
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
}

// 删除样式名
function delClass (obj, name) {
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
}
