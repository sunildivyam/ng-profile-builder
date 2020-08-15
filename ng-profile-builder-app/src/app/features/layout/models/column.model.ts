import { Row } from './row.model';

export class Column {
  name: string;
  rows: Array<Row>;
  styles: object;
  components: Array<string>;

  constructor() {
    this.rows = new Array<Row>();
  }
}
