import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BpBotonComponent } from './bp-boton.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BpBotonComponent],
  exports: [BpBotonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BpBotonModule { }
