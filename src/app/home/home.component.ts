import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showtitle : boolean = false;
  title : boolean=false;
  username : boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  activatetitle(){
    this.title=true;
    this.username = false;
    this.showtitle=false;
  }
  showBookByTitle(){
    this.showtitle=true;
    this.title = false;
    this.username = false;

  }

}
