import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/pages/character/character.component';
import { CharactersComponent } from './components/pages/characters/characters.component';

export const routes: Routes = [
  {
    path: 'character',
    component: CharacterComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: '**',
    redirectTo: 'character'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
