import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  accountInfo = {
    email: '',
    password: '',
  };
  isAccountExist: boolean = true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  doLogin() {
    this.isAccountExist = this.authService.doLogin(
      this.accountInfo.email,
      this.accountInfo.password
    );
    console.log(this.isAccountExist);
  }
}
