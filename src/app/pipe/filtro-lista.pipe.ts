import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLista'
})
export class FiltroPipe implements PipeTransform {
  transform(datos: any[], textoBusqueda: string): any[] {
    if (!datos || !textoBusqueda) {
      return datos;
    }

    textoBusqueda = textoBusqueda.toLowerCase();
    return datos.filter(dato => this.datoCoincide(dato, textoBusqueda));
  }

  private datoCoincide(dato: any, textoBusqueda: string): boolean {
    for (const prop in dato) {
      if (dato.hasOwnProperty(prop) && typeof dato[prop] === 'string' && dato[prop].toLowerCase().includes(textoBusqueda)) {
        return true;
      }
    }
    return false;
  }
}
