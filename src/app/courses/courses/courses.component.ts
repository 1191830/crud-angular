import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
  {_id: '1', name: 'portugues', category: '1'},
  {_id: '2', name: 'Matematica', category: '2'}];

  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
