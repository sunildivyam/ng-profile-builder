import { Component, OnInit } from '@angular/core';
import { Layout, Column, Row } from '../models';
import { FirebaseService, AuthService } from 'src/app/core';
import { ActivatedRoute, UrlSegment, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pba-manage-layouts',
  templateUrl: './manage-layouts.component.html',
  styleUrls: ['./manage-layouts.component.scss']
})

export class ManageLayoutsComponent implements OnInit {
  public layouts: Array<Layout> = new Array<Layout>();
  public currentLayout: Layout;
  public currentLayoutId: string;
  public getLayoutsSubscription: Subscription;

  constructor(
    private firebaseService: FirebaseService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.parent.url.subscribe((urlSegments: Array<UrlSegment>) => {
      if (urlSegments.length) {
        this.currentLayoutId = urlSegments[0].path;
        this.setCurrentLayout();
      }
    });
  }

  private getLayouts(): void {
    this.getLayoutsSubscription = this.firebaseService.getLayouts(this.authService.currentUserId)
      .subscribe((layouts: Array<Layout>) => {
        this.layouts = layouts;
        this.setCurrentLayout();
        this.getLayoutsSubscription.unsubscribe();
      });
  }

  private setCurrentLayout(): void {
    if (this.currentLayoutId && this.currentLayoutId !== '0' && this.layouts.length) {
      this.currentLayout = this.layouts.find((lt) => this.currentLayoutId === lt.id);
    } else if (this.currentLayoutId === '0'){
      this.createLayout();
    } else {
      this.currentLayout = null;
    }
  }
  private createLayout(): void {
    this.currentLayout = new Layout();
    this.currentLayout.uid = this.authService.currentUserId;
    this.firebaseService.createLayout(this.currentLayout)
    .subscribe((id: string) => {
      this.currentLayout = new Layout();
      this.currentLayout.uid = this.authService.currentUserId;
      this.currentLayout.id = id;
      this.layouts.push(this.currentLayout);
      this.router.navigateByUrl(`/layouts/${id}/manage`);
    });
  }

  private deleteLayout(): void {
    if (!this.currentLayout || !this.currentLayout.id) {
      return;
    }
    this.firebaseService.deleteLayout(this.currentLayout.id)
    .subscribe(() => {
      this.layouts = this.layouts.filter((layout) => {
        if (layout.id !== this.currentLayout.id) {
          return layout;
        }
      });
      setTimeout(() => {
        let id = '0';
        if (this.layouts && this.layouts.length) {
          id = this.layouts[0].id;
        }
        this.router.navigateByUrl(`/layouts/${id}/manage`);
      });
    });
  }

  private updateLayout(): void {
    this.firebaseService.updateLayout(this.currentLayout.id, this.currentLayout)
    .subscribe((data) => {
      this.currentLayout = this.currentLayout;
    });
  }

  public addLayoutClick(event: any): void {
    event.preventDefault();
    this.createLayout();
  }

  public deleteLayoutClick(event: any): void {
    event.preventDefault();
    this.deleteLayout();
  }

  public updateLayoutClick(event: any): void {
    event.preventDefault();
    this.updateLayout();
  }

  public currentLayoutChanged(layout: Layout): void {
    this.router.navigateByUrl(`/layouts/${layout.id}/manage`);
  }

  ngOnInit(): void {
    this.getLayouts();
  }

}
