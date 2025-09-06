import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  step = 1;
  userIdForm: FormGroup;
  otpForm: FormGroup;
  submittedUserId = false;
  submittedOtp = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.userIdForm = this.fb.group({
      userId: ['', [Validators.required, Validators.email]]
    });
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]]
    });
  }

  onGenerateOtp() {
    this.submittedUserId = true;
    if (this.userIdForm.valid) {
      // Call backend to send OTP here
       const payload = { userId: this.userIdForm.value.userId };
      this.http.post('http://localhost:8080/v1/user/generate_otp', payload).subscribe({
        next: () => {
          this.step = 2;
        },
        error: err => {
          // Handle error (show message, etc.)
          console.log('Error generating OTP', err);
        }
      });
      this.step = 2;
    }
  }

  onLogin() {
    this.submittedOtp = true;
    if (this.otpForm.valid) {
      // Verify OTP and proceed to next step
      // Example: this.router.navigate(['/home']);
    }
  }
}