import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationServiceService } from '../reservation/reservation-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  reservationGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.reservationGroup = this.formBuilder.group(
      {
        guestName: ['', Validators.required],
        guestEmail: ['', [Validators.required, Validators.email]],
        roomNumber: ['', Validators.required],
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
      }
    );

    let updatedReservationId = this.activatedRoute.snapshot.paramMap.get("id");
    if (updatedReservationId) {
      let reservationToUpdate = this.reservationService.getReservation(updatedReservationId).subscribe(
        resp => {
          if (resp) {
            this.reservationGroup.patchValue(resp);
          }
        }
      );
    }


  }
  onSubmit() {
    if (this.reservationGroup.valid) {
      let newReservationValues: Reservation = this.reservationGroup.value;
      let updatedReservationId = this.activatedRoute.snapshot.paramMap.get("id");
      if (updatedReservationId) {
        newReservationValues.id = updatedReservationId;
        this.reservationService.updateReservation(updatedReservationId, newReservationValues).subscribe(
          () => {
            console.log("Update reservation is getting processed!");
          }
        );
      } else {
        this.reservationService.createReservation(newReservationValues).subscribe(
          () => {
            console.log("Create reservation is getting processed!");
          }
        );
      }
      this.router.navigate(['/list']);
    }
  }

}
