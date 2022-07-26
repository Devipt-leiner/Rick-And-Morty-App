import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Character } from 'src/app/core/interfaces/character.interface';
import { CHARACTERS } from "../../graphql/graphql.queries";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];
  character!: Character;
  error: any;
  loading: boolean = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: CHARACTERS,
    })
    .valueChanges.subscribe((result: any) => {
      this.characters = result.data.characters.results;
      this.loading = result.loading;
      this.error = result.error;
    });
  }

}
