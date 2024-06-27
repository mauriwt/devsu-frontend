import { AbstractControl } from '@angular/forms';
import moment from 'moment';

export function ValidarFecha(control: AbstractControl) {

  const fechaMin = new Date().setHours(0, 0, 0, 0);
  const fechaSeleccion = moment(control.value, 'YYYY-MM-DD').toDate().getTime();
  if (fechaSeleccion) {
    if (fechaSeleccion >= fechaMin) {
      return null;
    }
    return { fechaVal: true };
  }
  return { fechaVal: true };
}