import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Injector } from '@angular/core';
import {BasicInfo} from '../../../models';

@Component({
  selector: 'pba-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.css']
})
export class BasicInfoFormComponent implements OnInit, OnChanges {
  @Input() basicInfo: BasicInfo;
  @Output() onSave = new EventEmitter<BasicInfo>();

  formData: BasicInfo;
  saveStarted: boolean;
  saveSuccess: boolean;


  onSaveSuccess() {
    console.log('Basic info Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveNext() {
    console.log('Basic info Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveError() {
    console.log('Basic info Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('basicInfo');
    const onSaveFromInjector = this.injector.get('onSave');
    if (onSaveFromInjector) {
      this.onSave = onSaveFromInjector;
    }
    this.formData = formInjector || new BasicInfo();
    this.saveStarted = false;
    this.saveSuccess = null;
   }



  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.basicInfo)) || new BasicInfo();
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'basicInfo';
    event.formData = this.formData;
    event.onSaveSuccess = this.onSaveSuccess.bind(this);
    event.onSaveNext = this.onSaveNext.bind(this);
    event.onSaveError = this.onSaveError.bind(this);

    this.onSave.emit(event);
  }

  overviewInput(event: any): void {
    setTimeout(() => {
      this.formData.overview = event.target.innerHTML;
    });
  }

  profileImageChanged(imageBase64Str: string) {
    this.formData.profileImage = imageBase64Str;
  }
}
