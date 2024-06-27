import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constante } from 'src/app/models/Constantes';
import { Producto } from 'src/app/models/producto';
import { CRUDService } from 'src/app/services/crud.service';
import { configApis } from 'src/app/utils/servicios.config';


@Component({
  selector: 'app-producto-financiero',
  templateUrl: './producto-financiero.component.html',
  styleUrls: ['./producto-financiero.component.scss']
})
export class ProductoFinancieroComponent implements OnInit {
  elementosPorPaginaLista: number[] = [5, 10, 20];
  elementosPorPagina: number;
  textoBusqueda: string = '';
  progress: number = 20;
  esVisible = false;
  mensaje = "";
  inLoad = true;
  public idProduct = "";
  private urlbase = configApis.URL_API.dominio;
  private ctrlbase = configApis.URL_API.producto.base;

  datos: Producto[] = [];

  constructor(private router: Router, private crud: CRUDService, private toastr: ToastrService) {
    this.elementosPorPagina = 5;
  }

  ngOnInit() {
    this.obtenerProductos();
    this.toastr.error(Constante.DEFAULT_MESSAGE)
  }

  obtenerProductos(): void {
    this.crud.obtener(`${this.urlbase}${this.ctrlbase}`).subscribe(
      {
        next: (productos: any) => {
          this.datos = productos.data;
          this.inLoad = false;
        },
        error: () => this.toastr.error(Constante.DEFAULT_MESSAGE)
      });
  }

  editarItem(dato: Producto): void {
    let json = JSON.stringify(dato);
    this.router.navigate(['/edit-producto', window.btoa(json)]);
  }

  eliminarItem(): void {
    this.crud.deleteFormData(`${this.urlbase}${configApis.URL_API.producto.delete}${this.idProduct}`).subscribe(
      {
        next: () => {
          this.esVisible = false;
          this.obtenerProductos();
        },
        error: () => this.toastr.error(Constante.DEFAULT_MESSAGE)
      });
  }

  abrirModal(producto: Producto) {
    this.esVisible = true;
    this.mensaje = "Estas seguro de eliminar el producto " + producto.name + "?";
    this.idProduct = producto.id;
  }

  ocultarModal() {
    this.esVisible = false;
  }

}
