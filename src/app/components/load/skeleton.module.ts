import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SkeletonComponent],
  exports: [SkeletonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkeletonModule { }
