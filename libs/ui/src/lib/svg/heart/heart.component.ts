import { AuthService } from "@mantis/core";
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, Input } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { BlogDataService } from "@mantis/core";
import { Observable, combineLatest, map, take, tap } from "rxjs";
import { HEART_ICON } from "./heart-black";
import { ThisReceiver } from "@angular/compiler";

@Component({
  selector: "ui-heart",
  templateUrl: "./heart.component.html",
})
export class HeartComponent implements OnInit {
  @Input()
  postId!: string;

  heartColor: "primary" | "accent" = 'primary'
  likes$: Observable<string[]> = (this.bd.getLikes(
    this.postId
  ) as unknown) as Observable<string[]>;
  user$ = this.us.user$;
  data$!: any;
  userId = "";
  likes: string[] = [];
  count = 0;

  constructor(
    private bd: BlogDataService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private us: AuthService
  ) {
    iconRegistry.addSvgIconLiteral(
      "heart",
      sanitizer.bypassSecurityTrustHtml(HEART_ICON)
    );
  }

  ngOnInit(): void {
    this._initLikes();
  }

  toggleLike() {
    if (this.heartColor === "accent") {
      this.heartColor = "primary";
    } else if (this.heartColor === "primary") {
      this.heartColor = "accent";
    } else {
      this.heartColor = "primary";
    }
  }

  private _initLikes() {
    this.data$ = combineLatest(this.likes$, this.user$)
      .pipe(take(1))
      .subscribe(([likes, user]) => {
        if (user) {
          this.userId = user.uid;
        }
        if (likes.length >= 0) {
          this.likes = likes;
          likes.length ? (this.count = likes.length) : (this.count = 0);
          console.log(this.count);
          if (user) {
            likes.includes(user.uid)
              ? (this.heartColor = "accent")
              : (this.heartColor = "primary");
          }
        }
      });
  }
}
