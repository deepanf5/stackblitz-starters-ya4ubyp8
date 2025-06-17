import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { Header } from './app/components/header/header';
import { Home } from './app/components/home/home';
import { RouterModule, provideRouter } from '@angular/router';
import { Catalog } from './app/components/catalog/catalog';

@Component({
  selector: 'app-root',
  template: `
   <router-outlet></router-outlet>
  `,
  imports: [Header, Home,RouterModule],
})
export class App {
  name = 'auto bots';
}

bootstrapApplication(App, {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideRouter([
      {
        path:'',component:Home
      },
      {
        path:'catalog',component:Catalog
      }
    ])

    
  ],
});
