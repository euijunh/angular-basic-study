import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output()

  constructor() { }

  start(event:MouseEvent) {
    console.log(event)
  }

  ngOnInit(): void {
  }

}
