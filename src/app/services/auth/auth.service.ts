import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from 'src/app/shared/models/account';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  listAccount!: Account[];
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private router: Router) {}

  public doLogin(email: string, password: string) {
    if (localStorage.getItem('listAccount')) {
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
    this.router.navigate(['/']);
  }

  public isAuthenticated(): Observable<boolean> {
    console.log('auth service isAuthenticated');
    return this.loggedIn.asObservable();
  }
}
