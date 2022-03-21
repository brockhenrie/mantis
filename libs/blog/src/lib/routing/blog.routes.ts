import { Routes } from "@angular/router";
import { BlogListPageComponent } from "../pages/blog-list-page/blog-list-page.component";

export const blogRoutes: Routes = [
  { path:'', redirectTo:'list', pathMatch: 'full'},
  {path:'list', component:BlogListPageComponent}
]
