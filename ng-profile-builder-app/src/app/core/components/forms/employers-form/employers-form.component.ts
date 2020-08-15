import { Component, Input, Output, EventEmitter, Injector, OnChanges } from '@angular/core';

import {Employer} from '../../../models';


@Component({
  selector: 'pba-employers-form',
  templateUrl: './employers-form.component.html',
  styleUrls: ['./employers-form.component.css']
})
export class EmployersFormComponent implements OnChanges {
  @Input() employers: Array<Employer>;
  @Output() saved = new EventEmitter();

  formData: Array<Employer>;
  dragOperationRolesEnabled: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  savedSuccess(): void {
    console.log('Employers Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedNext(): void {
    console.log('Employers Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedError(): void {
    console.log('Employers Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('employers');
    const savedFromInjector = this.injector.get('saved');
    if (savedFromInjector) {
      this.saved = savedFromInjector;
    }
    this.formData = formInjector || new Array<Employer>();
    this.dragOperationRolesEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.employers)) || new Array<Employer>();
  }

  saveClicked(event): void {
    if (this.saveStarted === true) {
      return;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'employers';
    event.formData = this.formData;
    event.savedSuccess = this.savedSuccess.bind(this);
    event.savedNext = this.savedNext.bind(this);
    event.savedError = this.savedError.bind(this);

    this.saved.emit(event);
  }

  onRemoveClick(event, index): void {
    event.preventDefault();
    this.formData.splice(index, 1);
  }

  addClicked(event): void {
    event.preventDefault();
    this.formData.push(new Employer());
  }

  onRolesChange(event, employerIndex): void {
    this.formData[employerIndex].roles = event.items;
  }
}
