import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LayoutService } from '../layout.service';
import { Subscription } from 'rxjs';
import { Layout } from '../models';

@Component({
  selector: 'app-layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: ['./layout-view.component.scss']
})
export class LayoutViewComponent implements OnInit, OnDestroy {
  // Component input Props
  @Input() mode: string;
  layout: Layout;
  sampleText: string;

  // Subscriptions
  getLayoutSubscription: Subscription;

  constructor(private layoutService: LayoutService) {
    this.layout = {id: 0, userId: 1};
    this.sampleText = 'Lorem ipsum sample text, your content goes here.';
  }

  ngOnInit() {
    this.getLayout(1);
  }

  ngOnDestroy(): void {
    this.getLayoutSubscription.unsubscribe();
  }

  getLayout(id: number): void {
    this.getLayoutSubscription = this.layoutService.getLayout(id).subscribe((layout: Layout) => {
      this.layout = layout;
    });
  }
}
