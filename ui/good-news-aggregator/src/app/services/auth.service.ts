import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Token } from '../models/token';
import { TokenStorageService } from './tokenStorage.service';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';
import { HttpHeaders } from '@angular/common/http';

const AUTH_API=`${environment.apiUrl}Token/Revoke`
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isSuccessful = false;
  private revokeUrl=`${environment.apiUrl}/api/Token/Revoke`;
  constructor(private apiService: ApiService,
    private tokenService:TokenStorageService,private router: Router) {}

    login(email: string, password: string) :Observable<Token>{
      return this.apiService.post('token', { email: email, password: password })
      .pipe(
        tap((token)=>
        this.authorize(token))
      );
    }
    logout(refreshToken: string): void {
      this.apiService.delete(this.revokeUrl, { refreshToken: refreshToken }).subscribe(
        () => {
          this.isSuccessful = false;
          this.tokenService.removeToken();
          console.log('Logout successful');
          this.router.navigateByUrl('/login');
        },
        error => {
          console.log(error);
        }
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

          this.isSuccessful=true;
          alert('Вход в систему прошел успешно!');
          this.router.navigateByUrl('/home');
      }

    }


}
