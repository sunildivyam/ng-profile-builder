import { Component, Input, Output, EventEmitter, OnChanges, Injector } from '@angular/core';
import {Project} from '../../../models';

@Component({
  selector: 'pba-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnChanges {
  @Input() projects: Array<Project>;
  @Output() onSave = new EventEmitter();

  formData: Array<Project>;
  dragOperationRolesEnabled: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  onSaveSuccess() {
    console.log('Projects Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveNext() {
    console.log('Projects Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  onSaveError() {
    console.log('Projects Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('projects');
    const onSaveFromInjector = this.injector.get('onSave');
    if (onSaveFromInjector) {
      this.onSave = onSaveFromInjector;
    }
    this.formData = formInjector || new Array<Project>();
    this.dragOperationRolesEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.projects)) || new Array<Project>();
  }

  onSaveClick(event) {
    if (this.saveStarted === true) {
      return false;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'projects';
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
    this.formData.push(new Project());
  }

  onRolesChange(event, projectIndex) {
    this.formData[projectIndex].roles = event.items;
  }

  onTechnologiesChange(event, projectIndex) {
    this.formData[projectIndex].technologies = event.items;
  }
}
