import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { Item } from './components/list-items/list-items.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'angular-couchdb-training';
  arrayItems: Array<Item> = [{ id: 1, name: 'item 1' }, { id: 2, name: 'item 2' }, { id: 3, name: 'item 3' }]
}
