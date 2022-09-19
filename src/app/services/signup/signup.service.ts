import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/shared/models/account';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private listAccountTemp!: Account[] | null;

  constructor(private router: Router) {
    if (localStorage.getItem('listAccount') === null) {
      localStorage.setItem(
        `listAccount`,
        JSON.stringify([
          {
            email: 'admin@gmail.com',
            password: '123456',
          },
        ])
      );
    }
  }

  doSignupAccount(email: string, password: string) {
    if (localStorage.getItem('listAccount') !== null) {
      this.listAccountTemp = JSON.parse(localStorage.getItem('listAccount')!);
      if (this.listAccountTemp) {
        this.listAccountTemp.push({ email, password });
      }
      localStorage.setItem(`listAccount`, JSON.stringify(this.listAccountTemp));
    }
  }
}
