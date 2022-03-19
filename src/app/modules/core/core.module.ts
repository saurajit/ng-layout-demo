import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { WithSidebarComponent } from './components/layouts/with-sidebar/with-sidebar.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FullScreenComponent } from './components/layouts/full-screen/full-screen.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  declarations: [WithSidebarComponent, HeaderComponent, FooterComponent, LoginComponent, FullScreenComponent, SignupComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
