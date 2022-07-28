import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generate-button',
  templateUrl: './generate-button.component.html',
  styleUrls: ['./generate-button.component.css']
})
export class GenerateButtonComponent {

  @Output() isClick = new EventEmitter<boolean>();

  constructor() { }

  isClicked(evt: any) {
    this.isClick.emit(true)
  }

}
