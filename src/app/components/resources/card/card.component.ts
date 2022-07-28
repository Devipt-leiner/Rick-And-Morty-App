import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/core/interfaces/character.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() characters: Character[] = []
  displayModal: boolean = false;

  characterImage: string = '';
  characterName: string = '';
  characterSpecie: string = '';
  characterOrigin: string = '';

  constructor() { }

  showCharacter(character: Character) {
    this.displayModal = true;

    this.characterImage = character.image;
    this.characterName = character.name;
    this.characterSpecie = character.species;
    this.characterOrigin = character.origin.name;
  }

}
