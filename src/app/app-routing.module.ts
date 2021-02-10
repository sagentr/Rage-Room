import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqComponent } from './faq/faq.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'learn-more', component: FaqComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
