import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from 'src/app/core/interface/breadcrumb.model';
import { BreadcrumbService } from 'src/app/core/services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.getBreadcrumbs().subscribe(data => {
      this.breadcrumbs = data;
    });
  }
}