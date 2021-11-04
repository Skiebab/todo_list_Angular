import { Address } from "./address.model";

export class User {
  constructor(public firstname: string,
              public lastname: string,
              public email: string,
              public address: Address,
              public description: string,
              public dateBirth: Date,
              public aliases?: string[])
              {

              }
}
