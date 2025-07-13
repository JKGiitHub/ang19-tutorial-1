import { Component } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import { StarPipe } from './star.pipe';

@Component({
  selector: 'tut1-les20',
  imports: [
    ReversePipe,
    StarPipe,
  ],
  templateUrl: './les20.component.html',
  styleUrl: './les20.component.scss'
})
export class Les20Component {
  word = 'You are a champion, my friend!';
}
