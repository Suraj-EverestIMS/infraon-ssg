import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.scss']
})
export class ProductLayoutComponent implements OnInit {
  productName = '';
  productIcon = '';
  hasPricing = false;
  hasFeatures = false;
  hasSolutions = false;
  hasExtraFeatures = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.updateProductData();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateProductData();
    });
  }

  private updateProductData() {
    this.route.firstChild?.data.subscribe((data: Data) => {
      if (data) {
        this.productName = data['productName'];
        this.productIcon = data['productIcon'];
        this.hasPricing = data['hasPricing'];
        this.hasFeatures = data['hasFeatures'];
        this.hasSolutions = data['hasSolutions'];
        this.hasExtraFeatures = data['hasExtraFeatures'];
      }
    });
  }
}
