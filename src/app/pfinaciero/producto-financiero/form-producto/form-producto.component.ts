import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { CRUDService } from 'src/app/services/crud.service';
import { FormService } from 'src/app/services/form.service';
import { Router, ActivatedRoute } from '@angular/router';
import { configApis } from 'src/app/utils/servicios.config';
import { Constante } from 'src/app/models/Constantes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  public frmProducto: FormGroup = new FormGroup({});
  public frmErrorProducto = Object.assign({}, new Producto());
  submitted = false;
  editar = false;
  idProduct = "";
  private urlbase = configApis.URL_API.dominio;
  private ctrlbase = configApis.URL_API.producto.base;
  constructor(private frmServicio: FormService, private crud: CRUDService, private router: Router, private aroute: ActivatedRoute,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.inicializarFormularios();
    let json = this.aroute.snapshot.paramMap.get('producto');
    if (json) {
      this.editar = true;
      let obj = JSON.parse(window.atob(json))
      this.llenarFormulario(obj);
    }
  }

  inicializarFormularios() {
    this.frmProducto = this.frmServicio.generar(Producto.campos());
    this.frmErrorProducto = this.frmServicio.validateForm(this.frmProducto, this.frmErrorProducto, Producto.campos(), true);
    this.frmProducto.valueChanges.subscribe((data) => {
      this.frmErrorProducto = this.frmServicio.validateForm(this.frmProducto, this.frmErrorProducto, Producto.campos(), true);
    });
    this.frmProducto.controls['date_revision'].disable();
  }

  llenarFormulario(producto: any) {
    this.idProduct = producto.id;
    producto.date_release = this.formatearFecha(producto.date_release)
    producto.date_revision = this.formatearFecha(producto.date_revision)
    this.frmProducto.patchValue(producto);
    this.frmProducto.markAllAsTouched();
    this.frmProducto.updateValueAndValidity();
    this.frmProducto.controls['id'].disable();
  }

  setFechaRevision(fechaLiberacion: any): void {
    if (fechaLiberacion) {
      let fechaRevision = new Date(fechaLiberacion);
      fechaRevision.setFullYear(fechaRevision.getFullYear() + 1);
      const datePipe = new DatePipe('en-US');
      const fechaFormateada = datePipe.transform(fechaRevision, 'yyyy-MM-dd');
      this.frmProducto.controls['date_revision'].setValue(fechaFormateada);
    }
  }

  isFieldValid(form: FormGroup, field: string) {
    return (this.submitted && form.controls[field].invalid || (form.controls[field].invalid && form.controls[field].dirty) ||
      ((form.controls[field].invalid && form.controls[field].pristine) && form.controls[field].touched));
  }

  fieldCss(form: FormGroup, field: string) {
    return {
      'is-invalid': (this.submitted && form.controls[field].invalid) || (form.controls[field].invalid && form.controls[field].dirty) || ((form.controls[field].invalid && form.controls[field].pristine && form.controls[field].touched))
    };
  }

  guardarRegistro() {
    console.log(this.frmProducto)
    this.submitted = true;
    if (this.editar) {
      this.crud.put(`${this.urlbase}${this.ctrlbase}/${this.idProduct}`, this.frmProducto.getRawValue())
        .subscribe({
          next: () => {
            this.router.navigate(['/']);
          },
          error: () => this.toastr.error(Constante.DEFAULT_MESSAGE)
        });
    } else {
      this.crud.post(`${this.urlbase}${this.ctrlbase}`, this.frmProducto.getRawValue())
        .subscribe(
          {
            next: () => {
              this.router.navigate(['/']);
            },
            error: () => this.toastr.error(Constante.DEFAULT_MESSAGE)
          });
    }
  }

  onReset(): void {
    this.submitted = false;
    this.frmProducto.reset();
    this.router.navigate(['/']);
  }

  formatearFecha(fecha: string): string {
    let fechaRevision = new Date(fecha);
    const datePipe = new DatePipe('en-US');
    const fechaFormateada = datePipe.transform(fechaRevision, 'yyyy-MM-dd');
    return fechaFormateada ? fechaFormateada : '';
  }

  verificarId(id: number | string) {
    const campo = this.frmProducto.get('id');
    if (campo?.value != null)
      this.crud.obtener(`${this.urlbase}${configApis.URL_API.producto.verificarId}${id}`)
        .subscribe(
          {
            next: (data: any) => {
              if (data)
                campo.setErrors({ notUnique: true });
            },
            error: () => this.toastr.error(Constante.DEFAULT_MESSAGE)
          });
  }
}
