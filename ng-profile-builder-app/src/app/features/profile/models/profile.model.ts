import {Layout} from '../../layout/models';
import { ProfileContent } from './profile-content.model';

export class Profile {
  id: string;
  title: string;
  layout: Layout;
  content: ProfileContent;
  userId: string;

  constructor() {
    this.content = new ProfileContent();
  }
}
