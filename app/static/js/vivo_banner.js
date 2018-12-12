var swiper = (function() {
	var $liAll = document.querySelectorAll('#uu li');
	console.log($liAll);
	var $imagesAll = document.querySelectorAll('.banner li');
	console.log($imagesAll);
	var timer = null;
	var index = 0;
	return {
		init: function() {
			this.event();
			this.autoPlay();
		},
		event: function() {
			var self = this;
			for(var i = 0; i < $liAll.length; i++) {
				$liAll[i].index = i;
				$liAll[i].onclick = function() {
					self.showIamge(this.index);
					self.autoPlay(this.index);
				}
			}
		},
		showIamge: function(index) {
			for(var i = 0; i < $liAll.length; i++) {
				//移除li的样式和隐藏图片
				$liAll[i].removeAttribute('class');
				move($imagesAll[i], {
					opacity: 0
				}, 500, function(ele) {
					ele.removeAttribute('class');
				});
			}
			$liAll[index].setAttribute('class', 'current');
			// 先让图片显示, 在透明度从0 变成1
			$imagesAll[index].setAttribute('class', 'active');
			move($imagesAll[index], {
				opacity: 100
			}, 1000);
		},
		autoPlay: function(index) {
			index = index || 0;
			var _this = this;
			_this.showIamge(index);
			clearInterval(timer);
			timer = setInterval(function() {
				index++;
				if(index == $liAll.length) {
					index = 0;
				}
				_this.showIamge(index);
			}, 3000);
		}
	}
}())