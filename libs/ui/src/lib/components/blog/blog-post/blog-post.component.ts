import { BlogDataService, BlogPost, EventBusService } from '@mantis/core';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'ui-blog-post',
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent implements OnInit {
  post$:Observable<BlogPost> = new Observable<BlogPost>();
  constructor(
    private eb: EventBusService,
    private aRoute: ActivatedRoute,
    private bd:BlogDataService) { }


  ngOnInit(): void {
  this.aRoute.params.subscribe(params=>{
    console.log(params['id'])
    this.post$ = this.bd.getPost(params['id']);
  })
  }

}

