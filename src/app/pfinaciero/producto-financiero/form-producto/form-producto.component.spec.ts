import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormProductoComponent } from './form-producto.component';
import { FormService } from 'src/app/services/form.service';
import { CRUDService } from 'src/app/services/crud.service';
import { ObservableService } from 'src/app/services/observable.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormProductoComponent', () => {
  let json = {
    "id": "trj-crd",
    "name": "Tarjeta Visa",
    "description": "Descrición 1",
    "logo": "UrlImange",
    "date_release": "2000-01-01T00:00:00",
    "date_revision": "2001-01-01T00:00:00"
  };
  let component: FormProductoComponent;
  let fixture: ComponentFixture<FormProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProductoComponent],
      providers: [ {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: () => window.btoa(JSON.stringify(json)),
            },
          },
        },
      },
         FormService, CRUDService, ObservableService, HttpClient, HttpHandler, Router,
         ToastrService
      ],
      imports: [FormsModule, ReactiveFormsModule, ToastrModule.forRoot(),BrowserAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FormProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia tener una variable "submitted" con valor "false"', () => {
    expect(component.submitted).toEqual(false);
  });

  it('deberia tener una variable "editar" con valor "false"', () => {
    expect(component.editar).toBeTruthy();
    expect(component.editar).toEqual(true);
  });

  it('deberia formater un fecha "formatearFecha(fecha: string)"', () => {
    const mockerFecha = '01/01/2000';
    const expectResult = '2000-01-01';
    const result = component.formatearFecha(mockerFecha);
    expect(result).toEqual(expectResult);
  });

  it('deberia tener una función "ngOnInit()"', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('deberia tener una función "inicializarFormularios()"', () => {
    expect(component.inicializarFormularios).toBeTruthy();
  });

  it('deberia tener una función "llenarFormulario()"', () => {
    expect(component.llenarFormulario).toBeTruthy();
  });

  it('deberia tener una función "setFechaRevision(fechaLiberacion: any)"', () => {
    expect(component.setFechaRevision).toBeTruthy();
  });

  it('deberia tener una función "isFieldValid(form: FormGroup, field: string)"', () => {
    expect(component.isFieldValid).toBeTruthy();
  });

  it('deberia tener una función "fieldCss(form: FormGroup, field: string)"', () => {
    expect(component.fieldCss).toBeTruthy();
  });

  it('deberia tener una función "guardarRegistro()"', () => {
    expect(component.guardarRegistro).toBeTruthy();
  });

  it('deberia tener una función "onReset()"', () => {
    expect(component.onReset).toBeTruthy();
  });

  it('deberia tener una función "verificarId(id: number | string)"', () => {
    expect(component.verificarId).toBeTruthy();
  });

});
