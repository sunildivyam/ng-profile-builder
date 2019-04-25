import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ProfileContent } from '../models';
import { Layout, Column } from '../../layout';

@Component({
  selector: 'pba-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit, OnChanges {
  @Input() content: ProfileContent;
  @Input() layout: Layout;
  @Input() isReadonly: boolean;

  sectionColumn: Column;
  isColumnFormVisible: boolean;

  constructor() { }

  editSectionClick(event, col: Column) {
    this.sectionColumn = col;
  }

  public editColumnClick(event, col: Column): void {
    event.preventDefault();
    this.sectionColumn = col;
    this.isColumnFormVisible = true;
  }

  public columnFormCloseClick(col: Column): void {
    this.isColumnFormVisible = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {    
  }
}
