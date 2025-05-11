import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Les1Component } from "./tut1/les1/les1.component";
import { Les3Component } from './tut1/les3/les3.component';
import { Les4Component } from "./tut1/les4/les4.component";
import { Les5Component } from "./tut1/les5/les5.component";
import { Les6Component } from "./tut1/les6/les6.component";
import { Les7Component } from "./tut1/les7/les7.component";
import { Les8Component } from "./tut1/les8/les8.component";
import { Les9parentComponent } from "./tut1/les9/les9parent/les9parent.component";
import { Les10parentComponent } from "./tut1/les10/les10parent/les10parent.component";
import { Les11Component } from "./tut1/les11/les11.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Les1Component, Les3Component, Les4Component, Les5Component, Les6Component, Les7Component, Les8Component, Les9parentComponent, Les10parentComponent, Les11Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang19-tutorial-1';
}
