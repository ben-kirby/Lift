import { Injectable } from '@angular/core';
import { Property } from './models/property';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PropertyService {
  propertyList: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.propertyList = database.list('properties');
   }

  getPropertyList(){
    return this.propertyList;
  }

  addNew(type, beds, location){
    this.propertyList.push(new Property(type, beds, location));
  }
  
}
 