import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { News } from '../models/news';
import { Observable, of, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private apiService: ApiService){

  }

  getNews(): Observable<News[]|null>{
    return this.apiService.get('News').pipe();
  }

  getNewsById(id:string): Observable<News | null>{
    return this.apiService.get(`News/${id}`).pipe();

  }

}
