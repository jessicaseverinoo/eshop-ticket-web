import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  users = {
    userAdmin: {
      codigoCliente: '3ab59c56-b11d-43e2-8496-5bc0f27c844f',
      codigoPedido: '7e42699a-93f6-474a-8fb1-34f213a28bc5',
      email: 'admin@eshop.com',
      password: 'a1s2d3',
    },
    userVisit: {
      codigoCliente: '3ab59c56-b11d-43e2-8496-5bc0f27c844f',
      codigoPedido: '7e42699a-93f6-474a-8fb1-34f213a28bc5',
      email: 'visit@eshop.com',
      password: 'a1s2d3',
    },
  };

  constructor(private route: Router, private toastr: ToastrService) {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  protected onSubmit() {
    const verifyEmailAdmin =
      this.loginForm.value.email == this.users.userAdmin.email;
    const verifyPasswordAdmin =
      this.loginForm.value.password == this.users.userAdmin.password;
    if (verifyEmailAdmin && verifyPasswordAdmin) {
      localStorage.setItem('codigoCliente', this.users.userAdmin.codigoCliente);
      localStorage.setItem('codigoPedido', this.users.userAdmin.codigoPedido);
      this.login();
    } else {
      this.toastr.info(
        'Não conseguimos validar os dados de acesso, tente novamente!',
        'Atenção'
      );
    }
  }

  protected login() {
    this.route.navigateByUrl('/home');
  }
}
