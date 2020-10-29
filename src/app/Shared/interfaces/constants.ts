import { environment } from './../../../environments/environment';

export class Constants {

  // tslint:disable-next-line: align
  public static getApiUrl(): string {
    if (environment.production) {
      return 'https://';
    }
    // Local host API
    return 'http://127.0.0.1:52330';
  }

}
