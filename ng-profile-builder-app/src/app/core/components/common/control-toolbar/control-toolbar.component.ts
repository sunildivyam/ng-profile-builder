import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pba-control-toolbar',
  templateUrl: './control-toolbar.component.html',
  styleUrls: ['./control-toolbar.component.scss']
})
export class ControlToolbarComponent implements OnInit {
  @Output() public onSaveClick = new EventEmitter();
  @Output() public onAddClick = new EventEmitter();
  @Output() public onDeleteClick = new EventEmitter();

  constructor() { }
  public saveClick(event): void {
    this.onSaveClick.emit(event);
  }
  public addClick(event): void {
    this.onAddClick.emit(event);
  }
  public deleteClick(event): void {
    this.onDeleteClick.emit(event);
  }

  ngOnInit() {
  }

}
