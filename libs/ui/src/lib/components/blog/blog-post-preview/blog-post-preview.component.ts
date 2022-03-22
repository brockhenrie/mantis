import { HEART_ICON } from '../../../svg/heart/heart-black';
import { BlogPost, EventBusService } from '@mantis/core';
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ui-blog-post-preview',
  templateUrl: './blog-post-preview.component.html',

})
export class BlogPostPreviewComponent implements OnInit {
  @Input() post!:BlogPost;
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private eb: EventBusService,
    private router: Router) { }


  ngOnInit(): void {
    this.iconRegistry.addSvgIconLiteral('heart', this.sanitizer.bypassSecurityTrustHtml(HEART_ICON));
  }
  navigate(){
    console.log(this.post.id)
    this.router.navigate(['/blog','post', this.post.id])

  }

}

