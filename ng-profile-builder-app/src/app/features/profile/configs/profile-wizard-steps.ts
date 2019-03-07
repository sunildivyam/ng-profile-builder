import { WizardStep } from 'src/app/core';
import { BasicInfoFormComponent,
  EducationFormComponent,
  EmployersFormComponent,
  ProjectsFormComponent,
  SkillsFormComponent,
  SocialMediaFormComponent,
  AdditionalsFormComponent} from 'src/app/core/components/forms';

export const ProfileWizardSteps = [
  new WizardStep('basicInfo', 'Personal Information', BasicInfoFormComponent),
  new WizardStep('education', 'Education', EducationFormComponent),
  new WizardStep('employers', 'Employers', EmployersFormComponent),
  new WizardStep('projects', 'Projects', ProjectsFormComponent),
  new WizardStep('skills', 'Skills', SkillsFormComponent),
  new WizardStep('socialMedia', 'Social Media', SocialMediaFormComponent),
  new WizardStep('additionals', 'Additionals', AdditionalsFormComponent)
];
