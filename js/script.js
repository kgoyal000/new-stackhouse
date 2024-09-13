$(document).ready(function(){



	$('.mobile__info>.menu>a').on('click' ,function(e){
		e.preventDefault();
		$('.menu__mobile').css('left' ,'0px');
		$('.overlay').fadeIn(300);
	});


	$('.overlay').on('click' ,function(e){
		e.preventDefault();
		$(this).fadeOut(300);
		$('.menu__mobile').css("left" ,'-340px');
	});

	$('.menu__mobile .main__step .title>a').on("click" ,function(e){
		e.preventDefault();
		$('.overlay').fadeOut(300);
		$('.menu__mobile').css("left" ,'-340px');
	});

	$('.menu__mobile .main__step>ul li a.sub__menu').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.main__step').addClass("closed");
		$('.secondary__step[data-id='+ $(this).attr("data-id") +']').addClass('current');
	});

	$('.menu__mobile .secondary__step>ul li a.inner__menu').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.secondary__step').addClass("closed");
		$('.secondary__step[data-id='+ $(this).attr("data-id") +']').addClass('current');
	});

	$('.secondary__step .back__btn>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).closest('.secondary__step').attr("data-parent") != undefined) {
			$(this).closest('.secondary__step').removeClass('current');
			$('.secondary__step[data-id='+ $(this).closest(".secondary__step").attr('data-parent') +']').removeClass('closed');
		} else {
			$(this).closest('.secondary__step').removeClass('current');
			$('.main__step').removeClass('closed');
		}
	});

	$("header .search>a").on('click' ,function(e){
		e.preventDefault();
		$('.search__box').fadeIn(300);
		$('header .float').addClass('active');
	});
	$('header .float').on("click" ,function(e){
		e.preventDefault();
		$('.search__box').fadeOut(300);
		$('header .float').removeClass('active');
	});

	if ($('.hero__slider').length) {
		$('.outer__hero').slick({
			slidesToShow:1,
			arrows:true,
			autoplay:true,
			speed:1500,
			autoplaySpeed:4000,
			responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        arrows:false,
		        dots:true
		      }
		    }
		  ]
		});
		$('.hero__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			$('.hero__slider .animated').removeClass("animated");
			$('.hero__slider .slick-current .desc>h2').addClass("animated");
			setTimeout(() =>{
				$('.hero__slider .slick-current .desc>p').addClass("animated");
			}, 40);
			setTimeout(() =>{
				$('.hero__slider .slick-current .desc>.btn').addClass("animated");
			}, 80);
		});
		$('.hero__slider .btn__back').on("click" ,function(e){
			e.preventDefault();
			$('.hero__slider .slick-prev').click();
		});
		$('.hero__slider .btn__next').on("click" ,function(e){
			e.preventDefault();
			$('.hero__slider .slick-next').click();
		});
	}
});