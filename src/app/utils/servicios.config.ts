import { environment } from '../../environments/environment';
export const configApis = {
  URL_API:
  {
    dominio: environment.bp_producto_finaciero,
    producto: {
      base: 'products',
      delete: 'products/',
      verificarId: 'products/verification/'
    }
  }
};
