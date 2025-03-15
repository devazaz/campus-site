import { Component } from '@angular/core';
import { InputComponent } from '../common/input/input.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [InputComponent,RouterOutlet,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = 'test@gmail.com';
  password: string = '12345678';

  onInputChange(field: string, value: string) {
    switch (field) {
      case 'email':
        this.email = value;
        break;
      case 'email':
        this.password = value;
        break;
    }
    console.log(`Updated ${field}:`, value);
  }
}
