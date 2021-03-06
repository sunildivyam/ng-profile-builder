import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pba-control-toolbar',
  templateUrl: './control-toolbar.component.html',
  styleUrls: ['./control-toolbar.component.scss']
})
export class ControlToolbarComponent {
  @Output() public saveClicked = new EventEmitter();
  @Output() public addClicked = new EventEmitter();
  @Output() public deleteClicked = new EventEmitter();

  constructor() { }
  public saveClick(event): void {
    this.saveClicked.emit(event);
  }
  public addClick(event): void {
    this.addClicked.emit(event);
  }
  public deleteClick(event): void {
    this.deleteClicked.emit(event);
  }
}
