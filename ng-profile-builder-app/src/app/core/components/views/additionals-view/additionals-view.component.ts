import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import {Additional} from '../../../models';


@Component({
  selector: 'pba-additionals-view',
  templateUrl: './additionals-view.component.html',
  styleUrls: ['./additionals-view.component.css']
})
export class AdditionalsViewComponent implements OnInit, OnChanges {
  @Input() additionals: Array<Additional>;
  @Output() onSave = new EventEmitter();

  formData: Array<Additional>;
  dragOperationBulletsEnabled: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  onSaveSuccess() {
    console.log('Additionals Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveNext() {
    console.log('Additionals Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveError() {
    console.log('Additionals Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor() {
    this.formData = new Array<Additional>();
    this.dragOperationBulletsEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.formData = JSON.parse(JSON.stringify(this.additionals));
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event && event.preventDefault();
    event.formData = this.formData;
    event.onSaveSuccess = this.onSaveSuccess.bind(this);
    event.onSaveNext = this.onSaveNext.bind(this);
    event.onSaveError = this.onSaveError.bind(this);

    this.onSave.emit(event);
  }

  onRemoveClick(event, index) {
    event && event.preventDefault();
    this.formData.splice(index, 1);
  }

  onAddClick(event) {
    event && event.preventDefault();
    this.formData.push(new Additional());
  }

  onBulletsChange(event, additionalIndex) {
    this.formData[additionalIndex].bullets = event.items;
  }
}
