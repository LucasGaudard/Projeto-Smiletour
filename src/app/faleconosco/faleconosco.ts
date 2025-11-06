
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective,  provideNgxMask } from 'ngx-mask';
@Component({
  selector: 'app-faleconosco',
  imports: [FormsModule,NgxMaskDirective],
   providers: [provideNgxMask()],
  templateUrl: './faleconosco.html',
  styleUrl: './faleconosco.css',
})


export class Faleconosco {
  nome: string = '';
  assunto: string = '';
  mensagem: string = ''
  telefone: string = ""
  email: string = "";

  confirmaFale() {
    alert(
      `Obrigado, ${this.nome}! Sua mensagem sobre ${this.assunto} foi enviada com sucesso.`
    );

    // Opcional: limpa os campos após o envio
    this.limparCampos();
  }

  limparCampos() {
    this.nome = '';
    this.assunto = '';
    this.mensagem = '';
    this.telefone = '';
    this.email = '';
  }
}