import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceMainService } from '../service-main.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

 
  
  constructor( private router: Router) { }

  ngOnInit(): void {
   
  }
  explore() : void
  {
    this.router.navigate(['Scifi']);
  }

}
