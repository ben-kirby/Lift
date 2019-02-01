export class Plane {
  seats: number;
  name: string;
  owner: string;
  type: string;

  constructor(planeInfo) {
    this.seats = planeInfo.seats;
    this.name = planeInfo.name;
    this.owner = planeInfo.owner;
    this.type = planeInfo.model;
  }
}
