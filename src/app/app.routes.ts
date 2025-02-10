import { Routes } from '@angular/router';
import { AppComponent } from './app.component';  // Import the AppComponent
import { HomeComponent } from './home/home.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './product/product.component';

export const appRoutes: Routes = [

  { path: 'user', component: UserComponent} , //root path
  { path: 'home', component: HomeComponent},
  { path: 'product', component:ProductComponent}
];
