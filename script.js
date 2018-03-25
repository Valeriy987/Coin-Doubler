// скрытое меню
		$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.navigations');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 1024 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});

//изминение блока по высоте
		//$(function(){
  			//$('.learn').height($('.learn').width()/1.5);
  			//$(window).resize(function(){
    		//$('.learn').height($('.learn').width()/1.5);
  			//});
		//});

//блоки
/*$(function() {
			    $('.link').on('click', function(e) {
			        e.preventDefault();
			        $('.q-ans').each(function() {
			            $(this).css('display', 'none');
			        });
			        var block = $(this).attr('href');
			        $(block).css('display', 'flex');
			    });
			});
*/

function functabs(number) {


  var divs = document.getElementsByClassName('q-ans');
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add("hidden");
  }
  document.getElementById('div' + number).classList.remove("hidden");
  document.getElementById('div' + number).classList.add("show");

  var divs2 = document.getElementsByClassName('q-qwesh');
  for (var i = 0; i < divs2.length; i++) {
    divs2[i].classList.add("non-active");
  }
  document.getElementById('q' + number).classList.remove("non-active");
  document.getElementById('q' + number).classList.add("active");

  var divs3 = document.getElementsByClassName('link');
  for (var i = 0; i < divs3.length; i++) {
    divs3[i].classList.add("non-active2");
  }
  document.getElementById('a' + number).classList.remove("non-active2");
  document.getElementById('a' + number).classList.add("active2");

  var p5 = document.getElementsByClassName('q-qwesh-3');
  for (var j = 0; j < p5.length; j++) {
    p5[j].classList.add("p-non-active");
  }
  document.getElementById('p' + number).classList.remove("p-non-active");
  document.getElementById('p' + number).classList.add("p-active");
}


//плавная прокрутка по якорям
		 $(function(){
			$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
				var target = $(this).attr('href'),
					bl_top = $(target).offset().top - 0;
				$('body, html').animate({scrollTop: bl_top}, 700);
				return false;
			});
		});

//очистка полей
$('.reset').on('click', function() {
    $(this).closest('form').find('input[type=text], textarea').val('');
});