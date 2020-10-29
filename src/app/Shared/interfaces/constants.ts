import { environment } from './../../../environments/environment';

export class Constants {

  // tslint:disable-next-line: align
  public static getApiUrl(): string {
    return 'https://calm-brushlands-67079.herokuapp.com';
    if (environment.production) {
      return 'https://calm-brushlands-67079.herokuapp.com';
    }
    return 'http://127.0.0.1:8000';
  }

}
