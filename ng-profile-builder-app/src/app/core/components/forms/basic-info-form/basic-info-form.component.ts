import { Component, Input, Output, EventEmitter, OnChanges, Injector } from '@angular/core';
import {BasicInfo} from '../../../models';

@Component({
  selector: 'pba-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.css']
})
export class BasicInfoFormComponent implements OnChanges {
  @Input() basicInfo: BasicInfo;
  @Output() saved = new EventEmitter<BasicInfo>();

  formData: BasicInfo;
  saveStarted: boolean;
  saveSuccess: boolean;


  savedSuccess(): void {
    console.log('Basic info Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedNext(): void {
    console.log('Basic info Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedError(): void {
    console.log('Basic info Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('basicInfo');
    const savedFromInjector = this.injector.get('saved');
    if (savedFromInjector) {
      this.saved = savedFromInjector;
    }
    this.formData = formInjector || new BasicInfo();
    this.saveStarted = false;
    this.saveSuccess = null;
   }



  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.basicInfo)) || new BasicInfo();
  }

  saveClicked(event): void {
    if (this.saveStarted === true) {
      return;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'basicInfo';
    event.formData = this.formData;
    event.savedSuccess = this.savedSuccess.bind(this);
    event.savedNext = this.savedNext.bind(this);
    event.savedError = this.savedError.bind(this);

    this.saved.emit(event);
  }

  overviewInput(event: any): void {
    setTimeout(() => {
      this.formData.overview = event.target.innerHTML;
    });
  }

  profileImageChanged(imageBase64Str: string): void {
    this.formData.profileImage = imageBase64Str;
  }
}
