import { Injectable } from '@angular/core';

@Injectable()
export interface Roles{
  reader: boolean;
  author?: boolean;
  admin?: boolean;
  pilot?: boolean;
  rider?: boolean;
}

export class UserService {

  email: string;
  name: string;
  isPilot: boolean;
  isRider: boolean;

  constructor(authData) {
    this
   }

}

export class Pilot{
  email: string;
  name: string;
  role: Roles;

  constructor(authData) {
    this.email = authData.email;
    this.name = authData.displayName;
    this.role = {
      reader: true,
      pilot: true
    }
  }
}
