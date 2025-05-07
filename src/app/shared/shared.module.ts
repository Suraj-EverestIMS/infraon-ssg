import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { BreadcrumbComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductHeaderComponent,
    BreadcrumbComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    ProductHeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
  ],
})
export class SharedModule { }
