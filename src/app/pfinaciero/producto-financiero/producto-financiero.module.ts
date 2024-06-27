import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoFinancieroComponent } from './producto-financiero.component';
import { ProductoFinancieroRoutes } from './producto-financiero-routing.module';
import { RouterModule } from '@angular/router';
import { BpBotonModule } from 'src/app/components/bp-boton.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClonarListaPipe } from 'src/app/pipe/clonar-lista.pipe';
import { FiltroPipe } from 'src/app/pipe/filtro-lista.pipe';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { SkeletonModule } from 'src/app/components/load/skeleton.module';


@NgModule({
  declarations: [
    ProductoFinancieroComponent,
    ClonarListaPipe,
    FiltroPipe,
    FormProductoComponent
  ],
  exports: [ProductoFinancieroComponent],
  imports: [
    CommonModule,
    BpBotonModule,
    SkeletonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ProductoFinancieroRoutes)
  ],
})
export class ProductoFinancieroModule { }
