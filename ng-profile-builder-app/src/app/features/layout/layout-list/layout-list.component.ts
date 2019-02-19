import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Layout } from '../models';

@Component({
  selector: 'pba-layout-list',
  templateUrl: './layout-list.component.html',
  styleUrls: ['./layout-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LayoutListComponent implements OnInit, OnChanges {
@Input() public layouts: Array<Layout>;
@Input() public selectedLayout: Layout;
@Output() public onSelect = new EventEmitter();

private currentLayout: Layout;

  constructor() {
    this.currentLayout = new Layout();
  }

  public selectLayoutClick(): void {
    this.onSelect.emit(this.currentLayout);
  }

  public ngOnInit(): void {
    this.currentLayout = this.selectedLayout;
  }

  public ngOnChanges(): void {
    this.currentLayout = this.selectedLayout;
  }
}
