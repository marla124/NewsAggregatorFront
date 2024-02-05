/* import { Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/tokenStorage.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  template: ``,
  styles: [``]
})
export class LogoutComponent implements OnInit {

  ngOnInit(): void { }

  constructor (private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router, private tokenService:TokenStorageService){

      }

    logout(): void {
      const refreshToken = this.tokenService.getToken()?.refreshToken;
      if (refreshToken) {
        this.authService.logout(refreshToken);
      } else {
        console.log('No refresh token found');
      }
    }
  }
 */
