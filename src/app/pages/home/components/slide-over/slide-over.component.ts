import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketService } from '../../services/ticket.service';
import { Ticket, Tickets } from '../../models/tickets.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'slide-over',
  templateUrl: './slide-over.component.html',
  styleUrls: ['./slide-over.component.scss'],
})
export class SlideOverComponent {
  @Input() openSlideOver: boolean = false;
  @Output() $slideOverStatus: EventEmitter<boolean> = new EventEmitter(false);

  protected body!: Ticket;
  protected fileImages: File[] = [];
  protected sendingForm: boolean = false;

  constructor(private service: TicketService, private toastr: ToastrService) {}

  ngOnInit() {}

  ticketForm = new FormGroup({
    codigoCliente: new FormControl(
      '3ab59c56-b11d-43e2-8496-5bc0f27c844f',
      Validators.required
    ),
    codigoPedido: new FormControl(
      '7e42699a-93f6-474a-8fb1-34f213a28bc5',
      Validators.required
    ),
    descricao: new FormControl('', Validators.required),
    fileUploadImage: new FormControl(),
  });

  protected onSubmit() {
    console.log('is valid', this.ticketForm.valid);
    this.service.postTicket(this.ticketForm.value).subscribe({
      next: (response) => {
        this.sendingForm = true;
        if (this.fileImages.length > 0) {
          this.uploadFileImage();
        }

        this.toastr.success('Formulário cadastrado com sucesso', 'Sucesso');
      },
      error: (error: HttpErrorResponse) => {
        this.sendingForm = false;
        this.toastr.error('Houve um erro ao cadastrar o formulário', 'Atenção');
      },
      complete: () => {
        this.sendingForm = false;
        this.closeSlideOver();
      },
    });
  }

  protected uploadFile(event: any): void {
    this.fileImages = event.target.files;
  }

  uploadFileImage() {
    const formData = new FormData();
    for (let i = 0; i < this.fileImages.length; i++) {
      formData.append('imagens', this.fileImages[i]);
    }
    this.service
      .postImageTicket(formData, 'b3df5df2-5831-4539-b380-0af4988fcebf')
      .subscribe(
        (res) => {
          this.sendingForm = true;
          this.toastr.success('Imagem enviada com sucesso', 'Sucesso');
        },
        (error) => {
          this.sendingForm = false;
          this.toastr.info('Erro ao enviar imagem', 'Atenção');
        }
      );
  }

  protected closeSlideOver() {
    this.$slideOverStatus.emit(false);
  }
}
