import { Component, OnInit } from '@angular/core';
import { ServiceMainService } from 'src/app/service-main.service';
import { IBook } from 'src/app/IBook';


@Component({
  selector: 'app-scifi',
  templateUrl: './scifi.component.html',
  styleUrls: ['./scifi.component.css']
})
export class ScifiComponent implements OnInit {

// public books: IBook[] = [];
 //public books1=[];
// public books: any=[];
  public ib : IBook[];
  constructor(private _bookService: ServiceMainService) { }

  ngOnInit(): void {
    this._bookService.getBooks()
    .subscribe(data => {
        this.ib=data;
        console.log(this.ib );
      
     // this.ib=data[0];
     // console.log(this.ib.author);
    //  this.books = data.bookslist;
     // this.keys= Object.keys(this.books)
     // this.books1= Array.of(this.books);
     // console.log(this.books);
     // console.log(typeof(this.books));
      
     // console.log(this.keys);
      //console.log(this.books[0].author);
      
              }
    
      );

  

  }

}
