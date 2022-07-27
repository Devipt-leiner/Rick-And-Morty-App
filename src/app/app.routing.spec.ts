import { ComponentFixture, async, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, RouterLinkWithHref, ActivatedRoute, convertToParamMap } from "@angular/router";
import { DebugElement } from "@angular/core";
import { Location } from "@angular/common";
import { By } from "@angular/platform-browser";
import { observable, of, Subject } from "rxjs";

import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './components/resources/card/card.component';
import { CharacterComponent } from './components/pages/character/character.component';
import { CharactersComponent } from './components/pages/characters/characters.component';
import { CharacterService } from './core/services/character.service';
import { GenerateButtonComponent } from './components/resources/generate-button/generate-button.component';
import { HeaderComponent } from './components/resources/header/header.component';
import { LoadingComponent } from './components/resources/loading/loading.component';

fdescribe('AppComponente Routing Example', () => {
  let router: Router;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let DebugElement: DebugElement;
  let Location: Location;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        CardComponent,
        CharacterComponent,
        CharactersComponent,
        CharacterService,
        GenerateButtonComponent,
        HeaderComponent,
        LoadingComponent
      ]
    });
  });

});
