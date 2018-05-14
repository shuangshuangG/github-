//顶部广告
var flag = false;
$(".close-advi").on("click",function(){
	$(".advi").stop().slideUp(200,"linear",function(){
		console.log("广告已隐藏!");
	})
})

// 顶栏导航动画
$(".to_wanbiao_hidden").stop().slideUp(0);
$(".to_fuwu_link").stop().slideUp(0);
$(".relative").hover(function(){
	$(".to_wanbiao").toggleClass("active");
	$(".to_wanbiao_hidden").stop().slideDown(200);
},function(){
	$(".to_wanbiao").toggleClass("active");
	$(".to_wanbiao_hidden").stop().slideUp(200);
})

$(".relative2").hover(function(){
	$(".to_fuwu").toggleClass("active");
	$(".to_fuwu_link").stop().slideDown(200);
},function(){
	$(".to_fuwu").toggleClass("active");
	$(".to_fuwu_link").stop().slideUp(200);
})

$(".wb_app").on("mouseenter",function(){
	document.querySelector(".to_wanbiao_img").src = "img/new_1.jpg";
})
$(".wb_weixin").on("mouseenter",function(){
	document.querySelector(".to_wanbiao_img").src = "img/3.png";
})
//轮播图

$(".banner").hover(function(){
	$("#btn_left").stop().animate({"right":"920px"},300,"swing");
	$("#btn_right").stop().animate({"left":"1130px"},300,"swing");
},function(){
	$("#btn_left").stop().animate({"right":"990px"},300,"swing");
	$("#btn_right").stop().animate({"left":"1200px"},300,"swing");
})

$(".banner_bg ul li:odd").css("background","#332424");
$(".banner_bg ul li:even").css("background","#402d2d");
var mask;
$(".banner_bg ul li").hover(function(){
	mask = $("<div>");
	mask.css({
		"position":"absolute",
		"zIndex":2,
		"height":document.body.clientHeight,
		"width":"100%",
		"background":"rgba(0,0,0,0.3)"
	})
	$(".banner_bg").prepend(mask);
},function(){
	if(mask){
		mask.remove();	
	}
})
$(".banner_bg ul li").eq(6).off("mouseenter");

var banner_data;
$.ajax({
	url: "data/banner_data.json",
	success: function(res){
				res.forEach(function(item){
					var $a = $("<a>");
					$a.attr("href",item.link);
					
					var $img = $("<img>");
					$img.attr("src",item.href)
					$img.attr("data-id",item.id)
					$img.attr("data-color",item.color)
					
					$a.append($img);
					$("#btn_left").before($a);
				})
				bannerRun();
		}
});


//悬浮固定元素
$(".talk_close").hover(function(){
	$(".talk_close").css({
		"transform": "rotate(180deg)",
		"transition": "all 0.2s linear"
	})
},function(){
	$(".talk_close").css({
		"transform": "rotate(0deg)",
		"transition": "all 0.2s linear"
	})
})
$(".attach_talk").hover(function(){
	$(".attach_talk_msg").css({"display":"block"});
	$(".attach_talk").css({
		"height":"190px",
		"width":"376px"
	});
	$(".attach_talk_msg").stop().animate({
		"right":"76px",
		"opacity":1
	},800)
},function(){
	$(".attach_talk_msg").stop().animate({
		"opacity":0
	},function(){
		$(".attach_talk_msg").css({"display":"none","right":"54px"});
		$(".attach_talk").css({
			"height":"66px",
			"width":"58px"
		});
	})
})

$(".talk_close").on("click",function(){
	$(".attach_talk_msg").animate({
		"opacity":0
	},function(){
		$(".attach_talk_msg").css({"display":"none","right":"54px"});
		$(".attach_talk").css({
			"height":"66px",
			"width":"58px"
		});
	})
})
$(".attach_bottom ul li").each(function(index){
	$(".attach_bottom ul li").eq(index).hover(function(){
		$(".attach_bottom ul li a").eq(index).css({"display":"inline-block"})
		$(".attach_bottom ul li a").eq(index).stop().animate({"opacity":"1"})
	},function(){
		$(".attach_bottom ul li a").eq(index).stop().animate({"opacity":"0"},function(){
			$(".attach_bottom ul li a").eq(index).css({"display":"none"});
		})
	})
})
		//返回顶部
$(".to_top").on("click",function(){
	$("body,html").animate({"scrollTop":"0"},300);
})

//图片导航

$.ajax({
	url:"data/w_list_slide.json",
	success:function(res){
		res.forEach(function(item){
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $img = $("<img>");
			$img.attr("src",item.href);
			
			$a.append($img);
			$(".w_list_slide").append($a);
		})
	}
})

//闪购特惠

$.ajax({
	url:"data/w_fast.json",
	success:function(res){
		res.forEach(function(item){
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $p = $("<p>");
			$p.text(item.title);
			
			var $h5 = $("<h5>");
			$h5.text(item.content);
			
			var $img = $("<img>");
			$img.attr("src",item.href);
			
			$a.append($p);
			$a.append($h5);
			$a.append($img);
			$(".w_fast_right").append($a);
		})
	}
})

$.ajax({
	url:"data/w_fast_foot.json",
	success:function(res){
		res.forEach(function(item){
			var $li = $("<li>");			
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $img = $("<img>");
			$img.attr("src",item.href);

			$li.append($a);
			$a.append($img);
			$(".w_fast_foot ul").append($li);
		})
	}
})

//热卖推荐

$.ajax({
	url:"data/hot_data.json",
	success:function(res){
		res.forEach(function(item){
			var $div = $("<div>");
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $img = $("<img>");
			$img.attr("src",item.href)
			
			var $p1 = $("<p>");
			$p1.addClass("p1");
			$p1.text(item.title);
			
			var $p2 = $("<p>");
			$p2.addClass("p2");
			$p2.text(item.content);
			
			$a.append($img);
			$a.append($p1);
			$a.append($p2);
			$div.append($a);
			$(".hot_item").append($div);
		})
	}
})

//人气店铺
$.ajax({
	url:"data/popularShop.json",
	success:function(res){
		res.forEach(function(item){
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $img = $("<img>");
			$img.attr("src",item.href)
			
			var $p1 = $("<p>");
			$p1.addClass("p1");
			$p1.text(item.title);
			
			$a.append($img);
			$a.append($p1);
			$(".popularityShop").append($a);
		})
	}
})

//无标题图片展示
$.ajax({
	url:"data/no_title_pic.json",
	success:function(res){
		res.forEach(function(item){
			var $li = $("<li>");			
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $img = $("<img>");
			$img.attr("src",item.href)
			
			var $p1 = $("<p>");
			$p1.addClass("p1");
			$p1.text(item.title);
			
			var $p2 = $("<p>");
			$p2.addClass("p2");
			$p2.text(item.content);
			
			$a.append($img);
			$a.append($p1);
			$a.append($p2);
			$li.append($a);
			$(".show_item_bottom ul").append($li);
		})
	}
})

//晒单分享
$.ajax({
	url:"data/shall_data.json",
	success:function(res){
		res.forEach(function(item){		
			var $a = $("<a>");
			$a.attr("href",item.link);
			
			var $img = $("<img>");
			$img.attr("src",item.href)
			
			var $p1 = $("<p>");
			$p1.addClass("p1");
			$p1.text(item.title);
			
			$a.append($img);
			$a.append($p1);
			$(".shall").append($a);
		})
		
		$(".shall a img").each(function(i){
		   $(".shall a img").eq(i).hover(function(){
				$(".shall a img").eq(i).css({"transform":"scale(1.1)","transition":"all 1.5s"})
			},function(){
				$(".shall a img").eq(i).css({"transform":"scale(1)","transition":"all 1.5s"})
			})
		});
	}
})

//footer
var $ul = $(".in_right ul");
var $img = $(".in_right img");
var $p = $(".in_right p");
$ul.each(function(index){
	var $li = $ul.eq(index).children();
	var $img_item = $img.eq(index);
	var $p_item = $p.eq(index);
	$li.each(function(item){
		$li.eq(item).on("mouseenter",function(){
			$li.each(function(i){
				if($li.eq(i).hasClass("li_active")){
					$li.eq(i).removeClass("li_active");
				}
			})
			$li.eq(item).addClass("li_active");
			if(index == 0) $img_item.attr("src","img/pic-"+item+".png");
			else $img_item.attr("src","img/pis-"+item+".png");
			
			if(index == 0){
				if(item == 0) $p_item.text("关注领100现金券");
				else $p_item.text("全球买表 国内保修");
			}
			else{
				if(item == 0) $p_item.text("每日推送手表干货文章");
				else $p_item.text("每周推送打折促销活动信息");
			}
		})
})
})

$(".more_link").eq(0).on("click",function(){
	$(".wb_more_link").eq(0).toggle(400);
//	$(".wb_more_link").eq(0).css({"marginTop":"-10px","display":"block"})
//	.animate({"marginTop":"0px"},500,function(){
//		$(".more_link").eq(0).off("click");
//	});
})
$(".more_link").eq(1).on("click",function(){
	$(".wb_more_link").eq(1).toggle(400);
})