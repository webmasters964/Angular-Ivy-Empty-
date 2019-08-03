import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "auth", component: AuthComponent },
  { path: "register", component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
export const routedComponents = [
  AuthComponent, LoginComponent, RegisterComponent, ForgotComponent
]
