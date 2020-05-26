import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GenreComponent } from './genre.component';
import { ServiceMainService } from '../service-main.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';



describe('GenreComponent', () => {
  let component: GenreComponent;
  let fixture: ComponentFixture<GenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterModule, RouterTestingModule],
      declarations: [ GenreComponent ],
      providers : [ServiceMainService]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(GenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {  //test case-1
    expect(component).toBeTruthy();
  });

  it('should check the boolean value', () => {  //test case-2
    expect(component.activatepopup).toBe(false);
  });
});
