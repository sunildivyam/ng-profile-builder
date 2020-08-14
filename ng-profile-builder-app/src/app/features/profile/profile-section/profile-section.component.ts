import { Component,
  OnChanges,
  Input,
  ViewChild,
  ViewContainerRef,
  Provider,
  ReflectiveInjector,
  ResolvedReflectiveProvider,
  ComponentFactoryResolver } from '@angular/core';
import { ProfileContent, ViewComponentsConfig } from '../models';
import { ProfileViewsConfig } from '../configs/profile-views.config';

@Component({
  selector: 'pba-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent implements OnChanges {
  @Input() content: ProfileContent;
  @Input() components: Array<string>;

  @ViewChild('vc', { static: true, read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  renderComponent(componentClass, inputNames): void {
    const inputProviders: Array<Provider> = inputNames.map((inputName) => {
      return {
        provide: inputName,
        useValue: this.content[inputName]
      };
    });
    const resolvedInputProviders: Array<ResolvedReflectiveProvider> = ReflectiveInjector.resolve(inputProviders);
    const reflectiveInjectors = ReflectiveInjector.fromResolvedProviders(resolvedInputProviders, this.viewContainerRef.parentInjector);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const componentRef = componentFactory.create(reflectiveInjectors);
    // componentRef.location.nativeElement.style = `width: 100%;`;
    this.viewContainerRef.insert(componentRef.hostView);
  }

  renderComponents(): void {
    this.viewContainerRef.clear();
    if (!this.components || !this.components.length) {
      return;
    }
    this.components.map((componentName) => {
      const compConfig = ProfileViewsConfig[componentName] as ViewComponentsConfig;
      this.renderComponent(compConfig.component, compConfig.inputNames);
    });
  }

  ngOnChanges(): void {
    this.renderComponents();
  }
}
