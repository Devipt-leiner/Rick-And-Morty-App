import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Character } from './core/interfaces/character.interface';
import { CharacterService } from './core/services/character.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rick-and-morty-app';

  characters: Character[] = [];
  character!: Character;
  items!: MenuItem[];
  notCharacters: boolean = true;
  visibleSidebar!: boolean;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.customCharacter.subscribe(value => {});
  }

  updateHistory(character: Character) {
    this.characters.push(character);
  }

  getCharacter(value: boolean) {
    this.notCharacters = !value;
  }

  search(character: Character) {
    this.visibleSidebar = false;
    this.character = character;

    this.characterService.changeCharacter(character);
  }
}
