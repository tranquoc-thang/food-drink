import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationUtil {
  constructor() {}

  public checkMatchOther(otherControlName: string) {
    return (control: AbstractControl) => {
      const otherControl = control.root.get(otherControlName);
      return control.value === otherControl?.value
        ? null
        : { checkMatchOther: true };
    };
  }
}
