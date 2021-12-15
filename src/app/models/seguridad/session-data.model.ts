import { UserDataModel } from './user-data.model';

export class SessionDataModel {
  token?: string;
  usuario?: UserDataModel;
  isLoggedIn: boolean = false; //esta logeado
  isAdmin: boolean = false;
}
