export interface ILoginUser {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  role: string;
}
