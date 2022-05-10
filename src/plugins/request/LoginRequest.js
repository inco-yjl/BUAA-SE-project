import request from '@/plugins/axios/axios.js'

export class LoginRequest {
    /**
     * @description: 登录
     */
    static async login(url, params) {
        return await request({
            url: url,
            method: 'post',
            data: params
        })
    }
}
