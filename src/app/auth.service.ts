// src/app/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '12345678') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
