import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ReservationServiceService } from '../reservation/reservation-service.service';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    HomeComponent
  ], providers: [
    ReservationServiceService
  ]
})
export class HomeModule { }
