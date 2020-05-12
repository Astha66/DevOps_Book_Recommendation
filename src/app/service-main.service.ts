import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './IBook';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  private _url: string = "http://bookaholicservices.ml/scifi";
  constructor(private http:HttpClient) { }

  getBooks(): Observable<IBook[]>{
    console.log("hi");
    return this.http.get<IBook[]>(this._url);
                   
  }
}
