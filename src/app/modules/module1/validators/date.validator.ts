import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: unknown } | null => null;
}
