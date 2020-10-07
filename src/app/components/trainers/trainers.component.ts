import { Component, OnInit } from '@angular/core';
import {TestService} from '../../test.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})
export class TrainersComponent implements OnInit {

  constructor(private testService: TestService) {

  }

  ngOnInit(): void {
  }

  test(): string {
    return this.testService.test();
  }
}
