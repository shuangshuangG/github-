function bannerRun(){
	var i = 0;
	var banner_timer;
	showBanner(0);
	banner_timer = setInterval(function(){	
		i++;
		if(i > 8) i = 0;
		showBanner(i);
	},3000)
	
	$(".banner_bg").hover(function(){
		clearInterval(banner_timer);
	},function(){
		banner_timer = setInterval(function(){	
			i++;
			if(i > 8) i = 0;
			showBanner(i);
		},3000)
	})
	
	$("#btn_left").on("click",function(){
		i --;
		if(i < 0) i = 8;
		showBanner(i);
	})
	$("#btn_right").on("click",function(){
		i ++;
		if(i > 8) i = 0;
		showBanner(i);
	})
}

function showBanner(item){
	var bg = $(".banner_bg");
	var img = $(".banner_bg .banner img");
	bg.css({"background":img.eq(item).attr("data-color")});
	img.each(function(index){
		img.eq(index).css({"opacity":0,"transform":"scale(1.02)","transition":"none"});
	})
	
	img.eq(item).animate({"opacity":"1"},800,function(){
		img.each(function(index){
			img.eq(index).css({"zIndex":0});
		})
		img.eq(item).css({"zIndex":1,"transform":"scale(1)","transition":"all 1s linear"});
	})
}
