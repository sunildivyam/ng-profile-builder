import { Component, OnInit, Input, Output, EventEmitter, Injector, OnChanges } from '@angular/core';
import {Education} from '../../../models';

@Component({
  selector: 'pba-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnChanges {
  @Input() education: Array<Education>;
  @Output() onSave = new EventEmitter();

  formData: Array<Education>;
  isListMode: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  private onSaveSuccess() {
    console.log('Education Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private onSaveNext() {
    console.log('Education Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private onSaveError() {
    console.log('Education Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('education');
    const onSaveFromInjector = this.injector.get('onSave');
    if (onSaveFromInjector) {
      this.onSave = onSaveFromInjector;
    }
    this.formData = formInjector || new Array<Education>();
    this.isListMode = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.education)) || new Array<Education>();
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'education';
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
    this.formData.push(new Education());
  }
}
