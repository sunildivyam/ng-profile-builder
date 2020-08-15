import { Component, Input, Output, EventEmitter, OnChanges, Injector } from '@angular/core';
import { SocialMedia } from '../../../models';

@Component({
  selector: 'pba-social-media-form',
  templateUrl: './social-media-form.component.html',
  styleUrls: ['./social-media-form.component.css']
})
export class SocialMediaFormComponent implements OnChanges {
  @Input() socialMedia: Array<SocialMedia>;
  @Output() saved = new EventEmitter();

  formData: Array<SocialMedia>;
  saveStarted: boolean;
  saveSuccess: boolean;

  private savedSuccess(): void {
    console.log('Social Media Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private savedNext(): void {
    console.log('Social Media Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  private savedError(): void {
    console.log('Social Media Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('socialMedia');
    const savedFromInjector = this.injector.get('saved');
    if (savedFromInjector) {
      this.saved = savedFromInjector;
    }
    this.formData = formInjector || new Array<SocialMedia>();
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.socialMedia)) || new Array<SocialMedia>();
  }

  saveClicked(event): void {
    if (this.saveStarted === true) {
      return;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'socialMedia';
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
    this.formData.push(new SocialMedia());
  }
}
