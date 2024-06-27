import { Validators } from "@angular/forms";
import { ValidarFecha } from "../utils/fecha.validator";

export class Producto {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date | '';
  date_revision: Date | '';

  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
    this.logo = '';
    this.date_release = '';
    this.date_revision = '';
  }

  public static campos() {
    return [
      { tipo: 'text', id: 'id', validar: [Validators.nullValidator, Validators.required, Validators.minLength(3), Validators.maxLength(10)], pattern: '' },
      { tipo: 'text', id: 'name', validar: [Validators.nullValidator, Validators.required, Validators.minLength(5), Validators.maxLength(100)], pattern: ''},
      { tipo: 'text', id: 'description', validar: [Validators.nullValidator, Validators.required, Validators.minLength(10), Validators.maxLength(200)], pattern: ''},
      { tipo: 'text', id: 'logo', validar: [Validators.nullValidator, Validators.required],pattern: '' },
      { tipo: 'date', id: 'date_release', validar: [Validators.nullValidator, Validators.required, ValidarFecha], pattern: '' },
      { tipo: 'date', id: 'date_revision', validar: [Validators.nullValidator, Validators.required] ,pattern: '' }
    ];
  }
}
