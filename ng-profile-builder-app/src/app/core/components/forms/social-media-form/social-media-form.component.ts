import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Injector } from '@angular/core';
import { SocialMedia } from '../../../models';

@Component({
  selector: 'pba-social-media-form',
  templateUrl: './social-media-form.component.html',
  styleUrls: ['./social-media-form.component.css']
})
export class SocialMediaFormComponent implements OnInit, OnChanges {
  @Input() socialMedia: Array<SocialMedia>;
  @Output() onSave = new EventEmitter();

  formData: Array<SocialMedia>;
  saveStarted: boolean;
  saveSuccess: boolean;

  private onSaveSuccess() {
    console.log('Social Media Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private onSaveNext() {
    console.log('Social Media Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private onSaveError() {
    console.log('Social Media Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('socialMedia');
    const onSaveFromInjector = this.injector.get('onSave');
    if (onSaveFromInjector) {
      this.onSave = onSaveFromInjector;
    }
    this.formData = formInjector || new Array<SocialMedia>();
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.formData = JSON.parse(JSON.stringify(this.socialMedia)) || new Array<SocialMedia>();
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'socialMedia';
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
    this.formData.push(new SocialMedia());
  }
}
