import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Injector } from '@angular/core';

import {Additional} from '../../../models';


@Component({
  selector: 'pba-additionals-form',
  templateUrl: './additionals-form.component.html',
  styleUrls: ['./additionals-form.component.css'],
  // encapsulation: ViewEncapsulation.Native,
})
export class AdditionalsFormComponent implements OnChanges {
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

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('additionals');
    const onSaveFromInjector = this.injector.get('onSave');
    if (onSaveFromInjector) {
      this.onSave = onSaveFromInjector;
    }
    this.formData = formInjector || new Array<Additional>();
    this.dragOperationBulletsEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.additionals));
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'additionals';
    event.formData = this.formData;
    event.onSaveSuccess = this.onSaveSuccess.bind(this);
    event.onSaveNext = this.onSaveNext.bind(this);
    event.onSaveError = this.onSaveError.bind(this);

    this.onSave.emit(event);
  }

  onRemoveClick(event, index) {
    event.preventDefault();
    this.formData.splice(index, 1);
  }

  onAddClick(event) {
    event.preventDefault();
    this.formData.push(new Additional());
  }

  onBulletsChange(event, additionalIndex) {
    this.formData[additionalIndex].bullets = event.items;
  }
}
