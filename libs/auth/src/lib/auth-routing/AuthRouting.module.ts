import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthShellComponent } from '../auth.component';
import { LoginComponent, SignupComponent } from '@mantis/ui';


const routes: Route[] = [
  {
    path: 'auth',
    component: AuthShellComponent,
    data: {animation:'isLeft'},
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
