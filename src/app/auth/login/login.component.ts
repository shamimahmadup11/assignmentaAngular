import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Import your auth service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      emailOrPhone: ['', [Validators.required, Validators.email]], // or use custom validation for phone
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { emailOrPhone, password } = this.loginForm.value;
      const isValid = this.authService.validateUser(emailOrPhone, password);

      if (isValid) {
        // Navigate to success modal or dashboard
        console.log('Login successful!');
      } else {
        this.errorMessage = 'Invalid email/phone number or password';
      }
    }
  }
}
