/*
    宽高/位置/透明度等样式动画
    多物体运动
    链式运动
    多属性运动
    同步运动
*/

function move($ele, targetObj, time, callback) {

	if(typeof $ele == 'string') {
		$ele = document.querySelector($ele);
	}

	clearInterval($ele.timer);

	var objSpeed = {};
	for(var attr in targetObj) {
		var init = parseFloat(getStyle($ele, attr));
		if(attr == 'opacity') {
			init *= 100;
		}
		objSpeed[attr] = (targetObj[attr] - init) / (time / 10);
	}

	$ele.timer = setInterval(function() {
		var flag = true;

		for(var attr in targetObj) {
			var speed = objSpeed[attr];
			var init = parseFloat(getStyle($ele, attr));
			if(attr == 'opacity') {
				init *= 100;
			}

			init += speed;

			if((speed >= 0 && init >= targetObj[attr]) || (speed <= 0 && init <= targetObj[attr])) {
				init = targetObj[attr];
			} else {
				flag = false;
			}
			if(attr == 'opacity') {
				$ele.style[attr] = init / 100;
			} else {
				$ele.style[attr] = init + 'px';
			}
		}

		if(flag) {
			clearInterval($ele.timer);
			if(typeof callback == 'function') {
				callback($ele);
			}
		}
	}, 10)

}

function getStyle($ele, attr) {
	if(window.getComputedStyle) {
		return window.getComputedStyle($ele, null)[attr];
	}
	return $ele.currentStyle[attr];
}