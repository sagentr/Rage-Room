import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {
  @ViewChild('f', { static: true }) bookingForm?: NgForm;
  times: string[] = [
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
    '7:00 PM',
    '7:30 PM',
  ];
  selectedTime: string = '11:00 AM';
  packages: string[] = ['Standard Rage', 'Deluxe Rage', 'Paint Splatter'];
  selectedPackage: string = 'Standard Rage';
  participants: string[] = ['1', '2', '3', '4'];
  selectedParticipants: string = '1';
  user = {
    // date: new Date(),
    time: '',
    package: '',
    participants: '',
    phone: '',
    email: '',
  };
  submitted: boolean = false;
  onSubmit() {
    this.submitted = true;
    this.user.time = this.bookingForm?.value.userData.time;
    this.user.package = this.bookingForm?.value.userData.package;
    this.user.participants = this.bookingForm?.value.userData.participants;
    this.user.phone = this.bookingForm?.value.userData.phone;
    this.user.email = this.bookingForm?.value.userData.email;
    console.log("User's Data:", this.user);
    this.bookingForm?.reset();
  }
}