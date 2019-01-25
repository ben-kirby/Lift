import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';
import { Router } from '@angular/router';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css'],
  providers: [PropertyService]
})
export class RenterComponent implements OnInit {

  propertyList: Property[];

  constructor(private router: Router, private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyList = this.propertyService.getPropertyList();
  }

}
