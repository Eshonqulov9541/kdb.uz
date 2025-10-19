$(document).ready(function(){
	$('.board_article-link').click(function(){
		$(this).parent().find('.board_bg').addClass('active');
	});
	$('.board_close').click(function(){
		$(this).parent().parent().removeClass('active');
	});
	
});

$(document).ready(function(){
	$('.more').click(function(){
		$(this).parents('.item').find('.mpop').addClass('active');
	});
	$('.mpop_close').click(function(){
		$('.mpop').removeClass('active');
	});
	$('.keyper').click(function(){
		$('.keypop').addClass('active');
	});
	$('.keypop_close').click(function(){
		$('.keypop').removeClass('active');
	})
	$('.polist').click(function(){
		$(this).find('.polist_img').toggleClass('open');
		$(this).next().slideToggle(400);
	});
});