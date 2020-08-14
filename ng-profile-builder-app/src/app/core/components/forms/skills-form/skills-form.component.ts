import { Component, Input, Output, EventEmitter, Injector, OnChanges } from '@angular/core';
import {Skill} from '../../../models';

@Component({
  selector: 'pba-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnChanges {
  @Input() skills: Array<Skill>;
  @Output() onSave = new EventEmitter();

  formData: Array<Skill>;
  isListMode: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  private onSaveSuccess() {
    console.log('Skills Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private onSaveNext() {
    console.log('Skills Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private onSaveError() {
    console.log('Skills Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('skills');
    const onSaveFromInjector = this.injector.get('onSave');
    if (onSaveFromInjector) {
      this.onSave = onSaveFromInjector;
    }
    this.formData = formInjector || new Array<Skill>();
    this.isListMode = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.skills)) || new Array<Skill>();
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'skills';
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
    this.formData.push(new Skill());
  }

  onRatingChange(event, skillIndex) {
    this.formData[skillIndex].rating = event.rating || 0;
  }
}
