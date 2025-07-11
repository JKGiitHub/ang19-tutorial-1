import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'tut1-les16',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './les16.component.html',
  styleUrl: './les16.component.scss'
})
export class Les16Component {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
