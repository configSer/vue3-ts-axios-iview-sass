import { request } from './request'

// 列表查询接口
export const login = ( parmas ) => {
	return request({
		url: 'api/user/login',
		method: 'post',
		data: parmas
	})
}

export const carModelList = ( params ) => {
	return request({
		url: 'api/label/carModelList',
		method: 'post',
		data: params
	})
}
