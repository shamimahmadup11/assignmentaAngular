import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'test@example.com', phone: '1234567890', password: 'password123' },
    // Add more mock users as needed
  ];

  constructor() {}

  validateUser(emailOrPhone: string, password: string): boolean {
    return this.users.some(user =>
      (user.email === emailOrPhone || user.phone === emailOrPhone) &&
      user.password === password
    );
  }
}
