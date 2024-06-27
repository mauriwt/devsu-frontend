import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoFinancieroComponent } from './producto-financiero.component';
import { CRUDService } from 'src/app/services/crud.service';
import { ObservableService } from 'src/app/services/observable.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClonarListaPipe } from 'src/app/pipe/clonar-lista.pipe';
import { FiltroPipe } from 'src/app/pipe/filtro-lista.pipe';
import { FormsModule } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { SkeletonModule } from 'src/app/components/load/skeleton.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProductoFinancieroComponent', () => {
  let component: ProductoFinancieroComponent;
  let fixture: ComponentFixture<ProductoFinancieroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductoFinancieroComponent, ClonarListaPipe, FiltroPipe],
      providers: [CRUDService, ObservableService, HttpClient, HttpHandler, Router,ToastrService],
      imports: [FormsModule, SkeletonModule, ToastrModule.forRoot(),BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(ProductoFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia tener una variable "elementosPorPaginaLista []" con elementos', () => {
    expect(component.elementosPorPaginaLista).toBeTruthy();
    const mockedElemeneto = 0;
    const expectResult = true;
    const result = component.elementosPorPaginaLista.length > mockedElemeneto;
    expect(result).toEqual(expectResult)
  });

  it('deberia tener una variable "elementosPorPagina" con valor "5"', () => {
    expect(component.elementosPorPagina).toBeTruthy();
    const expectResult = 5;
    const result = component.elementosPorPagina;
    expect(result).toEqual(expectResult)
  });

  it('deberia tener una variable "textoBusqueda"', () => {
    expect(component.textoBusqueda).toEqual('')
  });

  it('deberia tener una variable "elementosPorPagina" con valor "20"', () => {
    expect(component.progress).toBeTruthy();
    const expectResult = 20;
    const result = component.progress;
    expect(result).toEqual(expectResult)
  });

  it('deberia tener una variable "datos []" sin elementos', () => {
    expect(component.datos).toBeTruthy();
    const expectResult = 0;
    const result = component.datos.length;
    expect(result).toEqual(expectResult)
  });

  it('deberia tener una función "ngOnInit()"', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('deberia tener una función "obtenerProductos()"', () => {
    expect(component.obtenerProductos).toBeTruthy();
  });

  it('deberia tener una función "editarItem()"', () => {
    expect(component.editarItem).toBeTruthy();
  });

  it('deberia mostar un modal', () => {
    const producto: Producto = { id: "uno", name: 'Producto de prueba' ,description:"",logo:"",date_release: "",date_revision:""};

    component.abrirModal(producto);

    expect(component.esVisible).toBe(true);
    expect(component.mensaje).toBe("Estas seguro de eliminar el producto Producto de prueba?");
    expect(component.idProduct).toBe("uno");
    component.ocultarModal();
    expect(component.esVisible).toBe(false);
  });

  it('deberia tener una función "eliminarItem()"', () => {
    expect(component.eliminarItem).toBeTruthy();
  });
  
});
