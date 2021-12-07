import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagenRoutingModule } from './imagen-routing.module';
import { ImagenComponent } from './imagen.component';
import { NgbModule }  from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ImagenComponent
  ],
  imports: [
    CommonModule,
    ImagenRoutingModule,
    NgbModule
  ]
})
export class ImagenModule { }
