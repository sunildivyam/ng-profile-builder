import { Component, Input, Output, EventEmitter, Injector, OnChanges } from '@angular/core';
import {Skill} from '../../../models';

@Component({
  selector: 'pba-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnChanges {
  @Input() skills: Array<Skill>;
  @Output() saved = new EventEmitter();

  formData: Array<Skill>;
  isListMode: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  private savedSuccess(): void {
    console.log('Skills Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private savedNext(): void {
    console.log('Skills Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private savedError(): void {
    console.log('Skills Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('skills');
    const savedFromInjector = this.injector.get('saved');
    if (savedFromInjector) {
      this.saved = savedFromInjector;
    }
    this.formData = formInjector || new Array<Skill>();
    this.isListMode = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.skills)) || new Array<Skill>();
  }

  saveClicked(event): void {
    if (this.saveStarted === true) {
      return;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'skills';
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
    this.formData.push(new Skill());
  }

  onRatingChange(event, skillIndex): void {
    this.formData[skillIndex].rating = event.rating || 0;
  }
}
