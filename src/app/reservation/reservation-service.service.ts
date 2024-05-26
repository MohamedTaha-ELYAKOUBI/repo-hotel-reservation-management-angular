import { Inject, Injectable, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {

  private reservations: Reservation[] = [];
  private apiUrl = "http://localhost:3001";

  constructor(private httpClient: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  getReservation(id: string): Observable<Reservation> {
    return this.httpClient.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  createReservation(newReservation: Reservation): Observable<void> {
    newReservation.id = Date.now().toString();
    return this.httpClient.post<void>(this.apiUrl + "/reservation", newReservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.apiUrl + "/reservation/" + id);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.httpClient.put<void>(this.apiUrl + "/reservation/" + id, updatedReservation);
  }

}
