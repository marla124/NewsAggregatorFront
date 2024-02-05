import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService){

  }
  getUsers(): Observable<User[]|null>{
    return this.apiService.get('User').pipe();
  }

  getUserById(id:string): Observable<User| null>{
    return this.apiService.get(`User/${id}`).pipe();

  }

}
