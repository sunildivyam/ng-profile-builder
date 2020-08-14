import { Component, OnChanges } from '@angular/core';
import {FirebaseService, AuthService} from '../../../core';
import { Layout } from '../models';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'pba-layout-cards-view',
  templateUrl: './layout-cards-view.component.html',
  styleUrls: ['./layout-cards-view.component.scss']
})
export class LayoutCardsViewComponent implements OnChanges {
  layouts: Array<Layout>;
  viewData: Array<any>;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private route: ActivatedRoute) {
    this.route.url.subscribe((urlSegments: Array<UrlSegment>) => {
      if (urlSegments.length) {
        this.getLayouts();
      }
    });
  }
  public getLayouts() {
    this.firebaseService.getLayouts(this.authService.currentUserId).subscribe((layouts: Array<Layout>) => {
      this.layouts = layouts;
      this.transformData();
    }, (layouts: Array<Layout>) => {
      this.layouts = layouts;
      this.transformData();
    });
  }

  transformData(): void {
    this.viewData = new Array<any>();
    this.layouts.map((layout: Layout) => {
      const layoutItem = { ...layout };
      this.viewData.push(layoutItem);
    });
  }

  ngOnChanges(): void {
    this.transformData();
  }
}
