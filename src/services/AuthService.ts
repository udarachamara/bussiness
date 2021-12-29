import { Service } from "./Service"

class AuthService extends Service {
    public getToken = async (payload: any) => {
        let data =  await this.createRequest('user/auth', {
            "email": payload.userName,
            "password" : payload.password,
        }, 'post', false)

        if (data) {
            localStorage.setItem('_token', data.access_token)
            return data;
        }
    }
}


export { AuthService }