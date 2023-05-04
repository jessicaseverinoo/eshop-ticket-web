import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Ticket, Tickets } from '../models/tickets.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Tickets[]> {
    const url = "https://api-cqrs-query.herokuapp.com/api-cqrs-query/v1/query/reclamacoes/status/ABERTO";
    return this.http.get<Tickets[]>(url, { responseType: 'json' });
  }

  postTicket(ticket: any): Observable<Tickets> {
    console.log("ticket", ticket)
    const url = "https://api-cqrs-command.herokuapp.com/api-cqrs-command/v1/command/reclamacoes"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
  
    return this.http.post<Tickets>(url, ticket, httpOptions).pipe();
  }

  postImageTicket(formDataImages: FormData, codeTicket: string) {
    console.log("ticket", formDataImages)
    const url = `https://api-cqrs-command.herokuapp.com/api-cqrs-command/v1/command/reclamacoes/${codeTicket}/imagens`
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data',
      })
    }
  
    return this.http.post(url, formDataImages, httpOptions).pipe();
  }
}
