import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-catalog',
  imports: [TableModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {

  autoBots = [
    {
      name:'prime',
      model:2012,
    },
    {
      name:'bubmblee',
      model:2021,
    },
    {
      name:'Ironhide',
      model:2018,
    }
  ]

}
