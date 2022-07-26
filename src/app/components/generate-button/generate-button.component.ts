import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generate-button',
  templateUrl: './generate-button.component.html',
  styleUrls: ['./generate-button.component.css']
})
export class GenerateButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  isClicked(evt: any) {
    this.onClick.emit(true)
  }

}
