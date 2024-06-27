import { Route } from '@angular/router';

export const PFinacieroRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./producto-financiero/producto-financiero.module').then(m => m.ProductoFinancieroModule)
  },
];

