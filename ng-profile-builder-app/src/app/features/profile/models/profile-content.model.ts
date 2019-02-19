import {BasicInfo,
Skill,
SocialMedia,
Employer,
Project,
Education,
Additional} from '../../../core/models';

export class ProfileContent {
  basicInfo: BasicInfo;
  socialMedia: SocialMedia;
  employers: Array<Employer>;
  projects: Array<Project>;
  education: Education;
  skills: Array<Skill>;
  additionals: Array<Additional>;

  constructor() {
    this.basicInfo = new BasicInfo();
    this.socialMedia = new SocialMedia();
    this.employers = new Array<Employer>();
    this.projects = new Array<Project>();
    this.education = new Education();
    this.skills = new Array<Skill>();
    this.additionals = new Array<Additional>();
  }
}
