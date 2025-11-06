import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective,  provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-reservas',
  imports: [FormsModule,NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './reservas.html',
  styleUrl: './reservas.css'
})
export class Reservas {
telefone: string = "";
}
