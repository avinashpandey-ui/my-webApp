import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ILoginResponse,
  ILoginUser,
} from '../interfaces/login-detail.interface';

@Injectable({
  providedIn: 'root',
})
export class AccountApiservice {
  constructor(private readonly httpClient: HttpClient) {}
  createUserAccount(user: any): Observable<any> {
    return this.httpClient.post<any>('/api/create', user);
    // return of(null);
  }

  login(userDetails: ILoginUser): Observable<ILoginResponse | null> {
    // return this.httpClient.post<ILoginResponse>(
    //   'https://reqres.in/api/login',
    //   JSON.stringify(userDetails)
    // );
    if (
      userDetails.password === 'avinash' &&
      userDetails.email === 'hod@gmail.com'
    ) {
      return of({ token: 'avinash', role: 'HOD' });
    } else if (
      userDetails.password === 'avinash' &&
      userDetails.email === 'staff@gmail.com'
    ) {
      return of({ token: 'avinash', role: 'Staff' });
    } else {
      return of(null);
    }
  }
}
