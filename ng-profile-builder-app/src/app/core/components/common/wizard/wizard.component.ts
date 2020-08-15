import {
  Component,
  OnChanges,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  ReflectiveInjector,
  Output,
  EventEmitter
} from '@angular/core';
import { WizardStep } from '../../../models';

@Component({
  selector: 'pba-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})

export class WizardComponent implements OnChanges {
  @Input() steps: Array<WizardStep>;
  @Input() activeStepIndex = 0;
  @Input() wizardContext: any;
  @Output() nextClick = new EventEmitter();
  @Output() previousClick = new EventEmitter();
  @ViewChild('vc', {static: true, read: ViewContainerRef}) stepViewContainerRef: ViewContainerRef;
  currentStep: WizardStep;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  nextBtnClick(event): void {
    event.preventDefault();
    if (this.activeStepIndex < (this.steps.length - 1)) {
      this.activeStepIndex++;
      event.currentStep = this.currentStep;
      this.nextClick.emit(event);
      this.loadSlide();
    }
  }

  previousBtnClick(event): void {
    event.preventDefault();
    if (this.activeStepIndex > 0) {
      this.activeStepIndex--;
      event.currentStep = this.currentStep;
      this.previousClick.emit(event);
      this.loadSlide();
    }
  }

  navBtnClick(event, navIndex): any {
    event.preventDefault();
    event.currentStep = this.currentStep;

    if (navIndex === this.activeStepIndex) {
      return false;
    } else if (navIndex < this.activeStepIndex) {
      this.activeStepIndex = navIndex;
      this.previousClick.emit(event);
    } else {
      this.activeStepIndex = navIndex;
      this.nextClick.emit(event);
    }
    this.loadSlide();
  }

  private loadSlide(): void {
    if (this.activeStepIndex > -1 && this.steps && this.steps.length ) {
      this.currentStep = this.steps[this.activeStepIndex];
      const inputProviders = Object.keys(this.currentStep.data).map((inputName) => {
        return {
          provide: inputName,
          useValue: this.currentStep.data[inputName]
        };
      });
      const resolvedInputs = ReflectiveInjector.resolve(inputProviders);
      const injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.stepViewContainerRef.parentInjector);

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentStep.component);
      const component = componentFactory.create(injector);
      this.stepViewContainerRef.clear();
      this.stepViewContainerRef.insert(component.hostView);
    }
  }

  ngOnChanges(): void {
    this.loadSlide();
  }
}
