import { Component } from '@angular/core';
import { Les10childComponent } from "../les10child/les10child.component";

@Component({
  selector: 'tut1-les10parent',
  imports: [Les10childComponent],
  templateUrl: './les10parent.component.html',
  styleUrl: './les10parent.component.scss'
})
export class Les10parentComponent {

}
