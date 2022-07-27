import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
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

  character: boolean = true;
  characters: boolean = false;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.customCharacter.subscribe((value) => {});
  }

  characterRoute() {
    this.character = true;
    this.characters = false;
  }

  charactersRoute() {
    this.character = false;
    this.characters = true;
  }
}
