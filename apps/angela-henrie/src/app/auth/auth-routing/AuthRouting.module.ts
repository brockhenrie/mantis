import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';

const routes: Route[] = authRoutes;
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
