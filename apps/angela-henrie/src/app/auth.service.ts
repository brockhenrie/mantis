/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { angelaHenrieEnvironment } from './../../../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

interface ActiveUser {
  userId?: string | null;
  photoUrl?: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit, CanActivate {
    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

    apiKey = angelaHenrieEnvironment.firebase.apiKey;

   isLoggedIn$ = new BehaviorSubject<boolean>(false);

   user$ = this.afAuth.user.pipe(
    catchError((err)=>{
      console.log('Unable to login: ' + err);
      return EMPTY
    }),
    tap(console.log),

    shareReplay(1,50000)
    );



  constructor(
    public afAuth: AngularFireAuth,
     private router: Router) {}

  ngOnInit(): void {
  }

    signupEmail(email:string, pass: string){
    this.afAuth.createUserWithEmailAndPassword(email, pass)
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      }if (errorCode == 'auth/operation-not-allowed') {
        alert('Not Allowed');

      }if (errorCode == 'auth/invalid-email') {
        alert('Email is invalid');
      }if (errorCode == 'auth/email-already-in-use') {
        alert('Email already exists');
      } else {
        alert(errorMessage);
      }
      console.log(error);

      if(!errorMessage){
        this.signInEmail(email,pass);
      }

    });

    }

    signInGoogle() {
      let er = false;
      this.afAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
      .catch(error=> {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/popup-blocked'){
          alert('Popup Blocked ');
          this.isLoggedIn$.next(false);

          er = true;
        }else if (errorCode === 'auth/popup-closed-by-user'){
          alert('No Login Detected!');
          this.isLoggedIn$.next(false);
        }else {
          alert(errorMessage);
          this.isLoggedIn$.next(false);
        }
        ()=> {
          this.router.navigate(['/Home']);

        }

      });
      this.isLoggedIn$.next(true);
    }

    signInEmail(email:string, pass:string){
      this.afAuth.signInWithEmailAndPassword(email,pass)
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/invalid-email'){
          alert('Invalid Email ' );
          this.isLoggedIn$.next(false);
        }else if (errorCode === 'auth/user-disabled'){
          alert('Account has been Disabled! ');
          this.isLoggedIn$.next(false);
        }else if (errorCode === 'auth/user-not-found'){
          alert('User not Found! ');
          this.isLoggedIn$.next(false);
        }else if (errorCode === 'auth/wrong-password'){
          alert('Wrong Password ');
          this.isLoggedIn$.next(false);
        }else {
          this.router.navigate(['/home']);

        }
      });
      this.isLoggedIn$.next(true);

    }

    logout() {
      this.afAuth.signOut();
      this.afAuth.signInAnonymously()
      .catch((error)=> {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/operation-not-allowed') {
          alert('You must enable Anonymous auth in the Firebase Console.');
        } else {
          console.error(error);
        }
      });
      this.isLoggedIn$.next(false);
    }

    canActivate(): Observable<boolean> {
        return this.afAuth.authState.pipe(
          map(user=> {
            if(user){
              return true;
            } else{
              this.router.navigate(['']);
              return false;
            }
          })
        )

    }


}
