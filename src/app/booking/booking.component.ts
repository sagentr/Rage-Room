import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  packages = ['Standard Rage', 'Deluxe Rage', 'Paint Splatter']
  selectedPackage = 'Standard Rage'
  participants =['1', '2', '3', '4']
  selectedParticipants = '1'


  // @ViewChild('bookingForm', {static: false})
  // // onSubmit() {
  // //   console.log(;

  // // }

  constructor() { }

  ngOnInit(): void {
  }

}
