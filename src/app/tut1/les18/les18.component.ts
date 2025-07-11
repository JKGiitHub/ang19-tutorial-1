import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'tut1-les18',
  imports: [
    UpperCasePipe,
    LowerCasePipe,],
  templateUrl: './les18.component.html',
  styleUrl: './les18.component.scss'
})
export class Les18Component {
  loudMessage = 'We think you are doing great!'
}
