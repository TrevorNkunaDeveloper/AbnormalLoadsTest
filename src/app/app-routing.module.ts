import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { RegistrationcomponentComponent } from './registrationcomponent/registrationcomponent.component';

const routes: Routes = [
  {path: 'login', component: LogincomponentComponent},
  {path: 'home', component: HomecomponentComponent},
  {path: 'registration', component: RegistrationcomponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
