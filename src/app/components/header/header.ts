import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [ButtonModule,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
