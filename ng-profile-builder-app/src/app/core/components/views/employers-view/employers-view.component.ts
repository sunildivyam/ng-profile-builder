import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Employer} from '../../../models';


@Component({
  selector: 'pba-employers-view',
  templateUrl: './employers-view.component.html',
  styleUrls: ['./employers-view.component.css']
})
export class EmployersViewComponent implements OnInit {
  @Input() employers:Array<Employer>;
  @Output() onSave = new EventEmitter();

  formData: Array<Employer>;
  dragOperationRolesEnabled: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  onSaveSuccess() {
    console.log("Employers Saved");
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveNext() {
    console.log("Employers Saving");
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveError() {
    console.log("Employers Error occured");
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor() {
    this.formData = new Array<Employer>();
    this.dragOperationRolesEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.formData = JSON.parse(JSON.stringify(this.employers)) || new Array<Employer>();
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
    this.formData.push(new Employer());
  }

  onRolesChange(event, employerIndex) {
    this.formData[employerIndex].roles = event.items;
  }
}
