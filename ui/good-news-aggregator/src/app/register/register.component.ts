import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatFormFieldModule} from'@angular/material/form-field';

import { MatInputModule} from'@angular/material/input';
import {MatIcon, MatIconModule} from '@angular/material/icon'
import { MatButton, MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
register() {
throw new Error('Method not implemented.');
}

  registerForm: FormGroup;
  ngOnInit(): void { }

  constructor (private formBuilder: FormBuilder,
    /* private authService: AuthService, */
    private router: Router){
      this.registerForm=this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        passwordConfirmatio: ['', Validators.required]

      })
    }

}
