import { Component } from '@angular/core';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
})
export class LoginSignupComponent {
  action: any = 'Login';

  setAction(newAction: any): void {
    this.action = newAction;
  }
}
