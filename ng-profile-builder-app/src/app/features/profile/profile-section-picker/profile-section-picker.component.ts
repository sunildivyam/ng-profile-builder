import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Column } from '../../layout';
import { ContextNavs } from '../configs/context-navs.config';
import { ProfileViewsConfig } from '../configs/profile-views.config';

@Component({
  selector: 'pba-profile-section-picker',
  templateUrl: './profile-section-picker.component.html',
  styleUrls: ['./profile-section-picker.component.scss']
})
export class ProfileSectionPickerComponent {
  @Input() column: Column;
  @Output() closeClick = new EventEmitter();

  public contextNav = ContextNavs;
  public viewComponentsConfig = ProfileViewsConfig;
  public viewComponents = Object.values(ProfileViewsConfig);
  public isColumnFormVisible = false;

  constructor(private cd: ChangeDetectorRef) { }

  public isSelected(componentName: string): boolean {
    if (!this.column || !this.column.components) {
      return false;
    }
    if (this.column.components.find((cmpName) => cmpName === componentName)) {
      return true;
    }
    return false;
  }

  public toggleSelectComponent(componentName: string): void {
    if (!this.column) {
      return;
    }

    if (!this.column.components) {
      this.column.components = new Array<string>();
    }
    const foundIndex = this.column.components.indexOf(componentName);
    if (foundIndex >= 0) {
      this.column.components.splice(foundIndex, 1);
    } else {
      this.column.components.push(componentName);
    }
    this.resetComponents();
  }

  public resetComponents(): void {
    const cmps = this.column.components.slice(0, this.column.components.length);
    delete this.column.components;
    this.column.components = cmps;
  }

  public contextNavClick(event, nav: any, rowIndex: number, colIndex: number): void {
    event.preventDefault();
    const col = typeof rowIndex !== 'undefined' ? this.column.rows[rowIndex].cols[colIndex] : this.column;
    col.styles = Object.assign({}, col.styles, nav.styles);

    // if (nav.id.indexOf('align-horizontal')) {
    //   const col = typeof rowIndex !== 'undefined' ? this.column.rows[rowIndex].cols[colIndex] : this.column;
    //   col.styles = Object.assign({}, col.styles, nav.styles);
    // } else if (nav.id.indexOf('align-horizontal')) {
    //   const col = typeof rowIndex !== 'undefined' ? this.column.rows[rowIndex].cols[colIndex] : this.column;
    //   col.styles = Object.assign({}, col.styles, nav.styles);
    // } else if(nav.id === 'stretch') {
    //   const col = typeof rowIndex !== 'undefined' ? this.column.rows[rowIndex].cols[colIndex] : this.column;
    //   col.styles = Object.assign({}, col.styles, nav.styles);
    // }
  }

  closeClicked(event: any): void {
    event.preventDefault();
    this.closeClick.emit(this.column);
  }

  public editColumnClick(event: any): void {
    event.preventDefault();
    this.isColumnFormVisible = true;
  }

  public columnFormCloseClick(col: Column): void {
    this.isColumnFormVisible = false;
  }
}
