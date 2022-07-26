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

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.characterService.customCharacter.subscribe((value) => {});
  }
}
