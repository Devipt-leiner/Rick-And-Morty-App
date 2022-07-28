import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
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

  items!: MenuItem[];

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.characterService.customCharacter.subscribe((value) => {});

    this.items = [
      {
        label: 'Personaje aleatorio',
        icon: 'pi pi-fw pi-user',
        command: (event) => {
          this.router.navigateByUrl('/character');
        },

      },
      {
        label: 'Personajes',
        icon: 'pi pi-fw pi-users',
        command: (event) => {
          this.router.navigateByUrl('/characters');
        },
      },
    ];
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
