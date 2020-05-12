import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './IBook';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  private _url1: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/scifi";
  private _url2: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/horror";
  private _url3: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/romance";
  private _url4: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/comedy";
  private _url5: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/bio";
  private _url6: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/comics";
  private _url7: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/adventure";
  private _url8: string = "http://flaskaws.eba-ba2hjvzy.ap-south-1.elasticbeanstalk.com/poetry";
 
 
 
 
 
 
  constructor(private http:HttpClient) { }

  getScifiBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url1);
                   
  }
  getHorrorBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url2);
                   
  }
  getRomanceBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url3);
                   
  }
  getComedyBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url4);
                   
  }
  getBioBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url5);
                   
  }
  getComicsBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url6);
                   
  }
  getAdventureBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url7);
                   
  }
  getPoetryBooks(): Observable<IBook[]>{
   
    return this.http.get<IBook[]>(this._url8);
                   
  }

}
