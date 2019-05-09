import { Row } from './row.model';
import { Column } from './column.model';

export class Layout {
  id: string;
  title: string;
  rows: Array<Row>;
  uid: string;
  dateUpdated: Date;

  constructor() {
    this.title = 'Custom Layout Title';
    this.dateUpdated = new Date();
    this.rows = new Array<Row>();
    const row = new Row();
    const col = new Column();
    col.name = '12';
    row.cols.push(col);
    this.rows.push(row);
   }
}
