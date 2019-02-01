export interface Roles {
  reader: boolean;
  admin?: boolean;
  pilot?: boolean;
}

export class User {
  uid: string;
  email: string;
  role: Roles;

  constructor(authData) {
    this.uid = authData.uid;
    this.email = authData.email;
    this.role = {
      reader: true,
      admin: false,
      pilot: false
    };
  }
}
