import $ from 'jquery';

export function get(url, data) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url,
			data: data,
			dataType: 'json',
			success: function (result) {
				resolve(result);
			},
			error: function (error) {
				//FlowRouter.go('/login');
				console.log('errrrrrr', error);
				reject(error);
			}
		});
	});
}

export function getSync(url, data) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url,
			data: data,
			async: false,
			dataType: 'json',
			success: function (result) {
				resolve(result);
			},
			error: function (error) {
				//FlowRouter.go('/login');
				console.log('errrrrrr', error);
				reject(error);
			}
		});
	});
}

export function post(url, data) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			type: 'POST',
			url: url,
			data: data,
			dataType: 'json',
			success: function (result) {
				resolve(result);
			},
			error: function (error) {
				//FlowRouter.go('/login');
				console.log('errrrrrr', error);
				reject(error);
			}
		});
	});
}

export function upload(url, data) {
	return new Promise(function (resolve, reject) {
		$.ajax({
			url: url,
			data: data,
			type: 'post',
			processData: false,
			contentType: false,
			//dataType: 'json',
			success: function (result) {
				resolve(result);
			},
			error: function (error) {
				//FlowRouter.go('/login');
				console.log('errrrrrr', error);
				reject(error);
			}
		});
	});
}