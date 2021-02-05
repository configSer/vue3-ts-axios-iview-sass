import { request } from './request'

// 列表查询接口
export const login = (parmas) => {
	return request({
		url: 'https://cdp.yiche.com/api/user/login',
		method: 'post',
		data: parmas
	})
}
