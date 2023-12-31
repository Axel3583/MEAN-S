import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { CoreModule } from '../core/core.module';
import { UserService } from './service/user.service';
import { RegisterComponent } from './component/register/register.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule
  ],
  providers: [UserService]
})
export class AuthModule { }
