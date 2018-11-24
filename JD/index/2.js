$(function(){
  $(".ynzc_id a").mouseover(function(){

    $('.ynzc_id a').css("color",'#aa2116');
  }).mouseout(function(){
    $('.ynzc_id a').css("color",'#808080');
  });


  // 登陆注册
  $(".ynzc_dlzc a").mouseover(function(){
    $('.ynzc_dlzc a').css('color',"#aa2116");
  }).mouseout(function(){
    $('.ynzc_dlzc a').css('color','#808080');
  });

// 新人福利  会员
$('.xrfl').mouseover(function(){
  $(".xrfl").css('color','#fff'),
  $('.xrfl').css('background','red');
}).mouseout(function(){
  $('.xrfl').css('color','red'),
  $('.xrfl').css('background',"#fffef9");
});


$(".hy").mouseover(function(){
  $(".hy").css('color','#fff'),
  $('.hy').css('background','#c63c26');
}).mouseout(function(){
  $('.hy').css('color','#fdb933'),
  $('.hy').css('background','#130c0e');
});

// 促销   公告    更多

$("#cx a").mouseover(function(){
  $('.ycts1').css("display","block"),
  $('.ycts2').css("display",'none'),
  $('#cx a').css('color','red');
}).mouseout(function(){
  $('#cx a').css('color','#808080')
})

$('#gg a').mouseover(function(){
  $('.ycts1').css('display','none'),
  $('.ycts2').css("display",'block'),
  $('#gg a').css('color','red');
}).mouseout(function(){
  $('#gg a').css("color",'#808080');
});


// 隐藏的字体

$('.ycts_a a').mouseover(function(){
  $(".ycts_a a").css('color','red');
}).mouseout(function(){
  $('.ycts_a a').css('color','#808080');
});

$('.ycts_b a').mouseover(function(){
  $(".ycts_b a").css('color','red');
}).mouseout(function(){
  $('.ycts_b a').css('color','#808080');
});

$('.ycts_c a').mouseover(function(){
  $(".ycts_c a").css('color','red');
}).mouseout(function(){
  $('.ycts_c a').css('color','#808080');
});

$('.ycts_d a').mouseover(function(){
  $(".ycts_d a").css('color','red');
}).mouseout(function(){
  $('.ycts_d a').css('color','#808080');
});

$('.ycts_e a').mouseover(function(){
  $(".ycts_e a").css('color','red');
}).mouseout(function(){
  $('.ycts_e a').css('color','#808080');
});

$('.ycts_f a').mouseover(function(){
  $(".ycts_f a").css('color','red');
}).mouseout(function(){
  $('.ycts_f a').css('color','#808080');
});

$('.ycts_g a').mouseover(function(){
  $(".ycts_g a").css('color','red');
}).mouseout(function(){
  $('.ycts_g a').css('color','#808080');
});

$('.ycts_h a').mouseover(function(){
  $(".ycts_h a").css('color','red');
}).mouseout(function(){
  $('.ycts_h a').css('color','#808080');
});
})
