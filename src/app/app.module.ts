import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { AppComponent } from './app.component';  // Import the AppComponent
import { appRoutes } from './app.routes';  // Import routes from app.route.ts
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent// Declare AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HomeComponent // Use the routes from app.route.ts
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the AppComponent
})
export class AppModule { }
