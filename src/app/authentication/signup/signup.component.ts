import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SignupService } from 'src/app/services/signup/signup.service';
import { ValidationUtil } from 'src/app/utilities/validation.util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  accountCreateForm!: FormGroup;
  isLogging: boolean = false;

  constructor(
    public formBulder: FormBuilder,
    private validate: ValidationUtil,
    private signupService: SignupService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.accountCreateForm = this.formBulder.group({
      txtFirstName: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(32)],
          asyncValidators: [],
          updateOn: 'change',
        },
      ],
      txtLastName: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(32)],
          asyncValidators: [],
          updateOn: 'change',
        },
      ],
      txtEmail: [
        '',
        {
          validators: [
            Validators.required,
            Validators.maxLength(50),
            Validators.pattern(
              '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}'
            ),
          ],
          asyncValidators: [],
          updateOn: 'change',
        },
      ],
      txtPassword: [
        '',
        {
          validators: [Validators.required, Validators.maxLength(32)],
          asyncValidators: [],
          updateOn: 'change',
        },
      ],
      txtPasswordConfirm: [
        '',
        {
          validators: [
            Validators.required,
            this.validate.checkMatchOther('txtPassword'),
          ],
          asyncValidators: [],
          updateOn: 'change',
        },
      ],
    });
  }

  doSignupAccount() {
    this.isLogging = true;
    setTimeout(() => {
      if (this.accountCreateForm.invalid) {
        this.accountCreateForm.get('txtFirstName')!.markAsTouched();
        this.accountCreateForm.get('txtLastName')!.markAsTouched();
        this.accountCreateForm.get('txtEmail')!.markAsTouched();
        this.accountCreateForm.get('txtPassword')!.markAsTouched();
        this.accountCreateForm.get('txtPasswordConfirm')!.markAsTouched();
        return;
      }
      this.signupService.doSignupAccount(
        this.accountCreateForm.controls['txtEmail'].value,
        this.accountCreateForm.controls['txtPassword'].value
      );
      this.authService.doLogin(
        this.accountCreateForm.controls['txtEmail'].value,
        this.accountCreateForm.controls['txtPassword'].value
      );
      this.accountCreateForm.reset();
      this.isLogging = false;
    }, 1000);
  }
}
