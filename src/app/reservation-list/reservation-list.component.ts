import { Component, OnInit } from '@angular/core';
import { ReservationServiceService } from '../reservation/reservation-service.service';
import { Reservation } from '../models/reservation';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(
    private reservationService: ReservationServiceService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(resp => {
      if(resp)
      this.reservations = resp;
    });
  }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(
      ()=>{
        console.log("Delete function flow is getting processed!")
      }
    );
  }

}
