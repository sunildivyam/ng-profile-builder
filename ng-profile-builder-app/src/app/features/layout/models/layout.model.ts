import { Row } from './row.model';
import { Column } from './column.model';

export class Layout {
  id: string;
  title: string;
  rows: Array<Row>;
  userId: string;
  
  constructor() {
    this.title = 'Custom Layout Title';
    this.rows = new Array<Row>();
    let row = new Row();    
    let col = new Column();
    col.name = '12';     
    row.cols.push(col);
    try {
    this.rows.push(row);
    } catch(er) {
      console.log(er);
    }
    console.log(this.rows);
   }
}
