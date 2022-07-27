import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/core/interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() characters: Character[] = []

  constructor() { }

  ngOnInit() {
  }

}
