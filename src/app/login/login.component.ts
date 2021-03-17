import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MustMatch } from '../models/CustomerValidator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authService: any;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    public toast: ToastrService
  ) {}
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {}

  loginWithGoogle() {
    this.auth
      .signinGmail()
      .then((res) => {
        this.router.navigate(['/admin']);
        // location.href = '/home';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loginWithFirebase() {
    // alert("Chào FB");
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    this.auth.loginFirebase(email, password).then((res) => {
      console.log('Đăng Nhập Thành Công !');
      location.href = '/admin';
    });
    this.toast.success('Login With Success FireBase !', 'Nonfication');
  }
}
