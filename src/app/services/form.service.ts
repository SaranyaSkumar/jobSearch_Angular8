import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  apiEndpoint = environment.APIEndpoint;

  constructor(private http: HttpClient) { }

  register(payload) {
    console.log('payload', payload)
    return this.http.post(this.apiEndpoint + '/register', payload)
        .pipe(map((data =>
            data)));
  }
}
