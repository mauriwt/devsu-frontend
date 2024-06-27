import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clonarLista'
})
export class ClonarListaPipe implements PipeTransform {
  transform(array: any[], cantidad: number): any[] {
    if (array && array.length && cantidad) {
      return array.slice(0, cantidad);
    }
    return array;
  }
}
