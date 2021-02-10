import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  myimage:string = "assets/images/about-us-img.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
