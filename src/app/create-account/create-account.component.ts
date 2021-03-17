import { AccountService } from './../services/account.service';
import { UserService } from './../services/user.service';
import { Account } from './../models/account';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../models/CustomerValidator';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  auth: any;

  constructor(
    private fb: FormBuilder,
    private accService: AccountService,
    private userService: UserService,
    private toast: ToastrService
  ) {}
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        firstname: ['', Validators.required], //[giá trị mặc định của form, ràng buộc]
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmpassword: ['', Validators.required],
      },
      {
        validator: MustMatch('password', 'confirmpassword'), //hàm tự viết SV có thể bỏ qua không kiểm tra cũng được
      }
    );
  }

  onSubmit() {
    let acc = new Account();
    acc.firstname = this.registerForm.controls['firstname'].value;
    acc.lastname = this.registerForm.controls['lastname'].value;
    acc.email = this.registerForm.controls['email'].value;
    acc.password = this.registerForm.controls['password'].value;
    console.log(acc);
    //Đẩy dữ liệu -> Node Server
    this.accService.insertAccount(acc).subscribe((data) => console.log(data));
    //Đẩy dữ liệu -> FireBase
    this.auth.signup(acc.email, acc.password).then((res) => {
      console.log(res);
    });
  }

  createAccount() {
    let acc = new Account();
    acc.firstname = this.registerForm.controls['firstname'].value;
    acc.lastname = this.registerForm.controls['lastname'].value;
    acc.email = this.registerForm.controls['email'].value;
    acc.password = this.registerForm.controls['password'].value;
    this.userService.signup(acc.email, acc.password).then((data) => {
      console.log(data);
      this.toast.success('Create Account Success !', 'Notification');
    });
  }
}
