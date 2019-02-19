import { Row } from './row.model';

export class Column {
  name: string;
  rows: Array<Row>;
  styles: Object;
  constructor() {
    this.rows = new Array<Row>();
  }
}
