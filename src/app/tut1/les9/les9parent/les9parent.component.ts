import { Component } from '@angular/core';
import { Les9childComponent } from "../les9child/les9child.component";

@Component({
  selector: 'tut1-les9parent',
  imports: [Les9childComponent],
  templateUrl: './les9parent.component.html',
  styleUrl: './les9parent.component.scss'
})
export class Les9parentComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
    console.log(this.items);
  }
}
