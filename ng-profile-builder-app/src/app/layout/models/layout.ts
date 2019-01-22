import { Row } from './row';

export interface Layout {
  id: number,
  title?: string,
  rows?: Row[],
  userId: number
}
