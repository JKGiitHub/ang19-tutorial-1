import { Component } from '@angular/core';
import {
  DecimalPipe,
  DatePipe,
  CurrencyPipe
} from '@angular/common';

@Component({
  selector: 'tut1-les19',
  imports: [
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './les19.component.html',
  styleUrl: './les19.component.scss'
})
export class Les19Component {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
