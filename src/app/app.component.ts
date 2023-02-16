import { Component, Input, VERSION } from '@angular/core';
/*
@Param
*/

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Pro: string;
  title = 'my-app';
  name = `Welcome to the Angular ${VERSION.major} starter!`;

  showMessage() {
    console.log('Welcome to the Angular ${VERSION.major} starter!');
  }

  logChanges($event) {
    console.log($event);
  }
}
