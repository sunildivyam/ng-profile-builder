import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Profile } from '../models';
import { ProfileWizardSteps } from '../configs/profile-wizard-steps';
import { WizardStep } from 'src/app/core';

@Component({
  selector: 'pba-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnChanges {
  @Input() profile: Profile;
  @Output() saved = new EventEmitter();

  profileSteps: Array<WizardStep>;
  saveProfileClicked = new EventEmitter();

  constructor() {
    this.saveProfileClicked.subscribe((event) => {
      const profileStep = this.profileSteps.find(step => step.data[event.formName]);
      event.currentStep = profileStep;
      this.saveProfile(event);
    });
  }

  saveProfile(event): void {
    this.saved.emit(event);
  }

  ngOnChanges(): void {
    if (this.profile && this.profile.content) {
      const pSteps = ProfileWizardSteps.slice();
      pSteps.map((step: WizardStep) => {
        step.data = {};
        step.data[step.name] = this.profile.content[step.name];
        step.data.saved = this.saveProfileClicked;
      });
      this.profileSteps = pSteps;
    }
  }
}
