import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Account } from 'src/app/shared/models/account';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  listAccount!: Account[];
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private router: Router) {
    if (!localStorage.getItem('listAccount')) {
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

  public doLogin(email: string, password: string) {
    if (localStorage.getItem('listAccount') !== null) {
      this.listAccount = JSON.parse(localStorage.getItem('listAccount')!);
    }

    if (
      this.listAccount.find(
        (account) => account.email === email && account.password === password
      )
    ) {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  public doLogout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
