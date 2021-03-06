import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './routing/blog-routing.module';
import { BlogListPageComponent } from './pages/blog-list-page/blog-list-page.component';
import { BlogShellComponent } from './blog-shell/blog-shell.component';
import { UiModule } from '@mantis/ui';
import {  CoreModule } from '@mantis/core';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
        UiModule,
        CoreModule,
    ],
    declarations: [
      BlogListPageComponent,
      BlogShellComponent
    ],
    providers:[

    ]
})
export class BlogModule {}
