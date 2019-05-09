import { Component, OnInit } from '@angular/core';
import { Layout, Column, Row } from '../models';
import { FirebaseService, AuthService } from 'src/app/core';

@Component({
  selector: 'pba-manage-layouts',
  templateUrl: './manage-layouts.component.html',
  styleUrls: ['./manage-layouts.component.scss']
})

export class ManageLayoutsComponent implements OnInit {
  public layouts: Array<Layout> = new Array<Layout>();
  public currentLayout: Layout;

  constructor(private firebaseService: FirebaseService,
    private authService: AuthService) { }

  private getLayouts(): void {
    this.firebaseService.getLayouts(this.authService.currentUserId)
      .subscribe((layouts: Array<Layout>) => {
        this.layouts = layouts;
      });
  }

  private createLayout() {
    this.firebaseService.createLayout(this.currentLayout)
    .subscribe((id: string) => {
      this.currentLayout.id = id;
    });
  }

  private deleteLayout() {
    if (!this.currentLayout || !this.currentLayout.id) {
      return false;
    }
    this.firebaseService.deleteLayout(this.currentLayout.id)
    .subscribe(() => {
      this.layouts = this.layouts.map((layout) => {
        if (layout.id !== this.currentLayout.id) {
          return layout;
        }
      });
      setTimeout(() => {
        if (this.layouts && this.layouts.length) {
          this.currentLayout = this.layouts[0];
        }
      });
    });
  }

  private updateLayout() {
    this.firebaseService.updateLayout(this.currentLayout.id, this.currentLayout)
    .subscribe((data) => {
      this.currentLayout = this.currentLayout;
    });
  }

  public addLayoutClick(event: any): void {
    event.preventDefault();
    this.currentLayout = new Layout();
    this.currentLayout.uid = this.authService.currentUserId;

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
    this.currentLayout = layout;
  }

  ngOnInit() {
    this.getLayouts();
  }

}
