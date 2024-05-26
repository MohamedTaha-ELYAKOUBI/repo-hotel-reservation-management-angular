import { Component } from '@angular/core';
import { ReservationServiceService } from '../reservation/reservation-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(
  private service:ReservationServiceService
){

}
}
