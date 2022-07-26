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
  loading = [false, false, false, false];
  notCharacters: boolean = true;
  visibleSidebar!: boolean;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.customCharacter.subscribe((value) => {});
  }

  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
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
