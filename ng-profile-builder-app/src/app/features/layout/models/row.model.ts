import { Column } from './column.model';

export class Row {
  cols: Array<Column>;

  constructor() {
    this.cols = new Array<Column>();
  }
}
