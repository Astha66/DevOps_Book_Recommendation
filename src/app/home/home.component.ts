import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';
import { IBook } from '../IBook';
import { HttpClient } from '@angular/common/http';
import { postData, respData, postDataUsername} from '/home/flavone01/Desktop/sem2/mosip/angular/angular projects/BookRecommend/src/app/RequestModelTitle';
import { PopBook} from '../PopularBooks';
import {postRating} from '/home/flavone01/Desktop/sem2/mosip/angular/angular projects/BookRecommend/src/app/RequestModelTitle';

/**
 * @author Astha Sharma
 *
 * 
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  postRating: postRating;
 
  isbn : number;
  showrating : boolean = false;
  showtitle : boolean = false; //for showing results after searching by title
  title : boolean=false; //for showing search box
  username : boolean=false; 
  showuserbooks  : boolean = false;
  inputtitle : string="";
  inputusername: string="";
  data:string;
  posData:postData;
  resultData: respData
  showpopbooks : boolean=false;
  posDatau:postDataUsername;
  public pb : PopBook[];
  activatepopup: boolean = false;
  activateclosepopup: boolean = false;
  successfulrating: boolean = false;
  modal: HTMLElement;
  isbn1: HTMLElement;
  usrrating :number;
  posDataR : postRating;
  

  constructor(private dataservice: ServiceMainService) { }

  ngOnInit(): void {
    }
//rating submit
rating(){
  this.isbn1= document.getElementById('isbn');//this returns the html element label
  this.isbn = parseInt(this.isbn1.innerText);//this takes the string inside it which is the ISBN of book
  console.log(this.usrrating);
  console.log(this.isbn);
  this.successfulrating=true;

  this.posDataR = new postRating();
  this.posDataR.rating = this.usrrating;
  this.posDataR.isbn = this.isbn;
  this.dataservice.rating(this.posDataR).subscribe();
 }












// When the user clicks the button, open the modal 
popup() {

  this.activatepopup=true;
  
 }
 
 // When the user clicks on <span> (x), close the modal
 spanclick() {
   this.activateclosepopup=true;
   this.activatepopup=false;
   this.successfulrating = false;
 
 }
 


/*
  activateRating(){
    this.showrating=true;
    this.title=false;
    this.username = false;
    this.showtitle=false;
    this.showuserbooks = false;
  }*/
 

  activatetitle(){
    this.showrating=false;
    this.title=true;
    this.username = false;
    this.showtitle=false;
    this.showuserbooks = false;
  }
  activateusername(){
    this.showrating=false;
    this.title=false;
    this.username = true;
    this.showtitle=false;
    this.showuserbooks = false;
  }
  showBookByTitle(){
    this.showrating=false;
    this.showtitle=true;
    this.title = false;
    this.username = false;
    this.showuserbooks = false;
    console.log(this.inputtitle);


    this.posData = new postData();
        this.posData.inputtitle = this.inputtitle;
        
        this.dataservice.showBooksByTitle(this.posData).subscribe((res : respData)=>{
            this.resultData = res;
            console.log('hi');
            console.log(this.resultData);
           
          });


  }

  getPopularBooks(){
    this.showrating=false;
    this.username=false;
    this.showtitle=false;
    this.title=false;
    this.showuserbooks = false;
    this.showpopbooks = true;
    this.dataservice.getPopularBooks()
    .subscribe(data => {
        this.pb=data;
        console.log(this.pb );
   
      
              }
    
      );
  }





  showBookByUsername(){
    this.showrating=false;
    this.username=false;
    this.showtitle=false;
    this.title=false;
    this.showuserbooks = true;
    console.log(this.inputusername);


    this.posDatau = new postDataUsername();
        this.posDatau.inputusername = this.inputusername;
        
        this.dataservice.showBooksByUsername(this.posDatau).subscribe((res : respData)=>{
            this.resultData = res;
            console.log('hi');
            console.log(this.resultData);
           
          });


  }


  

}
