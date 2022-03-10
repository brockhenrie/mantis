import { AuthRoutingModule } from './AuthRouting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialsModule } from '../materials.module';




@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MaterialsModule
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    SignupComponent,

  ],
})
export class AuthModule {

}
