import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharingService {
  //Khi login xong gọi đối tượng BehaviorSubject để bắt sự kiện, và những đối tượng subcribe sẽ nhận được
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);
  constructor() {}
}
