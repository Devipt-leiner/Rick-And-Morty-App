import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Character } from 'src/app/core/interfaces/character.interface';
import { gql } from 'apollo-angular';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  characters: Character[] = [];
  charactersHistory: Character[] = [];
  character!: Character;
  loading: boolean = true;
  error: any;
  visibleSidebar!: boolean;
  notCharacter: boolean = true;

  constructor(private apollo: Apollo) {}

  getCharacter() {
    this.notCharacter = false;
    let CHARACTER = gql`
    query {
      characters(page: ${this.generateRandomPage()}) {
        results {
          id
          name
          image
          species
          status
          type
          gender
          origin {
            name
          }
          location {
            name
          }
          created
        }
      }
    }
  `;

    this.apollo
      .watchQuery({
        query: CHARACTER,
      })
      .valueChanges.subscribe((result: any) => {
        this.characters = result.data.characters.results;
        this.loading = result.loading;
        this.error = result.error;
        this.generateCharacter();
      });
  }

  generateRandomPage(): number {
    const r = Math.random()*(42-0) + 0;
    return Math.floor(r)
  }

  // Para ver un personaje del historial simplemente paso sus datos al componente.
  search(character: Character) {
    this.visibleSidebar = false;
    this.character = character;
  }

  /*
  Luego de traer todos los personajes de la página generada,
  los almaceno en un Array y traigo aleatoriamente a uno de ellos.
  */

  generateCharacter() {
    let randomData = Math.floor(Math.random() * this.characters.length);
    this.character = this.characters[randomData];
    this.validateHistory(this.character);
  }

  // De esta manera no permito que se repitan personajes en la sección de historial.
  validateHistory(character: Character) {
    if (!this.charactersHistory.includes(character)) {
      this.charactersHistory.push(character);
    }
  }
}
