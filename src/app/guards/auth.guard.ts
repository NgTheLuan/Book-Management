import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Promise((resolve, reject) => {
      this.userService
        .getCurrentUser() //kiểm tra có user đăng đăng nhập hay không nếu có trả về true, ngược lại trả về false
        .then(
          (user) => {
            resolve(true);
          },
          (err) => {
            resolve(false);
            this.router.navigate(['/login']); //nếu chưa đăng nhập chuyển sang trang login
          }
        );
    });
    return true; //Đăng nhập thành công
  }
}
