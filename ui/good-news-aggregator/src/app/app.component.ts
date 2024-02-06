import { TokenStorageService } from './services/tokenStorage.service';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NewsComponent } from "./news/news.component";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NewsComponent, RouterModule, MatToolbarModule, MatButtonModule, FormsModule, HttpClientModule]
})

export class AppComponent {
  constructor(public authService: AuthService,public tokenStorage:TokenStorageService) { }

}

