import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  present = '안녕';
  commandText;

  constructor() { }

  startTime(event) {
    this.present = event;
  }

  ngOnInit(): void {
  }

}
