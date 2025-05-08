import { Component } from '@angular/core';

@Component({
  selector: 'tut1-les7',
  imports: [],
  templateUrl: './les7.component.html',
  styleUrl: './les7.component.scss'
})
export class Les7Component {
  message = "";

  greet() {
    // console.log('Hello, there 👋');
    alert('Hello, there 👋');
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  onMouseLeave() {
    this.message = "";
  }
}
