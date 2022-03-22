/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogDataService } from '@mantis/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-list-page',
  templateUrl: './blog-list-page.component.html',

})
export class BlogListPageComponent implements OnInit {

  posts$!:Observable<BlogPost[]>;

  constructor( private bd:BlogDataService) { }

  ngOnInit(): void {
    this.posts$=this.bd.getBlogPosts();
  }



}
