import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Breadcrumb } from '../interface/breadcrumb.model';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const root: ActivatedRoute = this.route.root;
        const breadcrumbs: Breadcrumb[] = [{ label: 'Home', url: '/' }];  // Corrected URL for Home
        this.addBreadcrumbs(root, '', breadcrumbs);
        this.breadcrumbs$.next(breadcrumbs);
      });
  }

  private addBreadcrumbs(route: ActivatedRoute, url: string, breadcrumbs: Breadcrumb[]) {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) return;

    for (const child of children) {
      // Join the URL segments to form the route URL
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');

      // If the route contains 'features', remove it from the URL
      if (routeURL.toLowerCase().includes('features')) {
        routeURL = routeURL.replace(/features\/?/gi, ''); // Remove 'features' and any trailing slashes
      }

      if (routeURL !== '') {
        url += `/${routeURL}`;
        const label = child.snapshot.data['breadcrumbs'] || routeURL;
        breadcrumbs.push({ label, url });
      }

      // Recurse into the child routes
      this.addBreadcrumbs(child, url, breadcrumbs);
    }
  }

  getBreadcrumbs() {
    return this.breadcrumbs$.asObservable();
  }
}