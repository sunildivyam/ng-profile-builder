import { Component, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import {NgModel} from '@angular/forms';


@Component({
  selector: 'pba-extended-list-form',
  templateUrl: './extended-list-form.component.html',
  styleUrls: ['./extended-list-form.component.css']
})
export class ExtendedListFormComponent implements OnChanges {
  @Input() list: Array<string>;
  @Input() headerText: string;
  @Input() listId: string;
  @Input() placeholderText: string;
  @Input() addBtnLabel: string;
  @Input() dragOperationEnabled: boolean;

  @Output() changed = new EventEmitter();

  @ViewChild(NgModel) model: NgModel;

  formData: Array<string>;

  constructor() {
    this.formData = new Array<string>();
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.list)) || new Array<string>();
  }

  onRemoveClick(event, index): void {
    if (event) {
      event.preventDefault();
    }
    this.formData.splice(index, 1);
    event.items = this.formData;
    this.changed.emit(event);
  }

  addClicked(event): void {
    if (event) {
      event.preventDefault();
    }
    this.formData.push('');
    event.items = this.formData;
    this.changed.emit(event);
  }

  onValueUpdate(event, itemIndex): void {
    this.formData[itemIndex] = event.srcElement.value;
    event.items = this.formData;
    this.changed.emit(event);
  }

  identify(index, item): number  {
    return index;
  }
}
