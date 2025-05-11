import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'tut1-les9child',
  imports: [],
  templateUrl: './les9child.component.html',
  styleUrl: './les9child.component.scss'
})
export class Les9childComponent {
  count: number = 0;

  @Output() incrementCountEvent = new EventEmitter<number>();
  @Output() addItemEvent = new EventEmitter<string>();

  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
