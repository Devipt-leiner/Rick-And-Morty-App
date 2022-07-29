import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { Character } from 'src/app/core/interfaces/character.interface';
import { CHARACTERS } from '../../../graphql/graphql.queries';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  character!: Character;
  currentPage: number = 1;
  error: any;
  loading: boolean = true;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.getCharacters(this.currentPage);
  }

  getCharacters(page: number) {

    let CHARACTERS = gql`
    query {
      characters(page: ${page}) {
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
        query: CHARACTERS,
      })
      .valueChanges.subscribe((result: any) => {
        this.characters = result.data.characters.results;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

  previous() {
    this.currentPage > 0 ? this.currentPage-- : (this.currentPage = 0);
    let page = this.currentPage;
    this.getCharacters(page);
  }

  next() {
    this.currentPage++;
    let page = this.currentPage;
    this.getCharacters(page);
  }
}
