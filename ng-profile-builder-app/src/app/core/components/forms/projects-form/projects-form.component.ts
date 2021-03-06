import { Component, Input, Output, EventEmitter, OnChanges, Injector } from '@angular/core';
import {Project} from '../../../models';

@Component({
  selector: 'pba-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnChanges {
  @Input() projects: Array<Project>;
  @Output() saved = new EventEmitter();

  formData: Array<Project>;
  dragOperationRolesEnabled: boolean;
  saveStarted: boolean;
  saveSuccess: boolean;

  savedSuccess(): void {
    console.log('Projects Saved');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedNext(): void {
    console.log('Projects Saving');
    this.saveStarted = false;
    this.saveSuccess = true;
  }

  savedError(): void {
    console.log('Projects Error occured');
    this.saveStarted = false;
    this.saveSuccess = false;
  }

  constructor(private injector: Injector) {
    const formInjector = this.injector.get('projects');
    const savedFromInjector = this.injector.get('saved');
    if (savedFromInjector) {
      this.saved = savedFromInjector;
    }
    this.formData = formInjector || new Array<Project>();
    this.dragOperationRolesEnabled = false;
    this.saveStarted = false;
    this.saveSuccess = null;
  }

  ngOnChanges(): void {
    this.formData = JSON.parse(JSON.stringify(this.projects)) || new Array<Project>();
  }

  saveClicked(event): void {
    if (this.saveStarted === true) {
      return;
    }

    this.saveStarted = true;
    this.saveSuccess = null;

    event.preventDefault();
    event.formName = 'projects';
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
    this.formData.push(new Project());
  }

  onRolesChange(event, projectIndex): void {
    this.formData[projectIndex].roles = event.items;
  }

  onTechnologiesChange(event, projectIndex): void {
    this.formData[projectIndex].technologies = event.items;
  }
}
