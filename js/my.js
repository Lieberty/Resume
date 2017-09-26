function fixSizes() {
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$("#home").css('height', windowHeight);
	$(".home-title").each(function() {
		$(this).css('padding-top', ($(this).parent().height() - $(this).height()) / 2);
	});
	$(".work-item-inside-content").each(function() {
		$(this).css('margin-top', ($(this).parent().height() - $(this).height()) / 2);
	});
};

$(document).ready(function() {
	fixSizes();
	$("#home").fadeTo(2500,1);
	$("body").css("overflow-x", "hidden");
	//本来是overflow，为了取消下方滚动条
	$(".home-title").removeClass("jiji");
	$(".touch_info").removeClass("jiji");

	// Works
	$(".thumbnail").hover(function(e){
		$(this).children('.work-item-inside').addClass("visuallyshowed");
	}, function(){ 
		$(this).children('.work-item-inside').removeClass("visuallyshowed");
	});

	// 滚动
	/*if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
			beforerender: function(data) {
				return data.curTop > data.lastTop;
			}        
        	
	    });
	}*/

	
});


$(window).resize(function() {
	fixSizes();
});

/*锚点平滑移动*/
$(document).ready(function() {  
    $("a.toLink").click(function() {  
        $("html, body").animate({  
            scrollTop: $($(this).attr("href")).offset().top + "px"  
        }, {  
            duration: 1000,  
            easing: "swing"  
        });  
        return false;  
    });  
});

/*自我介绍  */
$(document).ready(function(){
	$('.show_content').click(function(){
		$("#recommend").fadeTo(1500,1);
		$("#work_content").css('marginTop','0');
	})

});

/*二维码显示*/
$(".QQ").hover(function(e){
	$('.scan_box').addClass("qq");
}, function(){ 
	$('.scan_box').removeClass("qq");
});
$(".weixin").hover(function(e){
	$('.scan_box').addClass("Weixin");
}, function(){ 
	$('.scan_box').removeClass("Weixin");
});