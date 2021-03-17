import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sharingService: any;
  toast: any;
  constructor(private fauth: AngularFireAuth, private router: Router) {}

  async signinGmail() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return await this.fauth.auth.signInWithPopup(provider).then((res) => {
      console.log('Login Success With Gmail');
      // this.router.navigate(['/home']);
    });
  }

  //Tương tự viết hàm signin với tài khoản firebase như sau:
  loginFirebase(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fauth.auth.signInWithEmailAndPassword(email, password).then(
        (res) => {
          resolve(res);
          // this.sharingService.isUserLoggedIn.next(true);
        },
        (err) => reject(err)
      );
    });
  }

  Logout() {
    return new Promise<any>((resolve, reject) => {
      if (this.fauth.auth.currentUser) {
        this.fauth.auth.signOut();
        resolve('log out');
      } else {
        reject();
      }
    });
  }
}
