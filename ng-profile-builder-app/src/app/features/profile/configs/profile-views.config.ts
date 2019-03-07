import {
  BasicInfoViewComponent,
  EmployersViewComponent,
  EducationViewComponent,
  SkillsViewComponent,
  ProjectsViewComponent,
  SocialMediaViewComponent,
  AdditionalsViewComponent
} from 'src/app/core';
import { ViewComponentsConfig } from '../models';

export const ProfileViewsConfig = {
  basicInfo: new ViewComponentsConfig('Basic Information', 'basicInfo',  BasicInfoViewComponent, ['basicInfo']),
  employers: new ViewComponentsConfig('Employers', 'employers', EmployersViewComponent, ['employers']),
  education: new ViewComponentsConfig('Education', 'education', EducationViewComponent, ['education']),
  projects: new ViewComponentsConfig('Projects', 'projects', ProjectsViewComponent, ['projects']),
  skills: new ViewComponentsConfig('Skills', 'skills', SkillsViewComponent, ['skills']),
  socialMedia: new ViewComponentsConfig('Social Media', 'socialMedia', SocialMediaViewComponent, ['socialMedia']),
  additionals: new ViewComponentsConfig('Additionals', 'additionals', AdditionalsViewComponent, ['additionals'])
};
