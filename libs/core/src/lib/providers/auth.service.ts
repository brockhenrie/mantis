/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/contextual-lifecycle */
import { angelaHenrieEnvironment } from "@mantis/env";
import { Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivate, Router } from "@angular/router";
import firebase from "firebase/compat/app";
import { EMPTY, Observable } from "rxjs";
import { catchError, map, shareReplay, tap } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: "root",
})
export class AuthService implements OnInit, CanActivate {
  authUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
  apiKey = angelaHenrieEnvironment.firebase.apiKey;
  userId = "";
  private authState$ = this.afAuth.authState.pipe(
    tap((state) => {
      state ? (this.userId = state.uid) : (this.userId = "");
    }),
    shareReplay(1)
  );
  private idToken$ = this.afAuth.idToken;

  user$ = this.afAuth.user.pipe(
    catchError((err) => {
      console.log("Unable to login: " + err);
      return EMPTY;
    }),
    shareReplay(1, 50000)
  );

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit(): void {}

  checkLogin(): Observable<boolean> {
    return this.authState$.pipe(map((user) => !!user));
  }
  checkLogout(): Observable<boolean> {
    return this.authState$.pipe(map((loggedIn) => !loggedIn));
  }
  getPictureUrl(): Observable<string> {
    return this.authState$.pipe(
      map((user) => (user && user.photoURL ? user.photoURL : ""))
    );
  }
  getToken(): Observable<string> {
    return this.idToken$.pipe(map((token) => (token ? token : "")));
  }

  signupEmail(email: string, pass: string) {
    this.afAuth.createUserWithEmailAndPassword(email, pass).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      }
      if (errorCode == "auth/operation-not-allowed") {
        alert("Not Allowed");
      }
      if (errorCode == "auth/invalid-email") {
        alert("Email is invalid");
      }
      if (errorCode == "auth/email-already-in-use") {
        alert("Email already exists");
      } else {
        alert(errorMessage);
      }
      console.log(error);

      if (!errorMessage) {
        this.signInEmail(email, pass);
      }
    });
  }

  signInGoogle() {
    let er = false;
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigate(["/home"]);
      })
      .catch((error) => {
        er = true;
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/popup-blocked") {
          alert("Popup Blocked ");
        } else if (errorCode === "auth/popup-closed-by-user") {
          alert("No Login Detected!");
        } else {
          alert(errorMessage);
        }
      })
  }

  signInEmail(email: string, pass: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        this.router.navigate(["/home"]);
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
          alert("Invalid Email ");
        } else if (errorCode === "auth/user-disabled") {
          alert("Account has been Disabled! ");
        } else if (errorCode === "auth/user-not-found") {
          alert("User not Found! ");
        } else if (errorCode === "auth/wrong-password") {
          alert("Wrong Password ");
        } else {
          this.router.navigate(["/auth/login"]);
        }
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(["/home"]);
    });
  }

  canActivate(): Observable<boolean> {
    return this.authState$.pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate([""]);
          return false;
        }
      })
    );
  }
}
