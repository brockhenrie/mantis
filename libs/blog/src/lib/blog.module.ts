import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './routing/blog-routing.module';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogShellComponent } from './blog-shell/blog-shell.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule
    ],
    declarations: [
      BlogListPageComponent,
      BlogShellComponent
    ]
})
export class BlogModule {}
