var $phone = document.querySelector('.tel');
var $password = document.querySelector('#password');
var $btn_dl=document.querySelector('.btn1');
var $btn_zc=document.querySelector('.btn2');
var $yanzhen=document.querySelector('#yanzhen');
var $eye=document.querySelector('.denglu-box i img');
var flag=false;
function checkPh(str) {
	var reg = /^1[35789]\d{9}$/;
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

$phone.onblur = function() {
	var val = $phone.value;
	var bool = checkPh(val);
	if(val == "") {
		$yanzhen.className = 'erro';
		$yanzhen.innerHTML = '请输入手机号';
	} else {
		if(bool) {
			flag=true;
			$yanzhen.className = 'success';
			$yanzhen.innerHTML = '';
		} else {
			$yanzhen.className = 'erro';
			$yanzhen.innerHTML = '请输入有效的手机号';
		}
	}
}
$password.onblur = function() {
	var val = $password.value;
	if(flag) {
		if(val == "") {
			$yanzhen.className = 'erro';
			$yanzhen.innerHTML = '请输入密码';
		} 
	}
}
$phone.oninput = function() {
	$yanzhen.className = 'success';
	$yanzhen.innerHTML = '';
}
$password.oninput = function() {
	$yanzhen.className = 'success';
	$yanzhen.innerHTML = '';
}
$btn_dl.onclick = function() {
	if($phone.value==""){
		$phone.focus();
		return false;
	}
	if($yanzhen.className != 'success') {
		$password.focus();
		return false;
	} else {
		//发送ajax
			sendAjax(apiObj.login, {
			data: {
				user: $phone.value,
				pass: $password.value
			},
			success(res) {
				res = JSON.parse(res);
				if(res.code == 0) {// 用户名不存在	
					$yanzhen.className = 'erro';
					$yanzhen.innerHTML = '账号或密码错误'
				} else if(res.code == 10000){// 用户名已经存在
					alert('登录成功');
					location.href = "vivo.html";
				}
			}
		});
	}
}
$btn_zc.onclick=function(){
	location.href = "zhuce.html";
}
