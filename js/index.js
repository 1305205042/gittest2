



	$(function(){
		
		$(".tagline").letterfx({"fx":"fall","words":true,"timing":50});//1	
		//$(".tagline").letterfx({"fx":"fall"})
		
		setInterval(function(){
			$(".tagline").letterfx({"fx":"wave","letter_end":"rewind","fx_duration":"300ms"});
		},3000)
		
		Rowleft()
					
	})
	
	//$(window).resize(       // 图表自适应窗口变化
	//	function(){	
	//	  $('.aside_center li').css('margin-top', $('.article_bg').width()*0.015)
	//  }
	//
	//)
	
	function Rowleft(){
		
		var arr = ['首页','面向对象','产品','历程','团队','联系我们']
		var arr1 = ['html/shouye.html','html/Object-oriented.html','html/product.html','html/course.html','html/team.html','html/contact.html']
		
		var span = ''
		
		for(var i=0;i<arr.length;i++){
		
		    span += '<li class="common">'+arr[i]+'</li>'	
			
		}
		
		$('.aside_center ul').eq(0).html(span)
		
		$('.Tab li').click(function(){
			
			var _index = $(this).index();
			$('.Tab li').css('color','#d9d9d9')
		    $(this).css('color','#68a30d')
	//	    alert(arr1[_index])
			setTimeout(timeout(),3000)
	
			function timeout(){
			    $('#article_box').html('<iframe src="'+arr1[_index]+'" style=" width:100%; height:100%;min-width: 1300px;" frameborder="0"></iframe>')
			}		    
		})
				
		$("#logo").on('click',function(){
			$('#article_box').html('<iframe src="html/newyear.html" style=" width:100%; height:100%;min-width: 1300px;" frameborder="0"></iframe>')
	
		})
	
	}
	
	
	
	
