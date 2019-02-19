import { Component, OnInit } from '@angular/core';
import { Layout, Column, Row } from '../models';
import { FirebaseService, AuthService } from 'src/app/core';

@Component({
  selector: 'pba-manage-layouts',
  templateUrl: './manage-layouts.component.html',
  styleUrls: ['./manage-layouts.component.scss']
})

export class ManageLayoutsComponent implements OnInit {
  private layouts: Array<Layout> = new Array<Layout>();
  private currentLayout: Layout;
  
  constructor(private firebaseService: FirebaseService,
    private authService: AuthService) { }

  private getLayouts(): void {
    this.firebaseService.getLayouts(this.authService.currentUserId)
      .subscribe((layouts: Array<Layout>) => this.layouts = layouts )
  }

  private createLayout() {
    this.firebaseService.createLayout(this.currentLayout)
    .subscribe((id: string) => {      
      this.currentLayout.id = id;
      this.layouts.push(this.currentLayout);
    })
  }

  private deleteLayout() {
    this.firebaseService.deleteLayout(this.currentLayout.id)
    .subscribe(() => {
      this.layouts = this.layouts.map((layout) => {
        if (layout.id != this.currentLayout.id) {
          return layout;
        }
      });
      this.currentLayout = null;
    })
  }

  private updateLayout() {
    this.firebaseService.updateLayout(this.currentLayout.id, this.currentLayout)
    .subscribe((data) => {
      this.currentLayout = this.currentLayout;
    })
  }

  public addLayoutClick(): void {
    this.currentLayout = new Layout();
    this.currentLayout.userId = this.authService.currentUserId;
    
    this.createLayout();
  }

  public deleteLayoutClick(): void {
    this.deleteLayout();   
  }

  public updateLayoutClick(): void {
    this.updateLayout();
  }

  public currentLayoutChanged(layout: Layout): void {
    this.currentLayout = layout;
  }

  ngOnInit() {
    this.getLayouts();
  }

}
