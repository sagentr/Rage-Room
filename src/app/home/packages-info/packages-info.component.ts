import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages-info',
  templateUrl: './packages-info.component.html',
  styleUrls: ['./packages-info.component.css']
})
export class PackagesInfoComponent implements OnInit {

 
  bookingImage1:string = "assets/images/paint-splatter.img.jpg";
  bookingImage2:string = "assets/images/standard-rage-img.jpg";
  bookingImage3:string = "assets/images/private-events-img.jpg";
  bookingImage4:string = "assets/images/Deluxe-rage-img.jpg";
  
  constructor() { }

  ngOnInit(): void {
  }

}
