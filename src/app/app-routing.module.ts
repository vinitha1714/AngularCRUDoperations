import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'result', component: ResultComponent },
  { path: 'register', component: RegisterCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
