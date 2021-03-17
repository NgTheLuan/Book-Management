import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'; 
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fauth: AngularFireAuth) { }

  getCurrentUser(){
				  return new Promise<any>((resolve, reject) => {
					  var user = this.fauth.auth.onAuthStateChanged(function(user){
						if (user) {
						  resolve(user);
						} else {				 
						  reject('No user logged in');
						}
					  })
				})
			}
}
