import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NewsComponent } from "./news/news.component";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NewsComponent, RouterModule, MatToolbarModule, MatButtonModule, FormsModule,HttpClientModule]
})
export class AppComponent {
  title :string = "Good News Aggregator";
}
