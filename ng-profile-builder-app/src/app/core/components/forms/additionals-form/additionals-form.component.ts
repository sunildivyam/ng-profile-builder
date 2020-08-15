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
  @Output() saved = new EventEmitter();

  formData: Array<Additional>;
  dragOperationBulletsEnabled: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  savedSuccess(): void {
    console.log('Additionals Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedNext(): void {
    console.log('Additionals Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedError(): void {
    console.log('Additionals Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('additionals');
    const savedFromInjector = this.injector.get('saved');
    if (savedFromInjector) {
      this.saved = savedFromInjector;
    }
    this.formData = formInjector || new Array<Additional>();
    this.dragOperationBulletsEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.additionals));
  }

  saveClicked(event): void {
    if (this.saveStarted === true) {
      return;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'additionals';
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
    this.formData.push(new Additional());
  }

  onBulletsChange(event, additionalIndex): void {
    this.formData[additionalIndex].bullets = event.items;
  }
}
