import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Ticket, Tickets } from '../models/tickets.interface';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  getTickets(): Observable<Tickets[]> {
    const url =
      'https://api-cqrs-query.herokuapp.com/api-cqrs-query/v1/query/reclamacoes/status/ABERTO';
    return this.http.get<Tickets[]>(url, { responseType: 'json' });
  }

  postTicket(ticket: any): Observable<Tickets> {
    // console.log('ticket', ticket);
    const url =
      'https://api-cqrs-command.herokuapp.com/api-cqrs-command/v1/command/reclamacoes';

    return this.http
      .post<Tickets>(url, ticket, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe();
  }

  postImageTicket(formDataImages: FormData, codeTicket: string) {
    console.log('ticket', formDataImages);
    const url =
      'https://api-cqrs-command.herokuapp.com/api-cqrs-command/v1/command/reclamacoes/b3df5df2-5831-4539-b380-0af4988fcebf/imagens';
    return this.http.post(url, formDataImages);
  }
}
