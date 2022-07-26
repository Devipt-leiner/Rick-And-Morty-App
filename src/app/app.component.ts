import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rick-and-morty-app';

  items!: MenuItem[];

  notCharacters: boolean = true;

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
          }
        ],
      },
    ];
  }

  getCharacter(value: boolean) {
    this.notCharacters = !value;
  }
}
