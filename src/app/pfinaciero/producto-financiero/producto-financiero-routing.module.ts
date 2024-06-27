import { FormProductoComponent } from './form-producto/form-producto.component';
import { ProductoFinancieroComponent } from './producto-financiero.component';
import { Route } from '@angular/router';

export const ProductoFinancieroRoutes: Route[] = [
  {
    path: '',
    component: ProductoFinancieroComponent
  },
  { path: 'add-producto', component: FormProductoComponent },
  { path: 'edit-producto/:producto', component: FormProductoComponent },
];

