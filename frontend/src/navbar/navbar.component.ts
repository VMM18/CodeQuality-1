import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router:Router) {}
  accessToken: any;
  loggedIn!: boolean;
  signOut() {
    // localStorage.removeItem('access')
    this.router.navigate(['/login']);
  }
}
