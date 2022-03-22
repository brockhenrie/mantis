/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { angelaHenrieEnvironment } from '@mantis/env';
import { Observable, shareReplay, catchError, of, map } from 'rxjs';
import { BlogPost } from '../models/blogs/blog-post.model';

@Injectable()
export class BlogDataService {
    private allBlogPosts$: Observable<BlogPost[]> = this.firestore
        .collection<BlogPost>('blog')
        .snapshotChanges()
        .pipe(
            map((posts) => {
                return posts.map((post) => {
                    return {
                        ...post.payload.doc.data(),
                        id: post.payload.doc.id
                    };
                });
            }),
            shareReplay(1),
            catchError((err) => {
                return blogError(err);
            })
        );

    constructor(
        private firestore: AngularFirestore,
        private storage: AngularFireStorage
    ) {}

    getBlogPosts(): Observable<BlogPost[]> {
        return this.allBlogPosts$;
    }

    getPost(id: string) {
        return this.firestore
            .doc<BlogPost>(`blog/${id}`)
            .valueChanges()
            .pipe(
                catchError((err) => {
                    return postError(err);
                })
            ) as unknown as Observable<BlogPost>;
    }

    getLikes(id: string) {
        return this.firestore.collection('postLikes')
        .doc<string[]>(id)
        .valueChanges();
    }

    togglePostLike(id: string) {
        this.firestore.collection('postLikes');
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
        id: 'Error',
        date: new Date().toLocaleDateString(),
        image: '',
        likes: ''
    };
    console.log(err);
    return of([ErrorPost]);
}
function postError(err: Error) {
    let stack;
    if (angelaHenrieEnvironment.debug.stack) {
        stack = err.stack;
    }
    const ErrorPost: BlogPost = {
        title: err.name,
        caption: err.message,
        content: stack as string,
        id: 'Error',
        date: new Date().toLocaleDateString(),
        image: '',
        likes: ''
    };
    console.log(err);
    return of(ErrorPost) as unknown as Observable<BlogPost>;
}
