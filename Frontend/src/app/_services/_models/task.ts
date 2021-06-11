import {Classroom} from './classroom';
import {Subject} from './subject';

export class User {
  task_id: string;
  question: string;
  duedate: string;
  class: Classroom;
  subject: Subject;
}
