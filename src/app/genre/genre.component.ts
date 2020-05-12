import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceMainService } from '../service-main.service';
import { IBook } from '../IBook';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  scifi : boolean = false;
  adventure : boolean = false;
  comics : boolean = false;
  comedy : boolean = false;
  romance : boolean = false;
  horror : boolean = false;
  bio : boolean = false;
  poetry : boolean = false;
  public ib : IBook[];
 
  
  constructor( private router: Router,private _bookService: ServiceMainService) { }

  ngOnInit(): void {
   
  }
  explorescifi() : void
  {
    this.scifi=true;
    this.horror = false;
    this.adventure=false;
    this.bio=false;
    this.comedy=false;
    this.comics=false;
    this.romance=false;
    this.poetry=false;

    this._bookService.getScifiBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );
     
  }

  explorehorror(){
    this.scifi=false;
    this.horror = true;
    this.adventure=false;
    this.bio=false;
    this.comedy=false;
    this.comics=false;
    this.romance=false;
    this.poetry=false;
    
    this._bookService.getHorrorBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );

  }
  exploreromance(){
    this.scifi= false;
    this.horror = false;
    this.adventure=false;
    this.bio=false;
    this.comedy=false;
    this.comics=false;
    this.romance=true;
    this.poetry=false;
    
    this._bookService.getRomanceBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );

  }
  explorecomedy(){
    this.scifi=false;
    this.horror = false;
    this.adventure=false;
    this.bio=false;
    this.comedy=true;
    this.comics=false;
    this.romance=false;
    this.poetry=false;
    
    this._bookService.getComedyBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );

  }
  explorebio(){
    this.scifi=false;
    this.horror = false;
    this.adventure=false;
    this.bio= true;
    this.comedy=false;
    this.comics=false;
    this.romance=false;
    this.poetry=false;
    
    this._bookService.getBioBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );

  }
  explorecomics(){
    this.scifi=false;
    this.horror = false;
    this.adventure=false;
    this.bio=false;
    this.comedy=false;
    this.comics=true;
    this.romance=false;
    this.poetry=false;
    
    this._bookService.getComicsBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );

  }
  exploreadventure(){
    this.adventure=true;
    this.scifi=false;
    this.horror = false;
    
    this.bio=false;
    this.comedy=false;
    this.comics=false;
    this.romance=false;
    this.poetry=false;
    
    this._bookService.getAdventureBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );

  }
  explorepoetry(){
    this.poetry=true;
    this.scifi=false;
    this.horror = false;
    this.adventure=false;
    this.bio=false;
    this.comedy=false;
    this.comics=false;
    this.romance=false;
    
    
    this._bookService.getPoetryBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
   
      
              }
    
      );

  }

}
