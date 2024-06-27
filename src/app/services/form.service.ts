import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  private formulario: FormGroup = new FormGroup({});
  
  public validationMessages() {
    const messages = {
      required: 'El campo es requerido',
      email: 'El correo electrónico ingresado no es válido',
      pattern: '',
      maxlength: 'El valor supera logitud maxima',
      minlength: 'El valor no cumple con longitud minima',
      fechaVal: 'La fecha debe ser igual o mayor a la fecha actual',
      notUnique: 'ID no válido!'
    };

    return messages;
  }

  public validateForm(formToValidate: FormGroup, formErrors: any, lista: any[], checkDirty?: boolean) {
    const form = formToValidate;
    for (const field in formErrors) {
      if (field) {
        formErrors[field] = '';
        const control = form.get(field);
        const messages: any = this.validationMessages();
        if (control && !control.valid) {
          if (!checkDirty || (control.dirty || control.touched || control.errors)) {
            if (control.errors) {
              Object.entries(control.errors).forEach(
                ([key, value]) => {
                  switch (key) {
                    case 'pattern':
                      formErrors[field] = lista.find(item => item.id === field).pattern;
                      break;
                    default:
                      formErrors[field] = messages[key];
                      break;
                  }
                }
              );
            }
          }
        }
      }
    }

    return formErrors;
  }

  public generar(campos:any) {
    this.formulario = new FormGroup({});
    for (const o of campos) {
      o.tipo === 'checkbox' ? this.formulario.addControl(o.id, new FormControl(false, o.validar)) : this.formulario.addControl(o.id, new FormControl('', o.validar));
    }
    return this.formulario;
  }
}
