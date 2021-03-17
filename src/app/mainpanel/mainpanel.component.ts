import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../services/auth.service';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-mainpanel',
  templateUrl: './mainpanel.component.html',
  styleUrls: ['./mainpanel.component.css'],
})
export class MainpanelComponent implements OnInit {
  displayName: string = '';
  constructor(
    private user: UserService,
    private fauth: AuthService,
    private sharingService: SharingService
  ) {
    this.sharingService.isUserLoggedIn.subscribe((value) => {
      if (value) {
        this.user
          .getCurrentUser()
          .then((user) => {
            console.log(user);
            this.displayName =
              user.displayName != null ? user.displayName : user.email;
            console.log(this.displayName);
          })
          .catch((e) => console.log('Lỗi getCurrentUser'));
      } else {
        this.displayName = '';
      }
    });

    this.user
      .getCurrentUser()
      .then((user) => {
        this.displayName =
          user.displayName != null ? user.displayName : user.email;
        console.log(this.displayName);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  ngOnInit(): void {}

  Logout() {
    this.fauth.Logout().then((res) => {
      location.href = '/login';
    });
  }
}
