import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceMainService } from '../service-main.service';
import { IBook } from '../IBook';
import { postRating } from '../RequestModelTitle';

/**
 * @author Astha Sharma
 *
 * 
 */

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  isbn1 : any;
  isbn : string;
  activatepopup : boolean = false;
  activateclosepopup : boolean = false;
  scifi : boolean = false;
  adventure : boolean = false;
  comics : boolean = false;
  comedy : boolean = false;
  romance : boolean = false;
  horror : boolean = false;
  bio : boolean = false;
  poetry : boolean = false;
  public ib : IBook[];
 usrrating : number;
 successfulrating : boolean = false;
 posDataR : postRating;
  modal: HTMLElement;
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
/*
  rating(this.isbn,1){

  }
*/



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
 rating(){
  this.isbn1= document.getElementById('isbn');//this returns the html element label
  this.isbn = this.isbn1.innerText;//this takes the string inside it which is the ISBN of book
  console.log(this.usrrating);
  console.log(this.isbn);
  this.successfulrating=true;

  this.posDataR = new postRating();
  this.posDataR.rating = this.usrrating;
  this.posDataR.isbn = this.isbn;
  this._bookService.rating(this.posDataR).subscribe();
 }


 //popup
 // Get the modal


// When the user clicks the button, open the modal 
popup() {
 // this.modal.style.display = "block";
 this.activatepopup=true;
 
}

// When the user clicks on <span> (x), close the modal
spanclick() {
  this.activateclosepopup=true;
  this.activatepopup=false;
  this.successfulrating = false;
  this.modal = document.getElementById("myModal");
}

}
