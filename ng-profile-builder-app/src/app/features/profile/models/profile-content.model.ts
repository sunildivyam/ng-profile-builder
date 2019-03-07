import {BasicInfo,
Skill,
SocialMedia,
Employer,
Project,
Education,
Additional} from '../../../core/models';

export class ProfileContent {
  basicInfo: BasicInfo;
  socialMedia: Array<SocialMedia>;
  employers: Array<Employer>;
  projects: Array<Project>;
  education: Array<Education>;
  skills: Array<Skill>;
  additionals: Array<Additional>;

  constructor() {
    this.basicInfo = new BasicInfo();
    this.socialMedia = new Array<SocialMedia>();
    this.employers = new Array<Employer>();
    this.projects = new Array<Project>();
    this.education = new Array<Education>();
    this.skills = new Array<Skill>();
    this.additionals = new Array<Additional>();
  }
}
