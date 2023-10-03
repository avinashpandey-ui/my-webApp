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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showWrongPassswordError = false;

  loginDetail = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(
    private readonly userApiService: UserApiService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // this.getEmailControl()
    //   .valueChanges.pipe(debounceTime(300))
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
  }

  loginUser() {
    const userDetails = {
      email: this.getEmailControl().value,
      password: this.getPasswordControl().value,
    };
    this.userApiService
      .loginUser(userDetails)
      .subscribe((response: ILoginResponse | null) => {
        if (response) {
          this.showWrongPassswordError = false;
          localStorage.setItem('login_token', response.token);
          this.router.navigate(['books-adda']);
        } else {
          this.showWrongPassswordError = true;
          // alert('you entering wrong password/email');
        }
      });
    // this.userApiService.loginUser(userDetails).subscribe({
    //   next: (res: ILoginResponse) => {
    //     localStorage.setItem('login_token', res.token);
    //     this.router.navigate(['books-adda']);
    //   },
    //   error: () => (this.showWrongPassswordError = true),
    // });
  }

  getEmailControl(): AbstractControl {
    return this.loginDetail.get('email') as AbstractControl;
  }

  getPasswordControl(): AbstractControl {
    return this.loginDetail.get('password') as AbstractControl;
  }
}
