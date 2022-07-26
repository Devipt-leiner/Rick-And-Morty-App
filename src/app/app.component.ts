import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Character } from './interfaces/character.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rick-and-morty-app';

  characters: Character[] = [];
  items!: MenuItem[];
  notCharacters: boolean = true;
  visibleSidebar!: boolean;

  ngOnInit() {
  }

  updateHistory(character: Character) {
    this.characters.push(character);
  }

  getCharacter(value: boolean) {
    this.notCharacters = !value;
  }

  search(character: Character) {
    this.visibleSidebar = false;
  }
}
