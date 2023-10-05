import { Component } from '@angular/core';
import { WELCOME } from './welcome.constant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  welcomeCards = WELCOME;
}
