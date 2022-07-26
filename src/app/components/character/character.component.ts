import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Character } from 'src/app/interfaces/character.interface';
import { CHARACTERS } from "../../graphql/graphql.queries";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Output() characterGenerated = new EventEmitter<Character>();

  characters: Character[] = [];
  character!: Character;
  loading: boolean = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
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

  generateCharacter () {
    let randomData = Math.floor(Math.random()*this.characters.length);
    this.character = this.characters[randomData];
    this.characterGenerated.emit(this.character);
  }

}
