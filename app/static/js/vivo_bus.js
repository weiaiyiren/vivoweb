//滚动
var $shop_img = document.querySelector('.shop_img');
window.onscroll = function() {
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if(top >= 78) {
		$shop_img.style.position = 'fixed';
		$shop_img.style.top = '0';
		if(top >= 1328) {
			$shop_img.style.position = 'absolute';
			$shop_img.style.top = '1328px';
		}
	}
	if(top <= 78) {
		$shop_img.style.position = 'absolute';
		$shop_img.style.top = '78px';
	}
}
//加减
var $nexcount=document.querySelector('#nex-count');
var $jia=document.querySelector('.jia');
var $jian=document.querySelector('.jian');
var $price=document.querySelector('.nex-price');
var $join=document.querySelector('.jion_');
var price=$price.innerHTML.split("￥")[1];
console.log(price);
var count=$nexcount.value;
$price.innerHTML=`￥${price*count}`
$jia.onclick=function(){
	count++;
	$nexcount.value=count;
	$price.innerHTML=`￥${price*count}`
}
$jian.onclick=function(){
	count--;
	if (count==0) {
		count=1;
	}
	$nexcount.value=count;
	$price.innerHTML=`￥${price*count}`
}
$nexcount.oninput=function(){
	count=$nexcount.value;
	$price.innerHTML=`￥${price*count}`
}
$join.onclick=function(){
	if(localStorage.length==0){
		localStorage.setItem('count', count);
		alert('已加入购物车')
	}else if(localStorage.length==1){
		var a=Number(localStorage.count);
		var b=Number($nexcount.value);
		var c=a+b;
		localStorage.count=c;
		alert('已加入购物车')
	}
}