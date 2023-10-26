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



}
