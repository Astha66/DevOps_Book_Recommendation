import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from '../service-main.service';
import { IBook } from '../IBook';
import { HttpClient } from '@angular/common/http';
import { postData, respData, postDataUsername} from '/home/flavone01/Desktop/sem2/mosip/angular/angular projects/BookRecommend/src/app/RequestModelTitle';
import { PopBook} from '../PopularBooks';

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
 



  showtitle : boolean = false; //for showing results after searching by title
  title : boolean=false; //for showing search box
  username : boolean=false; 
  showuserbooks  : boolean = false;
  inputtitle : string="";
  inputusername: string="";
  data:string;
  posData:postData;
  resultData: respData

  posDatau:postDataUsername;
  public pb : PopBook[];
  

  constructor(private dataservice: ServiceMainService) { }

  ngOnInit(): void {
    
      
     
  
    
  }

  activatetitle(){
    this.title=true;
    this.username = false;
    this.showtitle=false;
    this.showuserbooks = false;
  }
  activateusername(){
    this.title=false;
    this.username = true;
    this.showtitle=false;
    this.showuserbooks = false;
  }
  showBookByTitle(){
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
    this.username=false;
    this.showtitle=false;
    this.title=false;
    this.showuserbooks = false;
    this.dataservice.getPopularBooks()
    .subscribe(data => {
        this.pb=data;
        console.log(this.pb );
   
      
              }
    
      );
  }





  showBookByUsername(){
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
