import {Injectable} from "@angular/core";

const DEFAULT_PASSWORD = '1234';

@Injectable()
export class UserService {
  private logged: boolean = false;
  private login: string = '';
  private password: string = '';

  isLogged(): boolean {
    return this.logged;
  }

  getLogin(): string {
    return this.login;
  }

  connect(login, password): boolean|Array<string> {
    let errors: Array<string> = [];

    if (this.isLogged()) {
      console.log("Already logged");
      return true;
    }

    if (this.isLoginValid(login, errors) && this.isPasswordValid(password, errors)) {
      this.logged = true;
    } else {
      return errors;
    }
    return true;
  }

  isLoginValid(login, errors ? : Array<string>|undefined): boolean {
    if (errors === undefined) {
      errors = [];
    }
    if (this.isMandatoryFieldMissing(login)) {
      errors.push("Veuillez remplir le champ Login");
      return false;
    }
    return true;
  }

  isPasswordValid(password, errors ? : Array<string>|undefined): boolean {
    if (this.isMandatoryFieldMissing(password)) {
      errors.push("Veuillez renseigner un mot de passe");
      return false;
    }
    if (password !== DEFAULT_PASSWORD) {
      errors.push("Mot de passe incorrect");
      return false;
    }
    return true;
  }

  private isMandatoryFieldMissing(value: string): boolean {
    return value === "";
  }
}
