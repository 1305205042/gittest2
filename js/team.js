
//		if(window.onload){
			setTimeout(function(){
				$('body').animate({'opacity':1,'filter':'alpha(opacity=100)'})	
			},200)		
//		}

		var oli = $('.three_ul1 li');
		var arr= ['0','-5.6rem','-11.2rem'];
//		console.log(oli)
		
//		alert(oli.length)

//			alert(oli[i])
		oli.on('click',function(){
//				alert($(this).index())
			var index = $(this).index();
			var h = $('.three_ul2 li').height()*2;
//			alert(h)
			$(this).addClass('active').siblings().removeClass('active');
			$(this).find('span').css({
				'opacity':1,'filter':'alpha(opacity=100)'
			})
			$(this).siblings().find('span').css({
				'opacity':0,'filter':'alpha(opacity=0)'
			})
//			alert(arr[index])
			$('.three_ul2').animate({
				'top':arr[index]
			})
		})
//				$(this).addClass('active').siblings().removeClass('active')


		$('#li_btn').on('click',function(){
			$('#mova_one').animate({
				'left':'-16.4rem'
			})
		})

//****************************鼠标移入图片放大***************************

$('.three_ul2 li div img').hover(
	
	function(){
		if(!$(this).hasClass("two_tu")){
//		alert(11)
			$(this).parent().css({'position':'relative','z-index':10});
			$(this).stop().animate({'width':'8.5rem','height':'5.5rem'});
		}
	},function(){
		$(this).parent().css({'position':'relative','z-index':1});
		$(this).stop().animate({'width':'100%','height':'100%'});
	}
)

$('.three_ul2 li:nth-child(2) div img').hover(
	function(){
		$(this).parent().css({'position':'relative','z-index':10});
		$(this).css({'position':'absolute'});
		$(this).stop().animate({'top':'-2.84rem','width':'8.5rem','height':'5.5rem'});
		
	},function(){
		
		$(this).css({'position':'absolute'});
		$(this).stop().animate({'top':'0','width':'100%','height':'100%'});
		$(this).parent().css({'position':'relative','z-index':1});
	}
)




