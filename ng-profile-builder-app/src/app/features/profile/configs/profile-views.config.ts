import {
  BasicInfoViewComponent,
  EmployersViewComponent,
  EmployersSmallViewComponent,
  EmployersMediumViewComponent,
  EducationViewComponent,
  SkillsViewComponent,
  ProjectsViewComponent,
  SocialMediaViewComponent,
  AdditionalsViewComponent,
  ProfileHeaderViewComponent,
  PrimarySkillsViewComponent,
  ContactBarViewComponent,
  SummaryViewComponent
} from 'src/app/core';
import { ViewComponentsConfig } from '../models';

export const ProfileViewsConfig = {
  basicInfo: new ViewComponentsConfig('Basic Information', 'basicInfo',  BasicInfoViewComponent, ['basicInfo']),
  employers: new ViewComponentsConfig('Employers', 'employers', EmployersViewComponent, ['employers']),
  employersSmall: new ViewComponentsConfig('Employers Small View', 'employersSmall', EmployersSmallViewComponent, ['employers']),
  employersMedium: new ViewComponentsConfig('Employers Medium View', 'employersMedium', EmployersMediumViewComponent, ['employers']),
  education: new ViewComponentsConfig('Education', 'education', EducationViewComponent, ['education']),
  projects: new ViewComponentsConfig('Projects', 'projects', ProjectsViewComponent, ['projects']),
  skills: new ViewComponentsConfig('Skills', 'skills', SkillsViewComponent, ['skills']),
  socialMedia: new ViewComponentsConfig('Social Media', 'socialMedia', SocialMediaViewComponent, ['socialMedia']),
  additionals: new ViewComponentsConfig('Additionals', 'additionals', AdditionalsViewComponent, ['additionals']),
  profileHeader: new ViewComponentsConfig('Profile Header', 'profileHeader', ProfileHeaderViewComponent, ['basicInfo', 'employers']),
  primarySkills: new ViewComponentsConfig('Primary Skills', 'primarySkills', PrimarySkillsViewComponent, ['skills']),
  contactBar: new ViewComponentsConfig('Contact Bar', 'contactBar', ContactBarViewComponent, ['basicInfo']),
  summary: new ViewComponentsConfig('Profile Summary', 'summary', SummaryViewComponent, ['basicInfo']),
};
