import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  packages = ['Standard Rage', 'Deluxe Rage', 'Paint Splatter']
  selectedPackage = 'Standard Rage'
  participants =['1', '2', '3', '4']
  selectedParticipants = '1'
  timeSlots = ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM']
  selectedTimeSlot = '11:00 AM'
  username = '';
  phone = '';

 
  onSubmit(form: NgForm) {
    console.log(form)
    
  }


}
