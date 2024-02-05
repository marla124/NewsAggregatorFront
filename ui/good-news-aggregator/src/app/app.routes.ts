import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomePageComponent } from './home page/home-page.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
/* import { LogoutComponent } from './logout/logout.component'; */

export const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full' },
  {path: 'home', component: HomePageComponent},
  {path: 'news/:id', component: NewsDetailsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path: 'register', component:RegisterComponent}

];
