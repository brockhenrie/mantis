import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthRoutingModule } from './auth-routing/AuthRouting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthShellComponent } from './auth.component';
import { UiModule } from '@mantis/ui';
import { CoreModule } from '@mantis/core';




@NgModule({
  declarations: [
    AuthShellComponent,
  ],

  imports: [
    CommonModule,
    CoreModule,
    UiModule,
    AuthRoutingModule,
    AngularFireAuthModule

  ],
  exports: [
    AuthRoutingModule,
    AngularFireAuthModule


  ]
})
export class AuthModule {

}
