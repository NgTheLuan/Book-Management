import { Injectable } from '@angular/core';
// import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fauth: AngularFireAuth) {}
  
  signup(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.fauth.auth.createUserWithEmailAndPassword(email, password).then(
        (res) => {
          resolve(res);
        },
        (err) => reject(err)
      );
    });
  }
}
