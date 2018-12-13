var $phone = document.querySelector('.phone');
var tel = localStorage.getItem('tel');
var $form = document.querySelector('form');
var $eye=document.querySelector('.zhuce-box i img');
$phone.innerHTML = tel;
localStorage.removeItem('tel');
var $code = document.querySelector('#code');
var $password = document.querySelector('#password');
var $btn = document.querySelector('.btn');
var $yanzhen = document.querySelector('#yanzhen');
var flag = false;

function checkCode(str) {
	var reg = /^\d{4}$/;
	return reg.test(str) ? 1 : 0;
}

function checkPass(str) {
	var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	return reg.test(str) ? 1 : 0;
}

$eye.onclick=function(){
	if ($password.type=="password") {
		$password.type="text";
		this.src="static/images/denglu-imgs/eyes-on.c96cc6e.png";
	} else{
		$password.type="password";
		this.src="static/images/denglu-imgs/eyes-off.7c50935.png";
	}
}

$code.onblur = function() {
	var bool = checkCode($code.value);
	if($code.value == "") {
		console.log($code.value)
		$yanzhen.className = 'erro';
		$yanzhen.innerHTML = '请输入验证码';
	} else {
		if(bool) {
			flag = true;
			$yanzhen.className = 'success';
			$yanzhen.innerHTML = '';
		} else {
			$yanzhen.className = 'erro';
			$yanzhen.innerHTML = '验证码错误';
		}
	}
}
$password.onblur = function() {
	var val = $password.value;
	if(flag) {
		var _bool = checkPass(val);
		if(val == "") {
			$yanzhen.className = 'erro';
			$yanzhen.innerHTML = '请输入密码';
		} else {
			if(_bool) {
				$yanzhen.className = 'success';
				$yanzhen.innerHTML = '';
			} else {
				$yanzhen.className = 'erro';
				$yanzhen.innerHTML = '密码格式错误';
			}
		}
	}
}
$code.oninput = function() {
	$yanzhen.className = 'success';
	$yanzhen.innerHTML = '';
}
$password.oninput = function() {
	$yanzhen.className = 'success';
	$yanzhen.innerHTML = '';
}

$btn.onclick = function() {
	if($yanzhen.className != 'success') {
		$password.focus();
		return false;
	} else {
		// 发送ajax
		sendAjax('http://10.36.141.213:88/git/vivoweb/server/php/zhuce.php', {
			data: {
				user: tel,
				password: $form.password.value
			},
			success(res) {
				console.log(res)
                        if (res=='1') {
                        	alert('注册成功');
                        	location.href = "vivo.html";
                        } else{
                        	alert("网络连接不稳定");
                        }
			}
		});
	}
}