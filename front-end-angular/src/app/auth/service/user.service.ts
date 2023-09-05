import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/env/env.dev';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

   login(username: string, password: number): Observable<any> {
    const body = { username, password };
    const headers = { 'Content-Type': 'application/json' };
    return this.httpClient.post(`${env}/login`, body, { headers });
  }
  
}