import { Component, Input } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { Tickets } from '../../models/tickets.interface';

@Component({
  selector: 'grid-tickets',
  templateUrl: './grid-tickets.component.html',
  styleUrls: ['./grid-tickets.component.scss']
})
export class GridTicketsComponent {
  protected dataSource: Tickets[] = [];

  constructor(private service: TicketService) {
    this.getAllTickets();
  }

  private getAllTickets() {
    this.service.getTickets().subscribe(response => {
      console.log("getAllTickets", response);
      this.dataSource = response;
    })
  }
}
