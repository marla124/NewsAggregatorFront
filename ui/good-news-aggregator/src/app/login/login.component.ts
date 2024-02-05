import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatFormFieldModule} from'@angular/material/form-field';

import { MatInputModule} from'@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon'
import { MatButton, MatButtonModule } from '@angular/material/button';
import { TokenStorageService } from '../services/tokenStorage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  ngOnInit(): void { }

  constructor (private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router, private tokenService:TokenStorageService){
      this.loginForm=this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

    login(): void{
      const value=this.loginForm.value;

      if(value.email&&value.password){
        this.authService.login(value.email, value.password)
        .subscribe((tokens)=>{
          console.log(tokens);
          this.router.navigateByUrl('/');
          return null;
        })
      }
  }

}
