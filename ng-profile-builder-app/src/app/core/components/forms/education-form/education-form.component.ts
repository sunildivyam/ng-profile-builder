import { Component, OnInit, Input, Output, EventEmitter, Injector, OnChanges } from '@angular/core';
import {Education} from '../../../models';

@Component({
  selector: 'pba-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnChanges {
  @Input() education: Array<Education>;
  @Output() saved = new EventEmitter();

  formData: Array<Education>;
  isListMode: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  private savedSuccess(): void {
    console.log('Education Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private savedNext(): void {
    console.log('Education Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private savedError(): void {
    console.log('Education Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('education');
    const savedFromInjector = this.injector.get('saved');
    if (savedFromInjector) {
      this.saved = savedFromInjector;
    }
    this.formData = formInjector || new Array<Education>();
    this.isListMode = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.education)) || new Array<Education>();
  }

  saveClicked(event): void {
    if (this.saveStarted === true) {
      return;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'education';
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
    this.formData.push(new Education());
  }
}
