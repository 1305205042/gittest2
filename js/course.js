
//			if(window.onload){
				setTimeout(function(){
					$('body').animate({'opacity':1,'filter':'alpha(opacity=100)'})	
				},200)		
//			}

			//*************足迹，成果 切换**************
			$('#span-1').on('click',function(){
				$('#span-1').addClass('active');
				$('#span-2').removeClass('active');
				$('#cou-box1').show();
				$('#cou-box2').hide();
			});
			
			$('#span-2').on('click',function(){
//				alert(22)
				$('#span-1').removeClass('active');
				$('#span-2').addClass('active');
				$('#cou-box2').show();
				$('#cou-box1').hide();								
			})			
			//*************左右切换**************
			
			$('#btn-left').on('click',function(){
					
//				alert(00);
				if($('#span-1').hasClass('active')){
					$('#move1').animate({'left':'0'});
				}else{
					$('#move2').animate({'left':'0'});
//					alert(1)
//					$('#cou-box2 img').attr({'src':'../images/course/1.png'})
				}
				
				
			});
			
			$('#btn-right').on('click',function(){
			
				if($('#span-1').hasClass('active')){
					$('#move1').animate({'left':'-15.42rem'});
				}else{
					$('#move2').animate({'left':'-15.42rem'});
//					alert(2)
//					$('#cou-box2 img').attr({'src':'../images/course/2.png'})
				}
			})			
			//**********move1 hover******************************
			$('#move1 ul li').hover(function(){				
				$(this).find('span').stop().animate({
					'height':'1rem'
//					'background':'rgba(0,79,156,0.5)'
				})
			},function(){
				$(this).find('span').stop().animate({
					'height':'0.6rem'
				})				
			})