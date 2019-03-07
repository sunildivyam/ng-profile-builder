import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Column, Row } from '../models';
import { ContextNavs } from '../configs/context-navs';

@Component({
  selector: 'pba-column-form',
  templateUrl: './column-form.component.html',
  styleUrls: ['./column-form.component.scss']
})
export class ColumnFormComponent implements OnInit, OnChanges {
  @Input() column: Column;
  @Output() formClosed = new EventEmitter();
  public contextNav = ContextNavs;

  constructor() {

  }

  private getTotalOfColumns(cols: Array<Column>) {
    let colCount = 0;
    cols.map((col) => {
      if (col.name) {
        colCount += parseInt(col.name);
      }
    });
    return colCount;
  }

  private getNewRow(): Row {
    const row = new Row();
    const col = new Column();
    col.name = '12';
    row.cols.push(col);
    return row;
  }
  public addRowClick(event): void {
    this.column.rows.push(this.getNewRow());
  }

  public addColumnClick(event, row: Row): void {
    if (!this.column.rows || !this.column.rows.length) {
      this.column.rows.push(this.getNewRow());
    } else if (row.cols.length === 12 || this.getTotalOfColumns(row.cols) == 12) {
      return;
    } else {
      const col = new Column();
      col.name = '1';
      row.cols.push(col);
    }
  }

  public removeColumnClick(event, rowIndex: number, colIndex: number): void {
    this.column.rows[rowIndex].cols.splice(colIndex, 1);
    if (!this.column.rows[rowIndex].cols.length) {
      this.column.rows.splice(rowIndex, 1);
    }
  }

  public contextNavClick(event, nav: any, rowIndex: number, colIndex: number): void {
    event.preventDefault();
    if (nav.id === 'remove_column') {
      this.column.rows[rowIndex].cols.splice(colIndex, 1);
      if (!this.column.rows[rowIndex].cols.length) {
        this.column.rows.splice(rowIndex, 1);
      }
    } else if (nav.id.indexOf('align-horizontal')) {
      const col = typeof rowIndex !== 'undefined' ? this.column.rows[rowIndex].cols[colIndex] : this.column;
      col.styles = Object.assign({}, col.styles, nav.styles);
    } else if (nav.id.indexOf('align-horizontal')) {
      const col = typeof rowIndex !== 'undefined' ? this.column.rows[rowIndex].cols[colIndex] : this.column;
      col.styles = Object.assign({}, col.styles, nav.styles);
    }
  }

  public removeRowClick(event, rowIndex: number): void {
    this.column.rows.splice(rowIndex, 1);
  }

  public closeClick(event): void {
    event.preventDefault();
    this.formClosed.emit(this.column);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    // this.initRows();
  }

}
