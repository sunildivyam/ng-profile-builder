import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {SocialMedia} from '../../../models';

@Component({
  selector: 'pba-social-media-view',
  templateUrl: './social-media-view.component.html',
  styleUrls: ['./social-media-view.component.css']
})
export class SocialMediaViewComponent implements OnInit, OnChanges {
  @Input() links:Array<SocialMedia>;
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

  constructor() {
    this.formData = new Array<SocialMedia>();
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.formData = JSON.parse(JSON.stringify(this.links)) || new Array<SocialMedia>();
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
    this.formData.push(new SocialMedia());
  }
}
