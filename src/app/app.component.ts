import { Component } from '@angular/core';
import { Property } from './models/property';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  masterPropertyList: Property[] = [
    new Property("Apartment", 4, "Portland"),
    new Property("House", 2, "Bend"),
    new Property("House", 6, "Gearhart")
  ];
}
