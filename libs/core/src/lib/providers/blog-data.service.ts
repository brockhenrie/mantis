import { take } from 'rxjs/operators';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/compat/firestore";
import { AngularFireStorage } from "@angular/fire/compat/storage";
import { angelaHenrieEnvironment } from "@mantis/env";
import { Observable, shareReplay, catchError, of, map } from "rxjs";
import { BlogPost } from "../models/blogs/blog-post.model";

@Injectable()
export class BlogDataService {
  private blogCollection: AngularFirestoreCollection<
    BlogPost
  > = this.firestore.collection<BlogPost>("blog");

  private allBlogPosts$: Observable<
    BlogPost[]
  > = this.blogCollection.snapshotChanges().pipe(
    map((posts) => {
      return posts.map((snap) => {
        return {
          ...(snap.payload.doc.data() as BlogPost),
          id: snap.payload.doc.id,
        };
      });
    }),
    catchError((err) => {
      return blogError(err);
    }),
    shareReplay(1)
  );

  constructor(private firestore: AngularFirestore) {}

  createPost(post: BlogPost) {
    this.blogCollection
      .add(post)
      .then((post) => console.log(post))
      .catch((err) => console.log(err));
  }

  getBlogPosts(): Observable<BlogPost[]> {
    return this.allBlogPosts$;
  }

  getPost(id: string): Observable<BlogPost> {
    return this.firestore
      .doc<BlogPost>(`blog/${id}`)
      .snapshotChanges()
      .pipe(
        map((snap) => {
          return {
            ...(snap.payload.data() as BlogPost),
            id: snap.payload.id,
          };
        }),
        shareReplay(1),
        catchError((err) => {
          const errPost = postError(err);
          return errPost;
        })
      );
  }

  getLikes(id: string) {
    return this.firestore.doc<string[]>(id)
      .valueChanges();
  }

  togglePostLike(postId:string,id:string) {
    let users: string[] =[]
    this.firestore.doc<string[]>(`postLikes/${postId}`).get().subscribe(snap=>{
      users = snap.data() as string[];
    },(err)=>{
        console.log(err)
    },
    ()=>{
      console.log('likes received')
    });
    if(users.includes(id)){
      users = users.filter(uid=>uid !== id );
    } else {
      users.push(id);
    }
    return this.firestore.doc<string[]>(`postLikes/${postId}`).set(users).catch(err=>console.log(err));
  }
}

function blogError(err: Error) {
  let stack;
  if (angelaHenrieEnvironment.debug.stack) {
    stack = err.stack;
  }
  const ErrorPost: BlogPost = {
    title: err.name,
    caption: err.message,
    content: stack as string,
    id: "Error",
    date: new Date().toLocaleDateString(),
    image: "",
    likes: "",
    desc: "undefined",
    category: "undefined",
    subcategory: "undefined",
    name: "undefined",
    privacy: "undefined",
  };
  console.log(err);
  return of([ErrorPost]);
}
function postError(err: Error): Observable<BlogPost> {
  let stack;
  if (angelaHenrieEnvironment.debug.stack) {
    stack = err.stack;
  }
  const ErrorPost: BlogPost = {
    title: err.name,
    caption: err.message,
    content: stack as string,
    id: "Error",
    date: new Date().toLocaleDateString(),
    image: "",
    likes: "",
    desc: "undefined",
    category: "undefined",
    subcategory: "undefined",
    name: "undefined",
    privacy: "undefined",
  };
  console.log(err);
  return of(ErrorPost);
}
