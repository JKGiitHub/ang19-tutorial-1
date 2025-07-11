import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'tut1-les14',
  imports: [
    FormsModule,
  ],
  templateUrl: './les14.component.html',
  styleUrl: './les14.component.scss'
})
export class Les14Component {
  username = 'youngTech';
  favoriteFramework = 'Angular';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
