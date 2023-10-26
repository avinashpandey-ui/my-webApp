import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormControlName,
  FormGroup,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-account-modal',
  templateUrl: './create-account-modal.component.html',
  styleUrls: ['./create-account-modal.component.scss'],
})
export class CreateAccountModalComponent {
  dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  months = [
    {
      value: 'jan',
      viewValue: 'January',
    },
    {
      value: 'feb',
      viewValue: 'February',
    },
    {
      value: 'mar',
      viewValue: 'March',
    },
    {
      value: 'april',
      viewValue: 'April',
    },
    {
      value: 'may',
      viewValue: 'May',
    },
  ];
  years = [
    1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991,
    1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
  ];
  createAccountDetail = new FormGroup({
    fName: new FormControl(''),
    sName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    lName: new FormControl(''),
    date: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
    gender: new FormControl(''),
  });
  constructor(
    public dialogRef: MatDialogRef<CreateAccountModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: void
  ) {}

  closeCreateAccountModal(): void {
    this.dialogRef.close();
  }

  createAccount() {
    const userDetails = {
      fName: this.getNameControl().value,
      lName: this.getLNameControl().value,
      date: this.getDateControl().value,
      month: this.getMonthControl().value,
      year: this.getYearControl().value,
      sName: this.getSurNameControl().value,
      email: this.getEmailControl().value,
      password: this.getPassword().value,
      gender: this.getGender().value,
    };
    this.dialogRef.close(userDetails);
  }
  getNameControl(): AbstractControl {
    return this.createAccountDetail.get('fName') as AbstractControl;
  }

  getLNameControl(): AbstractControl {
    return this.createAccountDetail.get('lName') as AbstractControl;
  }

  getDateControl(): AbstractControl {
    return this.createAccountDetail.get('date') as AbstractControl;
  }

  getMonthControl(): AbstractControl {
    return this.createAccountDetail.get('month') as AbstractControl;
  }

  getYearControl(): AbstractControl {
    return this.createAccountDetail.get('year') as AbstractControl;
  }

  getSurNameControl(): AbstractControl {
    return this.createAccountDetail.get('sName') as AbstractControl;
  }
  getEmailControl(): AbstractControl {
    return this.createAccountDetail.get('email') as AbstractControl;
  }
  getPassword(): AbstractControl {
    return this.createAccountDetail.get('password') as AbstractControl;
  }
  getGender(): AbstractControl {
    return this.createAccountDetail.get('gender') as AbstractControl;
  }
}
