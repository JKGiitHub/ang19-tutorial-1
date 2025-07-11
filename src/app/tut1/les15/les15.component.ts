import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tut1-les15',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './les15.component.html',
  styleUrl: './les15.component.scss'
})
export class Les15Component {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  })

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
