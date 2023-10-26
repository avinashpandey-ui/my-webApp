import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ILoginResponse } from '../shared/interfaces/login-detail.interface';
import { UserApiService } from '../shared/services/user-api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateAccountModalComponent } from '../create-account/create-account-modal.component';
import { filter, switchMap } from 'rxjs';
import { AccountApiservice } from '../shared/services/account-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  createAccount = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(
    public dialog: MatDialog,
    private readonly accountApiService: AccountApiservice,
    private readonly router: Router
  ) {}

  openCreateAccountModal(): void {
    const dialogRef = this.dialog.open(CreateAccountModalComponent, {
      data: {},
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((userDetailsPayload) =>
          this.accountApiService.createUserAccount(userDetailsPayload)
        )
      )
      .subscribe(() => {
        alert(`Your account Created`);
      });
  }

  loginUser() {
    const userDetails = {
      email: this.getEmailControl().value,
      password: this.getPasswordControl().value,
    };
    this.accountApiService.login(userDetails).subscribe((response) => {
      if (response) {
        localStorage.setItem('access_token', response?.token);
        localStorage.setItem('role', response?.role);
        this.router.navigate(['books-adda']);
      }
    });
  }

  getEmailControl(): AbstractControl {
    return this.createAccount.get('email') as AbstractControl;
  }

  getPasswordControl(): AbstractControl {
    return this.createAccount.get('password') as AbstractControl;
  }
}
