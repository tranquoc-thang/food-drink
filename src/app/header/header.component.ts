import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public isLogging: boolean = false;
  public url: any;
  public isLogged$: Observable<boolean> = new Observable<boolean>();
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.isLogged$ = this.authService.isAuthenticated();
  }

  doLogout() {
    this.isLogging = true;
    setTimeout(() => {
      this.authService.doLogout();
      this.isLogging = false;
    }, 1000);
  }
}
