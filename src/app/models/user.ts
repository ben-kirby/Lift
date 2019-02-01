export interface Roles {
  reader: boolean;
  admin?: boolean;
  pilot?: boolean;
}

export class User {
  uid: string;
  email: string;
  name: string;
  role: Roles;

  constructor(authData) {
    this.uid = authData.uid;
    this.email = authData.email;
    this.name = authData.displayName;
    this.role = {
      reader: true,
      pilot: false
    };
  }
}
