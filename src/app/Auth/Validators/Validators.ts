import { FormGroup, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { DataService } from '../Service/data.service';
import { Constants } from 'src/app/Shared/interfaces/constants';

export class MyValidators {

  static comparePassword(password: string, password_confirmation: string) {
    return (form: FormGroup) => {
      const password = form.controls['password'];
      const r_password = form.controls['password_confirmation'];
      if (r_password.errors && r_password.errors.mustMatch) {
        return
      }

      if (password.value !== r_password.value) {
        r_password.setErrors({ mustMatch: true });
      } else {
        r_password.setErrors(null);
      }
    }
  }

  static UsernameValidator(http: HttpClient): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return timer(0)
        .pipe(
          switchMap(() => http.post(Constants.getApiUrl() + '/api/email/', { email: control.value })
            .pipe(
              map((val: number) => !!val ? { exists: { emailExist: true } } : null)
            )
          )
        );
    };
  }

}
