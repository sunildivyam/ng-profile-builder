export class WizardStep {
  name?: string;
  label?: string;
  component?: any;
  data?: any;

  constructor(name?, label?, component?, data?) {
    this.name = name;
    this.label = label;
    this.component = component;
    this.data = data;
  }
}
