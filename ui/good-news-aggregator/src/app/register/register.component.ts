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
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  register() {
    if (this.registerForm.valid) {
      const { email, password, passwordConfirmation } = this.registerForm.value;

      if (password !== passwordConfirmation) {
        console.error('Пароли не совпадают');
        return;
      }

      this.authService.register(email, password, passwordConfirmation).subscribe({
        next: (response) => {
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
