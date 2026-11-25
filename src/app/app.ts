import { Component, signal } from '@angular/core';
import { Itemlist } from './component/itemlist/itemlist';
import { Api } from './component/api/api';


@Component({
  imports: [Itemlist,Api],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('week-4');
}
