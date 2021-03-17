function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

$(document).ready(function () {
	/*Меню бургер*/
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});

/*Меню*/
var sections = $('section')
	, nav = $('nav')
	, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop();

	sections.each(function () {
		var top = $(this).offset().top - nav_height - 100,
			bottom = top + $(this).outerHeight();

		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('header__link_active');
			sections.removeClass('section_active');

			$(this).addClass('section_active');
			nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('header__link_active');
		}
	});
});

nav.find('a').on('click', function () {
	var $el = $(this)
		, id = $el.attr('href');

	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
	}, 500);

	return false;
});
/*Меню*/

/*Фильтр*/
$(document).ready(function () {
	let filters = document.querySelectorAll('button[data-filter]');
	for (let filter of filters) {
		filter.addEventListener('click', function (e) {
			e.preventDefault();
			let catId = filter.getAttribute('data-filter');
			let workCat = document.querySelectorAll('.portfolio__item');
			workCat.forEach(function (c) {
				if (catId === 'all') {
					c.classList.remove('hide');
				} else {
					if (c.getAttribute('data-cat') !== catId) {
						c.classList.add('hide');
					} else {
						c.classList.remove('hide');
					}
				}
			})
		}); /* end listener*/
	}

	// Get the container element
	var btnContainer = document.getElementById("portfolio_nav");

	// Get all buttons with class="projects__nav_btn" inside the container
	var btns = btnContainer.getElementsByClassName("portfolio__nav-btn");

	// Loop through the buttons and add the active class to the current/clicked button
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function () {
			var current = document.getElementsByClassName("portfolio__nav-btn_active");
			current[0].className = current[0].className.replace(" portfolio__nav-btn_active", "");
			this.className += " portfolio__nav-btn_active";
		});
	}
});

/*Инициализируем слайдер*/
new Swiper('.portfolio-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clicable: true,
	},
	hashNavigation: {
		watchState: true,
	},
	keyboard: {
		enable: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	loop: true,
});

/*карта*/
// let map;
// function initMap() {
// 	map = new google.maps.Map(document.getElementById("map"), {
// 		center: { lat: 44.77812858246703, lng: 17.187267805370173 },
// 		zoom: 15,
// 	});
// 	marker = new google.maps.Marker({
// 		position: coordinates,
// 		map: map,
// 	});
// 	image = '../img/map_marker.jpg',
// 		marker = new google.maps.Marker({
// 			position: { lat: 44.77812858246703, lng: 17.187267805370173 },
// 			map: map,
// 			icon: image
// 		});
// }