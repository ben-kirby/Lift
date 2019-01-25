import { Component, OnInit } from '@angular/core';
import { Property } from '../models/property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renter',
  templateUrl: './renter.component.html',
  styleUrls: ['./renter.component.css']
})
export class RenterComponent implements OnInit {

  propertyList: Property[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
