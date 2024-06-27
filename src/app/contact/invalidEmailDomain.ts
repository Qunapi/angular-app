import { AbstractControl, ValidationErrors } from '@angular/forms';

export function invalidEmailDomain(
  control: AbstractControl
): ValidationErrors | null {
  const value: string = control.value?.toString().toLowerCase();
  const hosts = ['gmail.com', 'yahoo.com'];

  if (!value) {
    return null;
  }

  const matches = hosts.some((host) => value.indexOf(host) > -1);
  console.log(matches);

  console.log(value.indexOf(hosts[0]));
  console.log(value.indexOf(hosts[1]));

  return matches ? { invalidEmailDomain: true } : null;
}
