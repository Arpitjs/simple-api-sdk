import axios, 
{ AxiosResponse, AxiosRequestConfig } from 'axios'

export default class MySDK {
    server: string
    routeName: string
    constructor(server: string, routeName: string) {
        this.server = server
        this.routeName = routeName
    }
    async getAll<ResponseType = AxiosResponse<any[]>>(config?: AxiosRequestConfig) : Promise<ResponseType>{
        const response: ResponseType = await axios.get(this.server + "/" + this.routeName, config)
        return response
    }
}
