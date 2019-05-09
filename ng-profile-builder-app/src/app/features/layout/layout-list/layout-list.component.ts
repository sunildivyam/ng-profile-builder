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

  constructor() {
  }

  public selectLayoutClick(event): void {    
    this.onSelect.emit(this.selectedLayout);
  }

  public compareFn(c1: any, c2:any): boolean {
      return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  public ngOnInit(): void {

  }

  public ngOnChanges(): void {
  }
}
