/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogDataService } from '@mantis/core';
import { Observable } from 'rxjs';
import { HEART_ICON } from './heart-black';

@Component({
  selector: 'ui-heart',
  templateUrl: './heart.component.html',
})
export class HeartComponent implements OnInit {

  heartColor!: 'primary' | 'accent';
  likes$!:Observable<string[]>;

  @Input()
  postId!:string;
  constructor(
    private bd:BlogDataService,
    iconRegistry: MatIconRegistry,
     sanitizer: DomSanitizer
    ) {
      iconRegistry.addSvgIconLiteral('heart', sanitizer.bypassSecurityTrustHtml(HEART_ICON));
     }

  ngOnInit(): void {
    this._initLikes();
  }

  toggleLike(){
    if(this.heartColor === 'accent') this.heartColor = 'primary';
    if(this.heartColor === 'primary') this.heartColor = 'accent';
    if (!this.heartColor) this.heartColor = 'primary';
  }

  private _initLikes(){
    this.likes$ = this.bd.getLikes(this.postId) as unknown as Observable<string[]>;
  }

}
