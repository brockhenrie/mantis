import { Route } from "@angular/router";
import { AuthShellComponent } from "../auth.component";
import { LoginComponent, SignupComponent } from "@mantis/ui";



export const authRoutes: Route[] = [
  {
    path: 'auth',
    component: AuthShellComponent,
    data: {animtion: 'right'},
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },

];
