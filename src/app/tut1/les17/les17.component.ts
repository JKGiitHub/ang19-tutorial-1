import { Component } from '@angular/core';
import { CarService } from './car.service';
import { inject } from '@angular/core';

@Component({
  selector: 'tut1-les17',
  imports: [],
  templateUrl: './les17.component.html',
  styleUrl: './les17.component.scss'
})
export class Les17Component {
  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');
}
