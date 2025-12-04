/*для кнопки*/
document.addEventListener('DOMContentLoaded', function () {
	const menuToggle = document.querySelector('.menu-toggle');
	const headerNav = document.querySelector('.header-nav');

	menuToggle.addEventListener('click', function () {
			headerNav.classList.toggle('active');
	});
});

document.addEventListener("DOMContentLoaded", function() {
	const menuToggle = document.querySelector(".menu-toggle");
	const footerNav = document.querySelector(".footer-nav");

	menuToggle.addEventListener("click", function() {
			footerNav.classList.toggle("open");
	});
});


/*убираю невидимый блок visually-hidden-btn */

function checkScreenWidth() {
		if (window.innerWidth <= 1300) {
			var hiddenBtn = document.querySelector('.visually-hidden-btn');
			if (hiddenBtn) {
			hiddenBtn.remove();
			}
		}
}

// Проверка при загрузке страницы
checkScreenWidth();

// Проверка при изменении размера окна
window.addEventListener('resize', checkScreenWidth);
