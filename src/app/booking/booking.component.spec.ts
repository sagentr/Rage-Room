import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookingComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
//in class example they used a custom built type that had a function and its own component??
// describe('should be a titlecase string', () => {
//   it('should capitalize first letter of each letter in packages', () => {
//     let titlecase = new titleCasePipe()
//     let results = titlecase.transform('hello world');
//     expect(results).toEqual('Hello World')
//   })
// }) 


//Custom unit test for pipe funcionality

it('should render package in titlecase', () => {
  let fixture = TestBed.createComponent(BookingComponent);

  let bannerDe: DebugElement= fixture.debugElement;

  let packageDisplay = bannerDe.query(By.css('.package'));
  let packageDisplayEle: HTMLElement = packageDisplay.nativeElement;

  fixture.detectChanges();

  expect(packageDisplayEle.textContent).toBe('Standard Rage');

})


// it('should be a titlecase string', () => {
  //   expect(component).toBeTruthy();
  // });