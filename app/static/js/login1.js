function checkInput(str) {
	var reg = /^1[35789]\d{9}$/;
	return reg.test(str) ? 1 : 0;
}
var $btn = document.querySelector('.btn');
var $tel = document.querySelector('.tel');
var $tel_info = document.querySelector('#telinfo');

$tel.onblur = function() {
	var val = $tel.value;
	var bool = checkInput(val);
	if(val == "") {
		$tel_info.className = 'erro';
		$tel_info.innerHTML = '请输入手机号';
	} else {
		if(bool) {
			$tel_info.className = 'success';
			$tel_info.innerHTML = '';
		} else {
			$tel_info.className = 'erro';
			$tel_info.innerHTML = '请输入有效的手机号';
		}
	}
}
$tel.oninput = function() {
	$tel_info.className = 'success';
	$tel_info.innerHTML = '';
}

$btn.onclick = function() {
	if($tel_info.className != 'success') {
		$tel.focus();
		return false;
	} else {
		//发送ajax验证
		sendAjax('http://10.36.141.213:88/git/vivoweb/server/php/check_tel.php', {
			data: {
				user: $tel.value
			},
			success(res) {
				res = JSON.parse(res);
				if(res.code == 0) {
					// 用户名不存在
					var val = $tel.value;
					localStorage.setItem('tel', val);
					location.href = "zhuce2.html";
				} else if(res.code == 10000){
					// 用户名已经存在
					$tel_info.className = 'erro';
					$tel_info.innerHTML = '用户已存在'
				}
			}
		});
	}
}