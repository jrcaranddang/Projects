import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  // @HostListener('window:keypress', ['$event'])
  play($event, sound) {
    console.log($event.keyCode);
    console.log(sound.play());
  }

}
