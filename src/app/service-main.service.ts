import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBook } from './IBook';
import { postData, respData, postDataUsername, postRating} from '/home/flavone01/Desktop/sem2/mosip/angular/angular projects/BookRecommend/src/app/RequestModelTitle';
import { PopBook} from './PopularBooks';

/**
 * @author Astha Sharma
 *
 * 
 */

 //
@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  private _url1: string = "https://bookloungeservices.live/genre/scifi";
  private _url2: string = "https://bookloungeservices.live/genre/horror";
  private _url3: string = "https://bookloungeservices.live/romance";
  private _url4: string = "https://bookloungeservices.live/genre/comedy";
  private _url5: string = "https://bookloungeservices.live/genre/bio";
  private _url6: string = "https://bookloungeservices.live/genre/comics";
  private _url7: string = "https://bookloungeservices.live/genre/adventure";
  private _url8: string = "https://bookloungeservices.live/genre/poetry";
 
 
  postUrl: string="https://bookloungeservices.live/recommend/booktitle/";
  postUrluser: string="";
  popbookurl: string="https://bookloungeservices.live/popular";
  ratingURL: string="https://bookloungeservices.live/rating";
 
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



  //popularbooks
  getPopularBooks(): Observable<PopBook[]>{
   
    return this.http.get<PopBook[]>(this.popbookurl);
                   
  }


  //for showing books by title
/*  showBooksByTitle(inputtitle: string): Observable<any>{

  

    
    const url= this.BASE_URL+inputtitle;
    return this.http.post<any>(url, inputtitle);

  }*/

  showBooksByTitle (postD: postData) {

    return this.http.post(this.postUrl+postD.inputtitle, postD);

  }
  showBooksByUsername (postDU: postDataUsername) {
    
    return this.http.post(this.postUrluser+postDU.inputusername, postDU);

  }

  rating (postR: postRating){
    return this.http.post(this.ratingURL, postR);
  }
}
