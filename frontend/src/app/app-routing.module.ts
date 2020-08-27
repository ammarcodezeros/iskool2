import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
