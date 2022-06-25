import axios from "axios";

type ResponseAuthAPIType = {
    errorText: string,
    info: string,
    yourBody: {
        success: boolean
    },
    yourQuery: {}

}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com'
})

export const RequestsAPI = {
    test(success: boolean) {
        return instance.post<ResponseAuthAPIType>(`/auth/test`, {success: success})
    }
}