import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private exampleCharacter: Character = {
    id: 1,
    name: '',
    image: '',
    status: '',
    species: '',
	  type: '',
	  gender: '',
    origin: {
      name: ''
    },
    location: {
      name: ''
    },
    created: ''
  }

  private character = new BehaviorSubject<Character>(this.exampleCharacter);
  public customCharacter = this.character.asObservable();

  public changeCharacter(character: Character): void {
    this.character.next(character);
  }

  constructor() { }

}
