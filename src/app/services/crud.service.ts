import { Injectable } from '@angular/core';
import { ObservableService } from './observable.service';

@Injectable()
export class CRUDService {

  constructor(private servicio: ObservableService) { }

  public obtener(rest_url: string) {
    return this.servicio.getUrlServicioGet(rest_url);
  }

  public post(rest_url:string, object:any) {
    return this.servicio.post(rest_url, object);
  }

  public deleteFormData(rest_url:string) {
    return this.servicio.delete(rest_url);
  }

  public put(rest_url:string, object:any) {
    return this.servicio.put(rest_url, object);
  }
}
