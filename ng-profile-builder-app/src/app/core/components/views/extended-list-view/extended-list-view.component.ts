import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'pba-extended-list-view',
  templateUrl: './extended-list-view.component.html',
  styleUrls: ['./extended-list-view.component.css']
})
export class ExtendedListViewComponent implements OnInit {
  @Input() list:Array<string>;
  @Input() headerText:string;
  @Input() listId:string;
  @Input() placeholderText:string;
  @Input() addBtnLabel:string;
  @Input() dragOperationEnabled:boolean;

  @Output() onChange = new EventEmitter();

  @ViewChild(NgModel) model: NgModel;

  formData: Array<string>;

  constructor() {
    this.formData = new Array<string>();
   }

  ngOnInit() {
  }

  ngOnChanges() {
    this.formData = JSON.parse(JSON.stringify(this.list)) || new Array<string>();
  }

  onListChange() {

  }

  onRemoveClick(event, index) {
    event && event.preventDefault();
    this.formData.splice(index, 1);
    event.items = this.formData;
    this.onChange.emit(event);
  }

  onAddClick(event) {
    event && event.preventDefault();
    this.formData.push("");
    event.items = this.formData;
    this.onChange.emit(event);
  }

  onValueUpdate(event, itemIndex) {
    this.formData[itemIndex] = event.srcElement.value;
    event.items = this.formData;
    this.onChange.emit(event);
  }

  identify(index, item) {
    return index;
  }
}
