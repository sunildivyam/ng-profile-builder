import { storiesOf, moduleMetadata } from '@storybook/angular';
import { PrimarySkillsViewComponent } from './primary-skills-view.component';
import { Skill } from '../../../models';
import { RatingViewComponent } from '../rating-view/rating-view.component';

const skill = new Skill();
skill.name = 'JavaScript OOJS';
skill.isPrimarySkill = true;
skill.rating = 8;
skill.summary = 'JavaScript Object Oriented Programming, ES6';
skill.from = new Date('4/6/2014');
const skills = new Array<Skill>(skill);
console.log("Story", skills);
storiesOf('Primary Skills View Component', module)
  .addDecorator(
    moduleMetadata({
      declarations: [PrimarySkillsViewComponent, RatingViewComponent],
    })
  )
  .add('Primaty Skills List', () => {
    return {
      template: `<pba-primary-skills-view [skills]="skills"></pba-primary-skills-view>`,
      props: {
        skills
      },
    };
  })