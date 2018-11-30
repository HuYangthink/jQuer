
window.onload=function(){

	var wdjd= document.getElementById('wdjd');
wdjd.onmouseover=function(){
	var oDiv = document.getElementById('yc1');
	oDiv.style.display='block',
	wdjd.style.background="#fff";

}
wdjd.onmouseout = function(){
	var oDiv = document.getElementById('yc1');
	oDiv.style.display= 'none';
	wdjd.style.background="#8080";
}
var oDiv = document.getElementById('yc1');
oDiv.onmouseover=function(){

	oDiv.style.display= 'block';
	wdjd.style.background="#fff";
}
var oDiv = document.getElementById('yc1');
oDiv.onmouseout=function(){
	oDiv.style.display='none';
	wdjd.style.background="#8080";
}
// 企业采购

var cg = document.getElementById('qycg')
cg.onmouseover=function(){
	var qygw = document.getElementById('qy');
	qygw.style.display=' block',
	cg.style.background='#fff';
}
cg.onmouseout=function(){
	var qygw = document.getElementById('qy');
	qygw.style.display= 'none',
	cg.style.background = '#8080';
}

var qygw = document.getElementById('qy');
qygw.onmouseover=function(){
qygw.style.display='block';
}
var qygw = document.getElementById('qy');
qygw.onmouseout=function(){
qygw.style.display='none';
}
// 客服
var kf = document.getElementById('kffw');
kf.onmouseover = function(){
	var fw = document.getElementById('fkw');
	fw.style.display='block',
	kf.style.background = '#fff';
}
var kf = document.getElementById('kffw');
kf.onmouseout=function(){
	var fw =document.getElementById('fkw');
	fw.style.display='none',
	kf.style.background="#8080";
}

var fw =document.getElementById('fkw');
fw.onmouseover=function(){
	fw.style.display='block';
}

var fw =document.getElementById('fkw');
fw.onmouseout=function(){
	fw.style.display='none';
}

// 网站导航
var dh = document.getElementById('wzdh');
dh.onmouseover=function(){
	var dhyc =document.getElementById('wzdhyc');
	dhyc.style.display='block',
	dh.style.background = "#fff";
}

var dh = document.getElementById('wzdh');
dh.onmouseout=function(){
	var dhyc =document.getElementById('wzdhyc');
	dhyc.style.display='none',
	dh.style.background='#8080';
}

var dhyc = document.getElementById('wzdhyc');
dhyc.onmouseout=function(){
	dhyc.style.display='none';
}


var dhyc = document.getElementById('wzdhyc');
dhyc.onmouseover=function(){
	dhyc.style.display='block';
}

// 家用电器
var dbox=document.getElementById('jydq');

dbox.onmouseover = function(){
	var xaxa= document.getElementById('dqyc');
	xaxa.style.display= 'block';
	dbox.style.background='#ccc';
}
// 移出
var dbox=document.getElementById('jydq');

dbox.onmouseout = function(){
	var xaxa= document.getElementById('dqyc');
	xaxa.style.display= 'none';
	dbox.style.background='none';
}

var xaxa = document.getElementById('dqyc');
xaxa.onmouseover = function(){
	xaxa.style.display= 'block';
}

var xaxa = document.getElementById('dqyc');
xaxa.onmouseout = function(){
	xaxa.style.display= 'none';
}

// 手机运营商/数码

var sjyy = document.getElementById('sjyyssm');
	sjyy.onmousover=function(){
		var sjyyyc = document.getElementById('sjyy');
		sjyyyc.style.display='block';
		sjyy.style.background='#ccc';
	}


var sjyy = document.getElementById('sjyyssm');
	sjyy.onmousout=function(){
		var sjyys = document.getElementById('sjyy');
		sjyys.style.display='none';
		sjyy.style.background='none';
	}

var sjyys = document.getElementById('sjyy');
	sjyys.onmouseover=function(){
		sjyys.style.display='block';
	}

var sjyys = document.getElementById('sjyy');
sjyys.onmouseout=function(){
	sjyys.style.display='none';
}



var smsj = document.getElementById("sjyyssm");
	smsj.onmouseover=function(){
		var smsjyc = document.getElementById("sjyy");
		smsjyc.style.display="block";
		smsj.style.background='#ccc';
	}

var smsj = document.getElementById('sjyyssm');
 smsj.onmouseout=function(){
 	 var smsjyc = document.getElementById('sjyy');
 	 smsjyc.style.display = 'none';
 	 smsj.style.background='none';
 }

var smsjyc = document.getElementById('sjyy');
 smsjyc.onmouseover=function(){
 	smsjyc.style.display='block';
 }

var smsjyc = document.getElementById('sjyy');
 smsjyc.onmouseout=function(){
 	smsjyc.style.display='none';
 }

 // 家居  家居

 var jjjc = document.getElementById('jjjjjzcj');
 jjjc.onmouseover=function(){
 	var ju =document.getElementById('juju');
 	ju.style.display="block";
 	jjjc.style.background='#ccc';
 }

 var jjjc = document.getElementById('jjjjjzcj');
 jjjc.onmouseout=function(){
 	var ju =document.getElementById('juju');
 	ju.style.display="none";
 	jjjc.style.background='none';
 }

var ju =document.getElementById('juju');
ju.onmouseover=function(){
	ju.style.display="block";
}

var ju =document.getElementById('juju');
ju.onmouseout=function(){
	ju.style.display="none";
}







// 轮播图

$(function () {

 /*设置鼠标移动到整个show区域则左右按钮显示出来，否则不显示*/
 $("#show-area").mouseenter(function () {
		 $("#button-right,#button-left").css({opacity:0.5});
 });
 $("#show-area").mouseleave(function () {
		 $("#button-right,#button-left").css({opacity:0});
 });


 var i=0;
 /*假装自己很智能，自动获取一下，在后面left值移动时就可以用它了*/
 var imgWidth = $("#show-area ul li").width();
 var clone = $("#show-area ul li").first().clone(true);
 /*copy 第一张的照片并且添加到最后已达到无缝对接的效果*/
 $("#show-area ul").append(clone);


 /*get 所有li的个数,只有length才是属性*/
 var size = $("#show-area ul li").length;


 /*step 1:  */
 //一开始循环添加按钮
 //为什么要size - 1？因为最后一张图片只是作一个过渡效果我们显示的始终还是4张图片
 //所以添加按钮的时候我们也应该添加4个按钮
 for(var j=0;j<size -1 ;j++){
		 $("#indicator").append("<div></div>");
 }

 $("#indicator div").eq(i).addClass("onclick");


 /*step 2:  */
 //左按钮
 $("#button-left").click(function () {
		 toLeft();
 });
 //右按钮
 $("#button-right").click(function () {
		 toRight();
 });

 /*step 3：*/
 //按钮指示器鼠标移出移入事件
 $("#indicator div").hover(function () {
		 i = $(this).index();
		 clearInterval(timer);
		 $("#show-area ul").stop().animate({left:-i * imgWidth});
		 $(this).addClass("onclick").siblings().removeClass("onclick");

 },function () {
		 timer = setInterval(function () {
				 toRight();
		 },2000)
 });

 //两个方向按钮鼠标移出移入事件
 $("#button-left,#button-right").mouseenter(function () {
		 clearInterval(timer);
 }).mouseleave(function () {
		 timer = setInterval(function () {
				 toRight();
		 },2000);
 });

 //定时器,注意，这里是最开始启动的，所以呢，这里不设值，会导致页面开始刷新出现错误。
	var timer = setInterval(function () {
		 toRight();
 },2000);


 /*step 2-2*/
 //左按钮实现的函数
 function toLeft(){

		 //同理，如果当前图片位置是第一张图片我再按一下右按钮那么我们也利用css的快速变换使它的位置来到最后一张图片的位置（size-1），并且让倒数第二张图片滑动进来
		 i--;
		 if(i==-1){
				 $("#show-area ul").css({left:-(size - 1)*imgWidth});
				 i=size-2;
		 }
		 $("#show-area ul").animate({left:-i*imgWidth},1000);
		 $("#indicator div").eq(i).addClass("onclick").siblings().removeClass("onclick");

 }

 /*step2-2:*/
 //右按钮的实现函数
 function toRight() {
		 i++;
		 /*当前图片为最后一张图片的时候（我们一开始复制并且添加到ul最后面的图片）
		 并且再点击了一次左按钮，这时候我们就利用css的快速转换效果把ul移动第一张图片的位置
		 并且第二张图片滑入达到无缝效果（css的变换效果很快我们肉眼是很难看见的）*/
		 if(i==size){
				 // console.log("qq");
				 $("#show-area ul").css({left:0});
				 i=1;
		 }

		 $("#show-area ul").stop().animate({left: -i * imgWidth}, 1000);

		 //设置下面指示器的颜色索引
		 if(i == size-1){
				 $("#indicator div").eq(0).addClass("onclick").siblings().removeClass("onclick");

		 }else{
				 $("#indicator div").eq(i).addClass("onclick").siblings().removeClass("onclick");
		 }
 }

})


// ajax
$('#ybyr').load('../../lx/jd/2.html')

}
