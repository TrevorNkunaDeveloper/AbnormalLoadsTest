import { Component } from '@angular/core';

@Component({
  selector: 'app-registrationcomponent',
  templateUrl: './registrationcomponent.component.html',
  styleUrls: ['./registrationcomponent.component.css']
})
export class RegistrationcomponentComponent {
  submit(login: any){
    console.log("form submitted",login)
  }
}
