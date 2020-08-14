import { storiesOf, moduleMetadata } from '@storybook/angular';
import { SkillsViewComponent } from './skills-view.component';
import { RatingViewComponent } from '../rating-view/rating-view.component';
import { Skill } from '../../../models';

const skill = new Skill();
skill.name = 'JavaScript OOJS';
skill.isPrimarySkill = true;
skill.rating = 8;
skill.summary = 'JavaScript Object Oriented Programming, ES6';
skill.from = new Date('4/6/2014');
const skills = new Array<Skill>(skill);

storiesOf('Skills View Component', module)
  .addDecorator(
    moduleMetadata({
      declarations: [SkillsViewComponent, RatingViewComponent],
    })
  )
  .add('Skills List', () => {
    return {
      template: `<pba-skills-view [skills]="skills"></pba-skills-view>`,
      props: {
        skills
      },
    };
  })