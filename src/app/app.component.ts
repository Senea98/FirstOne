import { User } from './user';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Female', 'Male', 'NoGender'];
  userModel = new User ('Rob', 'aa@aaa.com', 94845 , true)
  
}
