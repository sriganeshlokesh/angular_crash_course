import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crash-course';
  name: string = 'Ganesh';

  constructor() {
    this.changeName('Brad Traversy');
  }

  changeName(name: string) {
    this.name = name;
  }
}
