import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PFinacieroModule } from './pfinaciero/pfinaciero.module';
import { FormService } from './services/form.service';
import { ObservableService } from './services/observable.service';
import { CRUDService } from './services/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }),
    //AppRoutingModule,
    RouterModule.forRoot(routes),
    PFinacieroModule,
    HttpClientModule
  ],
  exports: [],
  providers: [FormService, ObservableService, CRUDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
