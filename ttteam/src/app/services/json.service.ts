import { Injectable } from '@angular/core';
import { Counselor } from '../models/counselor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class JsonService {
  
  private jsonData: Observable<Counselor> = new Observable<Counselor>();
  jsonURL: any;
  constructor(private http: HttpClient) {
  }

  load(jsonURL: string) {
    this.jsonURL = jsonURL;
  }

  getCounselors() {
    return this.http.get(this.jsonURL);
  }
}
