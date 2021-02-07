import axios from 'axios';
import QS from 'qs';
import { Message } from 'view-design';
import { Vue } from 'vue-property-decorator';

//自动切换环境
axios.defaults.baseURL = process.env._BASEURL
//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withcredentials = true

//请求拦截(请求发出前处理请求)
axios.interceptors.request.use(( config ) => {
	//在发送请求之前如果为post序列化请求参数
	if (config.method === 'post') {
		config.data = config.data;
	}
	return config;
}, ( error ) => {
	return Promise.reject(error);
});

// 响应拦截器（处理响应数据）
axios.interceptors.response.use(( res ) => {
	//对响应数据做判断，与后台协议统一接口返回格式
	if (res.data.code != 0) {
		let msg = res.data.msg ? res.data.msg : '';
		switch (res.data.code) {
			case 99:
				Message.error('服务器挂了');
				Vue.$router.push({name: 'login'})
				break;
			case 401:
				Message.error(msg)
				break;
			case 403:
				Message.error(msg ? msg : '您没有接口权限')
				break;
			default:
				Message.error(msg ? msg : '报错了')
				break;
		}
		return Promise.reject(res);
	}
	// else {
	// 	Message.success('请求成功')
	// }
	return res;
}, ( error ) => {
	return Promise.reject(error);
});

// 封装get方法
function get ( url, params ) {
	return new Promise(( resolve, reject ) => {
		axios.get(url, params).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data);
		})
	});
}

// 封装post方法
function post ( url, params ) {
	return new Promise(( resolve, reject ) => {
		axios.post(url, params).then(res => {
			resolve(res.data);
		}).catch(err => {
			reject(err.data);
		})
	});
}

//对外接口
export function request ( {method, url, data} ) {
	if (method == 'get') {
		return get(url, data);
	} else if (method == 'post') {
		return post(url, data);
	}
}

export default {
	install ( Vue ) {
		Vue.prototype.$axios = axios;
		Vue.prototype.$request = function () {
			return request;
		}
	}
}
