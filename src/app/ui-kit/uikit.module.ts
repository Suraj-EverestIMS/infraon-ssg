import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FloatingButtonsComponent } from './floating-buttons/floating-buttons.component';
import { EmailInputComponent } from './email-input/email-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    FloatingButtonsComponent,
    EmailInputComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FloatingButtonsComponent,
    EmailInputComponent,
    CarouselComponent
  ],
})
export class UIKITModule { }