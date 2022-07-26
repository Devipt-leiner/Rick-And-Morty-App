import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Character } from 'src/app/core/interfaces/character.interface';
import { CharacterService } from 'src/app/core/services/character.service';
import { CHARACTERS } from "../../graphql/graphql.queries";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: Character[] = [];
  charactersHistory: Character[] = [];
  character!: Character;
  loading: boolean = true;
  error: any;
  visibleSidebar!: boolean;
  notCharacter: boolean = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
  }

  getCharacter() {
    this.notCharacter = false;

    this.apollo.watchQuery({
      query: CHARACTERS,
    })
    .valueChanges.subscribe((result: any) => {
      this.characters = result.data.characters.results;
      this.loading = result.loading;
      this.error = result.error;
      this.generateCharacter();
    });
  }

  search(character: Character) {
    this.visibleSidebar = false;
    this.character = character;
  }

  generateCharacter () {
    let randomData = Math.floor(Math.random()*this.characters.length);
    this.character = this.characters[randomData];
    this.charactersHistory.push(this.character)
  }

}
