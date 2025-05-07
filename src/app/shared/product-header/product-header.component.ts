import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Feature } from 'src/app/core/interface/feature.model';
import { FeatureService } from 'src/app/core/services/feature.service';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss']
})
export class ProductHeaderComponent implements OnInit {
  @Input() productName!: string;
  @Input() productIcon!: string;
  @Input() hasPricing!: Boolean;
  @Input() hasFeatures!: Boolean;
  @Input() hasSolutions!: Boolean;
  @Input() hasExtraFeatures!: Boolean;

  corefeatures: Feature[] = [];
  addOnfeatures: Feature[] = [];
  solutionfeatures: Feature[] = [];

  constructor(private router: Router, private featureService: FeatureService) {}

  ngOnInit(): void {
    // Handle initial loading and when navigation occurs
    this.loadFeatures();

    // Subscribe to router events to handle navigation changes
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.loadFeatures());
  }

  // Function to load features for the current product
  private loadFeatures(): void {
    const productId = this.getProductIdFromUrl(this.router.url);
    this.corefeatures = this.featureService.getFeaturesForProduct(productId).filter((f) => (f.type == 'core'));
    this.addOnfeatures = this.featureService.getFeaturesForProduct(productId).filter((f) => (f.type == 'add-on'));
    this.solutionfeatures = this.featureService.getFeaturesForProduct(productId).filter((f) => (f.type == 'solution'));
  }

  // Helper function to extract product ID from the URL
  private getProductIdFromUrl(url: string): string {
    const segments = url.split('/');
    return segments.length > 1 ? segments[1] : '';
  }
}