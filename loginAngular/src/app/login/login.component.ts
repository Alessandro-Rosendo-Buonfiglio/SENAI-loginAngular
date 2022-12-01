import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formCliente: FormGroup;

  public meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ]

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.formCliente = this.fb.group({
        cliente_nome: [ , Validators.compose([Validators.required])],
        cliente_senha: [ , Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])],
        cliente_data_dia: [ , Validators.compose([Validators.required])],
        cliente_data_mes: [ , Validators.compose([Validators.required])],
        cliente_data_ano: [ , Validators.compose([Validators.required])]
    });
  }

  enviar(){
    let form = this.formCliente.value;
    console.log(form);
  }

  get cliente_nome() { return this.formCliente.get('cliente_nome'); }
  get cliente_senha() { return this.formCliente.get('cliente_senha'); }
  get cliente_data_dia() { return this.formCliente.get('cliente_data_dia'); }
  get cliente_data_mes() { return this.formCliente.get('cliente_data_mes'); }
  get cliente_data_ano() { return this.formCliente.get('cliente_data_ano'); }

}
