import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { blogRoutes } from './blog.routes';



@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
          ...blogRoutes
        ])
    ],
    exports: [
      RouterModule
    ]
})
export class BlogRoutingModule {}
