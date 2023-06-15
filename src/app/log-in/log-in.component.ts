import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { SpinnerButtonComponent } from '../common/components/spinner-button/spinner-button.component';
import { AuthService } from '../common/services/auth/auth.service';

@Component({
  selector: 'bat-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public email: string | undefined;
  public password: string | undefined;

  @ViewChild("signInButton", { static: false })
  private signInButton: SpinnerButtonComponent | undefined;

  constructor(private authService: AuthService, private router: Router) { }

  onSignIn(event: Event, signInForm: NgForm) {
    event.preventDefault();

    if (signInForm.invalid) {
      this.setFormDirty(signInForm);
      return;
    }

    this.signInButton?.showSpinner();

    if (this.email && this.password) {
      this.authService.authenticate(this.email, this.password)
        .subscribe(authData => {
          if (authData.canAuthenticate) {
            this.router.navigate([`user-page/${authData.userId}`]);
          }
          else {
            console.log('Error');
          }
        })
    }
  }

  setFormDirty(signInForm: NgForm): void {
    Object.keys(signInForm.controls).forEach(key => {
      signInForm.controls[key].markAsDirty();
    });
  }
}
