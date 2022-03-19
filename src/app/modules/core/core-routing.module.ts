import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullScreenComponent } from './components/layouts/full-screen/full-screen.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: FullScreenComponent,
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
      },
      {
        path: 'signup',
        pathMatch: 'full',
        component: SignupComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
