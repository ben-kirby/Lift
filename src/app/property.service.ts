import { Injectable } from '@angular/core';
import { Property } from './models/property';
import { propertyList } from './propertyList'; 


@Injectable()
export class PropertyService {

  constructor() { }

  getPropertyList(){
    return propertyList;
  }

  addNew(type, beds, location){
    propertyList.push(new Property(type, beds, location));
  }
  
}
 