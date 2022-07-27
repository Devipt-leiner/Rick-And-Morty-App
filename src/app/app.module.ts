import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/resources/card/card.component';
import { CharacterComponent } from './components/pages/character/character.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { CharacterService } from './core/services/character.service';
import { GenerateButtonComponent } from './components/resources/generate-button/generate-button.component';
import { HeaderComponent } from './components/resources/header/header.component';
import { LoadingComponent } from './components/resources/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CharacterComponent,
    CharactersComponent,
    GenerateButtonComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [
    CharacterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
