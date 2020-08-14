import { Component, Input, Output, EventEmitter, Injector, OnChanges } from '@angular/core';

import {Employer} from '../../../models';


@Component({
  selector: 'pba-employers-form',
  templateUrl: './employers-form.component.html',
  styleUrls: ['./employers-form.component.css']
})
export class EmployersFormComponent implements OnChanges {
  @Input() employers: Array<Employer>;
  @Output() onSave = new EventEmitter();

  formData: Array<Employer>;
  dragOperationRolesEnabled: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  onSaveSuccess() {
    console.log('Employers Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveNext() {
    console.log('Employers Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveError() {
    console.log('Employers Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('employers');
    const onSaveFromInjector = this.injector.get('onSave');
    if (onSaveFromInjector) {
      this.onSave = onSaveFromInjector;
    }
    this.formData = formInjector || new Array<Employer>();
    this.dragOperationRolesEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.employers)) || new Array<Employer>();
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'employers';
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
    this.formData.push(new Employer());
  }

  onRolesChange(event, employerIndex) {
    this.formData[employerIndex].roles = event.items;
  }
}
