import { Routes } from "@angular/router";
import { BlogPostComponent } from "@mantis/ui";
import { BlogListPageComponent } from "../pages/blog-list-page/blog-list-page.component";

export const blogRoutes: Routes = [
  { path:'', redirectTo:'list', pathMatch: 'full'},
  {path:'list', component:BlogListPageComponent},
  {path:'post/:id', component:BlogPostComponent}
]
