import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  counter = 20;
  
  increment() {
    debugger
    this.counter++;
  }
  str = 'Login works!dsdsd';
}
