import { FormService } from "./form.service";

describe('FormService', () => {
  it('deberia tener una función "generar(campos:any)"', () => {
    const servicio = new FormService();
    expect(servicio.generar).toBeTruthy();
  });
  it('deberia tener una función "validationMessages()"', () => {
    const servicio = new FormService();
    expect(servicio.validationMessages).toBeTruthy();
  });
  it('deberia tener una función "validateForm(formToValidate: FormGroup, formErrors: any, lista: any[], checkDirty?: boolean)"', () => {
    const servicio = new FormService();
    expect(servicio.validateForm).toBeTruthy();
  });
});
