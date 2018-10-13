import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sonnet } from '../models/sonnet';

@Injectable({
  providedIn: 'root'
})
export class SonnetsService {

  constructor(private http: HttpClient) {}

  public getSonnets(): Observable<Sonnet[]> {
    return this.http.get<Sonnet[]>("./assets/shakespearesSonnets.json")
  }

}
