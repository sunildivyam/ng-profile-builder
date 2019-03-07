export class ViewComponentsConfig {
  label: string;
  name: string;
  component: any;
  inputNames: Array<string> = new Array<string>();

  constructor(label?, name?, component?, inputNames?) {
    this.label = label;
    this.name = name;
    this.component = component;
    this.inputNames = inputNames || new Array<string>();
  }
}
