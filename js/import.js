document.addEventListener('DOMContentLoaded', function() {
	// загружаем компоненты на страницу
	function loadComponent(url, elementId, callback) {
		fetch(url)
		.then(response => response.text())
		.then(html => {
			document.getElementById(elementId).innerHTML = html;

			// вызываем колбэк функции после загрузки
			if(callback) {
				callback();
			}
		})
		.catch(error => console.warn('Ошибка загрузки компонента', error));
	}

	// вызываем функции для загрузки компонентов
	loadComponent('../components/header/header.html', 'header', () => {
		// header потребует навешивания слушателей
		if (window.initPage) window.initPage();
	});
	loadComponent('../components/footer/footer.html', 'footer', () => {
		// footer не зависит от JS на данный момент
	});
})