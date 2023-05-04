import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket, Tickets } from '../../models/tickets.interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'slide-over',
  templateUrl: './slide-over.component.html',
  styleUrls: ['./slide-over.component.scss']
})
export class SlideOverComponent {
  @Input() openSlideOver: boolean = false;
  @Output() $slideOverStatus: EventEmitter<boolean> = new EventEmitter(false);

  protected body!: Ticket;

  constructor(private service: TicketService) { }

  ngOnInit() { }
  
  ticketForm = new FormGroup({
    codigoCliente: new FormControl('3ab59c56-b11d-43e2-8496-5bc0f27c844f', Validators.required),
    codigoPedido: new FormControl('7e42699a-93f6-474a-8fb1-34f213a28bc5', Validators.required),
    descricao: new FormControl('', Validators.required),
  })

  images = new FormData();

  protected onSubmit() {
    console.log("submit", this.ticketForm.value);
    // console.log("imagens", this.images.value)
    
    this.service.postTicket(this.ticketForm.value).subscribe({
      next: (response) => {
        console.log("response post", response.codigoReclamacao);
        this.onSubmitImages(response.codigoReclamacao);
      },
      error: (error: HttpErrorResponse) => {
        console.log("Erro ao cadastrar novo ticket: ", error);
      },
      complete: () => {
        this.closeSlideOver();
      }
    });
  }

  protected uploadFile(event: any): void {
    this.images = event.target?.files[0];
  }

  private onSubmitImages(codeTicket: string): void {
    this.service.postImageTicket(this.images, codeTicket).subscribe({
      next: (response) => {

      },
      error: (error: HttpErrorResponse) => {
        console.log("Erro ao cadastrar imagem: ", error)
      }
    })
  }

  protected closeSlideOver() {
    this.$slideOverStatus.emit(false);
  }
}
