import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Les1Component } from "./tut1/les1/les1.component";
import { Les3Component } from './tut1/les3/les3.component';
import { Les4Component } from "./tut1/les4/les4.component";
import { Les5Component } from "./tut1/les5/les5.component";
import { Les6Component } from "./tut1/les6/les6.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Les1Component, Les3Component, Les4Component, Les5Component, Les6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang19-tutorial-1';
}
