import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [ButtonModule,Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
