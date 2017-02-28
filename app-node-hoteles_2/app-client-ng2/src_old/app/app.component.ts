import { Component } from '@angular/core';
import {CustomerCompComponent} from 
'./customers-comp/customers-comp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  directives: [CustomerCompComponent]
})
export class AppComponent {
  title = 'app works!';
}
