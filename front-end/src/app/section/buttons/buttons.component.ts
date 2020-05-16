import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  // 자식 컴포넌트가 부모 컴포넌트로 데이터를 보낼 수 있다.
  @Output() clickEvent = new EventEmitter<string>();

  constructor() { }

  start(event:MouseEvent) {
    this.clickEvent.emit('push');
  }

  ngOnInit(): void {
  }

}
