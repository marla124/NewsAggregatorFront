import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Token } from '../models/token';
import { TokenStorageService } from './tokenStorage.service';
import { environment } from '../../environment/environment';
import { HttpHeaders } from '@angular/common/http';


const AUTH_API = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService,
    private tokenService:TokenStorageService) {}

    login(email: string, password: string) :Observable<Token>{
      return this.apiService.post('token', { email: email, password: password })
      .pipe(
        tap((token)=>
        this.authorize(token))
      );
    }

    refreshToken(): Observable<Token>{

      return this.apiService.post('token/refresh', {refreshToken: this.tokenService.getToken()?.refreshToken})
      .pipe(
        tap((token)=>this.authorize(token))
      );
    }
    private authorize(token:Token): void{
        if(token.jwtToken&&token.refreshToken){
          this.tokenService.setToken(token);
        }
    }


}
