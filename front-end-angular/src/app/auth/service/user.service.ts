import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { backendUrl } from 'src/env/env.prod';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }
  

  signup(username: string, password: string): Observable<any> {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(`${backendUrl}/auth/signup`, body, { headers });
  }

  signin(username: string, password: string): Observable<any> {
    const body = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.httpClient.post(`${backendUrl}/auth/login`, body, { headers });
  }
}
