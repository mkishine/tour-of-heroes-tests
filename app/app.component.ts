import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
    </ul>
    <click-me></click-me>
    <br>
    <key-up1></key-up1>
    <br>
    <key-up2></key-up2>
    <br>
    <key-up3></key-up3>
    <br>
    <key-up4></key-up4>
    <br>
    <little-tour></little-tour>
`
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
