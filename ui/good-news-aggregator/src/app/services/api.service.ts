import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import queryString from 'query-string';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

  }
  private getUrl(url:string): string{
    return environment.apiUrl+url;
  }
  get(url:string, data: object={}):Observable<any|null>{
    if(Object.keys(data).length>0){
      url+='?'+queryString.stringify(data);
    }
    return this.http.get(this.getUrl(url));
  }

  post(url:string, data: object, options={}): Observable<any>{
    return this.http.post(this.getUrl(url), data,options);
  }
  delete(url:string, data: object): Observable<any>{
    if(Object.keys(data).length>0){
      url+='?'+queryString.stringify(data);
    }
    return this.http.delete(this.getUrl(url), data);
  }
  patch(url:string, data: object, options={}): Observable<any>{
    if(Object.keys(data).length>0){
      url+='?'+queryString.stringify(data);
    }
    return this.http.patch(this.getUrl(url), data, options);
  }

  request(method: string, url:string,data:object,options: object=[]): Observable<any>{
    const request=new HttpRequest(method,this.getUrl(url),data,options);
    return this.http.request(request);
  }

}
