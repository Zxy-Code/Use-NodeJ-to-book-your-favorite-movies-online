$(function(){
	var showAllBool = false;
	var showAll = function(){
		if(showAllBool){
	        showAllBool = false;
	        $('.detail-content .content-main').css('max-height','132px');
	        $('#content-arrow').css({
	        	transform: "rotate(360deg)"
	        })
	        $('.content-main p').addClass('active');
	    }else{
	        showAllBool = true;
	        $('.detail-content .content-main').css('max-height','none');
	        $('#content-arrow').css({
	        	transform: "rotate(180deg)"
	        });
	        $('.content-main p').removeClass('active');
	    }
	}
	$('.arrow-icon,.content-main').on('click',showAll)
	//加喜欢
	$(document).on('click','.iLike',function(){
		$(this).toggleClass('active');
	})
	//返回
	$('.titleNav .goback').on('tap',function(){
		location.href = history.go(-1);
	})
})
