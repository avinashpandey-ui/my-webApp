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
export class UserApiService {
  constructor(private readonly httpClient: HttpClient) {}

  loginUser(userDetails: ILoginUser): Observable<ILoginResponse | null> {
    // return this.httpClient.post<ILoginResponse>(
    //   'https://reqres.in/api/login',
    //   JSON.stringify(userDetails)
    // );
    if (userDetails.password === 'avinash') {
      return of({ token: 'avinash' });
    } else {
      return of(null);
    }
  }
}
