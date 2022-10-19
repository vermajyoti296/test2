import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiUrl } from './api-url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl=environment.baseUrl;
  constructor(private http:HttpClient) { }
  getRequest(endPoint : any) {
    return this.http.get(this.baseUrl + ApiUrl[endPoint])
  }
  postRequest(endPoint: any, reqBody: any) {
    return this.http.post(environment.baseUrl + ApiUrl[endPoint], reqBody)

  }
  deleteRequestWithID(endPoint: string, id: any) {
    return this.http.delete(this.baseUrl + ApiUrl[endPoint] + '/' + id);

  }
  getWithID(url: string, id: string) {
    return this.http.get<any>(
      `${this.baseUrl}${ApiUrl[url]}/${id}`
    );
  }

}
