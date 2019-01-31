import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';
import { Router } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css'],
  providers: [PropertyService]
})


export class RenterComponent implements OnInit {
  propertyList: FirebaseListObservable<any[]>;
  displayAllProperties = false;
  displayNewPropertyForm = false;


  constructor(private router: Router, private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyList = this.propertyService.getPropertyList();
  }

  showPropertyList() {
    this.displayAllProperties = !this.displayAllProperties;
  }

  showNewPropertyForm() {
    this.displayNewPropertyForm = !this.displayNewPropertyForm;
  }

  newProperty(propertyType, beds, location){
    this.propertyService.addNew(propertyType, beds, location);    
  }
}
