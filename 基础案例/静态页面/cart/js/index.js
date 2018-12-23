$(function () {
	$('.container').fullpage({
		// 配置参数
		sectionsColor: ["#fadd67" ,"#84A2D4" ,"#EF674D", "#ffeedd", "#d04759", "#84d9ed", "#8ac060", "#84d9ed"],
		navigation: true,
		verticalCentered: false,
		scrollingSpeed: 1000,
		afterLoad: function (link,index) {
			// console.log(index);
			$('.section').eq(index-1).addClass('now');
			if (index == 8) {
				$('body').mousemove(function(e) {
		            e = e || window.event;
		            // console.log(e);
		            x = e.pageX || e.clientX + document.body.scroolLeft;
		            y = e.pageY || e.clientY + document.body.scrollTop;
		            x = x - 60;
		            y = y + 1;
		            // console.log(x,y);
		            $(".handPointer").css("left",x).css("top",y);
		   		 });
			}
			$('.again').on('click' ,function () {
				$('.now, .leave').removeClass('.now');
				$('.now, .leave').removeClass('.leave');
				$.fn.fullpage.silentMoveTo(1,0);
			}) 
			
		},
		afterRender: function () {
			$('.more').on('click' ,function () {
				$.fn.fullpage.moveSectionDown();
			})
			// $('.again').on('click' ,function () {
			// 	$.fn.fullpage.
			// })
		    
		},
		onLeave: function (index,nextIndex,direction) {
			if (index == 2 && nextIndex == 3) {
				$('.section').eq(index-1).addClass('leave');
			}
			if (index == 3 && nextIndex == 4) {
				$('.section').eq(index-1).addClass('leave');
			}
			if (index == 5 && nextIndex == 6) {
				$('.section').eq(index-1).addClass('leave');
			}
		},
	});
});