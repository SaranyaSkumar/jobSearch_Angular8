import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiEndpoint = environment.APIEndpoint;

  constructor(private http: HttpClient) {
  }

  getAllJobs(payload) {
    return this.http.get(this.apiEndpoint + '/search?title=' + payload.title + '&skills=' +
      payload.skills + '&location=' + payload.location + '&company=' + payload.company + '&count=' + payload.count + '&offset=' + payload.offset)
      .pipe(map((data =>
        data)));
  }

}

