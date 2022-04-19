import axios, { AxiosResponse } from "axios";
import { Product } from "./Product";

export default class SimpleAPISDK {
  url: string;

  constructor(server: string, routeName: string) {
    this.url = server + "/" + routeName;
  }

  async getAll<ResponseType extends AxiosResponse>(): Promise<ResponseType> {
    const response: ResponseType = await axios.get(this.url);
    return response;
  }

  async post<ResponseType extends AxiosResponse>(
    data: Product
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.post(this.url, data);
    return response;
  }

  async patch<ResponseType extends AxiosResponse>(
    id: number | string,
    data: Product
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.put(this.url + `/${id}`, data);
    return response;
  }

  async delete<ResponseType extends AxiosResponse>(
    id: number | string
  ): Promise<ResponseType> {
    var response: ResponseType = await axios.delete(this.url + `/${id}`);
    return response;
  }
}
