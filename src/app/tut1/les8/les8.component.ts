import { Component, Input } from '@angular/core';

@Component({
  selector: 'tut1-les8',
  imports: [],
  templateUrl: './les8.component.html',
  styleUrl: './les8.component.scss'
})
export class Les8Component {
  @Input() occupation = "";
  @Input() name = "";
}
