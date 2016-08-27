// input表单
$(".zn-sousuo input").focus(function(){
	$(".zn-yinqing").css({display:"block"})
})
$(".zn-sousuo input").blur(function(){
	$(".zn-yinqing").css({display:"none"})
})
// 表单


// 关闭
$(".zn-close").click(function(){
	$(".zn-dengluchuang").css({display:"none"})
})

$(".zn-close1").click(function(){
	$(".zn-zhuceshouji").css({display:"none"})
})
// 反馈弹窗
$(".zn-colse2").click(function(){
	$(".zn-bigzhezhao").css({display:"none"})
})
// 反馈弹窗结束
// 关闭


$(".zn-denglu:first").click(function(){
	$(".zn-dengluchuang").css({display:"block"});
	$(".zn-xmk:first").css({display:"none"})
	$(".zn-xmk:last").css({display:"none"})
	$(".zn-xzk").css({display:"block"})
})
$(".zn-denglu:last").click(function(){
	$(".zn-dengluchuang").css({display:"block"})
	$(".zn-xmk:last").css({display:"none"})
	$(".zn-xmk:first").css({display:"block"})
	$(".zn-xzk").css({display:"none"})
})

$(".zn-shangbufen div:first").click(function(){
	$(".zn-xiabufen").css({display:"none"});
	$(".zn-gkjl:first").css({display:"block"});
	$(".zn-gkjl:last").css({display:"none"})
})
$(".zn-shangbufen div:last").click(function(){
	$(".zn-xiabufen").css({display:"none"});
	$(".zn-gkjl:first").css({display:"none"})
	$(".zn-gkjl:last").css({display:"block"})
})


$(".zn-denglu1 span:first").click(function(){
	$(".zn-zhuceshouji").css({display:"none"})
	$(".zn-dengluchuang").css({display:"block"})
})
$(".zn-dlk:last").click(function(){
	$(".zn-xzk").css({display:"none"})
	$(".zn-xmk:first").css({display:"block"})
	$(".zn-xmk:last").css({display:"none"})
})

$(".zn-right").click(function(){
	$(".zn-money").css({display:"none"})
})
$(".zn-dlk:first").click(function(){
	$(".zn-xzk").css({display:"block"})
	$(".zn-xmk:first").css({display:"none"})
	$(".zn-xmk:last").css({display:"none"})
})
$(".zn-chong:first").click(function(){
	$(".zn-money:first").css({display:"block"})
	$(".zn-money:last").css({display:"none"})

})
$(".zn-chong:last").click(function(){
	$(".zn-money:last").css({display:"block"})
	$(".zn-money:first").css({display:"none"})

})
$(".zn-yxzc:first").click(function(){
	$(".zn-xzk").css({display:"none"})
	$(".zn-xmk:first").css({display:"none"})
	$(".zn-xmk:last").css({display:"block"})
})
$(".zn-yxzc:last").click(function(){
	$(".zn-xzk").css({display:"none"})
	$(".zn-xmk:first").css({display:"block"})
	$(".zn-xmk:last").css({display:"none"})
})
$(".zn-sousuo input").focus(function(){
	if(this.value=="默认频道"){
		this.value=""
	}
})	
$(".zn-sousuo input").blur(function(){
	if(this.value==""){
		this.value="默认频道"
	}
})
var sousuok=document.getElementsByClassName('zn-sousuok')[0]
var sousuo3=document.getElementsByClassName('zn-sousuo3')
for (var i = 0; i < sousuo3.length; i++) {
	sousuo3[i].onclick=function(){
		sousuo3[i].index=i;
		sousuok.value=sousuo3[this.index].innertext
	}
};