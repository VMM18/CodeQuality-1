import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    loggedIn = new BehaviorSubject<boolean>(false);

    constructor(
        private router: Router
    ) {}

    login(accessToken: string) {
        localStorage.setItem('accessToken', accessToken);
        this.loggedIn.next(true);
    }
    clearSessionInfo() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('email');
        localStorage.removeItem('roleName');
        localStorage.removeItem('roleCode');
        sessionStorage.removeItem('accessTokenSession');
        sessionStorage.removeItem('loggedIn');
        this.loggedIn.next(false);
        // this.isSuperAdmin$.next(false);
        // this.email$.next(null);
        // this.userName$.next(null);
        // this.accessToken$.next(null);
        // this.userId$.next(-1);
      }
}