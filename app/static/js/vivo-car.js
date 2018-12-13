
var $box = document.querySelector('#box');
//判断count是否存在
	
if(localStorage.length == 1) {
	$box.innerHTML = `<ul class="shop-head">
							<li><input type="checkbox" name="choose" id="check" value="" checked="checked" />全选</li>
							<li>商品名称</li>
							<li>价格（元）</li>
							<li>数量</li>
							<li>优惠</li>
							<li>赠送积分</li>
							<li>小计（元）</li>
							<li>操作</li>
						</ul>
						<ul class="shop-info">
							<li><input type="checkbox" name="checkbox" id="choose" value="" checked="checked" /></li>
							<li><img class="car-shop" src="static/images/car-shop_03.jpg" />
								<p>NEX旗舰版8GB+126GB星钻黑</p>
							</li>
							<li class="ph-price">4298.00</li>
							<li><button class="jian">-</button>
								<input type="text" name="" class="count" value="22" />
								<button class="jia">+</button>
							</li>
							<li>0.00</li>
							<li class="mark">4298</li>
							<li><span class="price">4298.00</span></li>
							<li>加入到收藏夹</li>
							<img class="car-zs" src="static/images/car-zs_03.jpg" />
						</ul>
						<div class="js">
							<input type="checkbox" name="checkbox" id="" value="" checked="checked" class="quanxuan" />
							<p class="p1">全选</p>
							<p class="p2">删除选中的商品</p>
							<p class="p3">移入收藏夹</p>
							<p class="p4">已选商品<span class="nexphone">1</span>件，合计（不含运费）：<span class="count-price">￥4298.00</span></p>
							<a href="https://shop.vivo.com.cn/order/quick/confirm?skuId=5088&num=1&openid=f4166f6a1b8eed3f"><i>去结算</i></a>
						</div>`
	var $phprice = document.querySelector('.ph-price');
	var $count = document.querySelector('.count');
	var $mark = document.querySelector('.mark');
	var $price = document.querySelector('.price');
	var $nexphone = document.querySelector('.nexphone');
	var $countprice = document.querySelector('.count-price');
	var $del=document.querySelector('.p2')
	console.log($box)
	var count = localStorage.getItem('count');
	$count.value = count;
	var phprice = Number($phprice.innerHTML);
	$mark.innerHTML = `${phprice*$count.value}`;
	$price.innerHTML = `${phprice*$count.value}.00`;
	$nexphone.innerHTML = `${$count.value}`
	$countprice.innerHTML = `￥${phprice*$count.value}.00`;

	//加减

	var $jia = document.querySelector('.jia');
	var $jian = document.querySelector('.jian');

	$jia.onclick = function() {
		$count.value++;
		$mark.innerHTML = `${phprice*$count.value}`;
		$price.innerHTML = `${phprice*$count.value}.00`;
		$nexphone.innerHTML = `${$count.value}`;
		$countprice.innerHTML = `￥${phprice*$count.value}.00`;
		localStorage.count = $count.value;
	}
	$jian.onclick = function() {
		$count.value--;
		if($count.value == 0) {
			$count.value = 1;
		}
		$mark.innerHTML = `${phprice*$count.value}`;
		$price.innerHTML = `${phprice*$count.value}.00`;
		$nexphone.innerHTML = `${$count.value}`;
		$countprice.innerHTML = `￥${phprice*$count.value}.00`;
		localStorage.count = $count.value;
	}
	$count.oninput=function(){
		$mark.innerHTML = `${phprice*$count.value}`;
		$price.innerHTML = `${phprice*$count.value}.00`;
		$nexphone.innerHTML = `${$count.value}`;
		$countprice.innerHTML = `￥${phprice*$count.value}.00`;
		localStorage.count = $count.value;
	}
	$del.onclick=function(){
		console.log(1)
		$box.innerHTML=`<h6>空</h6>`
		localStorage.removeItem('count');
	}
}
