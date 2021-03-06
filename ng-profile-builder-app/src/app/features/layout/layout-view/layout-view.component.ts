import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Layout, Column } from '../models';

@Component({
  selector: 'pba-layout-view',
  templateUrl: './layout-view.component.html',
  styleUrls: ['./layout-view.component.scss']
})
export class LayoutViewComponent implements OnInit, OnChanges {
  @Input() layout: Layout;
  layoutTitle: string;
  isColumnFormVisible = false;
  editColumn: Column;

  sampleText: string;

  constructor() {
    this.sampleText = 'Lorem ipsum sample text, your content goes here.';
  }

  public titleChange(): void {
    if (!this.layout) {
      return;
    }
    this.layout.title = this.layoutTitle;
  }

  public editColumnClick(event, col: Column): void {
    event.preventDefault();
    this.editColumn = col;
    this.isColumnFormVisible = true;
  }

  public columnFormCloseClick(col: Column): void {
    this.isColumnFormVisible = false;
  }

  ngOnInit(): void {
    this.layoutTitle = this.layout && this.layout.title || '';
  }

  ngOnChanges(): void {
    this.layoutTitle = this.layout && this.layout.title || '';
  }
}
